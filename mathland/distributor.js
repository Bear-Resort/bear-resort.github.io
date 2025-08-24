const tableBody = document.querySelector("#ratioTable tbody");
const addRowBtn = document.getElementById("addRowBtn");
const totalAmountInput = document.getElementById("totalAmountInput");

// Getters & setters
function getRatios() {
  return Array.from(tableBody.querySelectorAll(".ratioInput"))
    .map(input => parseFloat(input.value) || 0);
}
function setRatios(ratios) {
  tableBody.querySelectorAll(".ratioInput").forEach((input, idx) => {
    input.value = ratios[idx];
  });
}
function getAmounts() {
  return Array.from(tableBody.querySelectorAll(".amountInput"))
    .map(input => parseFloat(input.value) || 0);
}
function setAmounts(amounts) {
  tableBody.querySelectorAll(".amountInput").forEach((input, idx) => {
    const val = amounts[idx];
    input.value = Number.isInteger(val) ? val : parseFloat(val.toFixed(3));
  });
}
function getSumRatios() {
  return getRatios().reduce((a, b) => a + b, 0);
}
function calcTotalAmount() {
  return getAmounts().reduce((a, b) => a + b, 0);
}

// Ratio changed: update only that amount per the total, keep total as is
function onRatioInput(idx) {
  const ratios = getRatios();
  const amounts = getAmounts();
  const total = calcTotalAmount();
  const sumRatios = ratios.reduce((a, b) => a + b, 0);
  if (sumRatios === 0) {
    setAmounts(ratios.map(() => 0));
    totalAmountInput.value = 0;
    return;
  }
  amounts[idx] = ratios[idx] / sumRatios * total;
  setAmounts(amounts);
  // Update totalAmountInput to exact new total
  totalAmountInput.value = calcTotalAmount();
}

// Amount changed: recalculate all amounts so ratios and the edited amount's value match, and update total
function onAmountInput(idx) {
  const ratios = getRatios();
  const targetAmount = getAmounts()[idx]; // The user entry
  const rowRatio = ratios[idx];
  if (rowRatio === 0) return; // Can't do much
  const sumRatios = ratios.reduce((a, b) => a + b, 0);
  if (sumRatios === 0) return;
  // New total required so that (rowRatio/sumRatios)*total = targetAmount
  const newTotal = targetAmount * sumRatios / rowRatio;
  const newAmounts = ratios.map(r => r / sumRatios * newTotal);
  setAmounts(newAmounts);
  totalAmountInput.value = calcTotalAmount();
}

// Total changed: distribute by ratio
function onTotalAmountInput() {
  const ratios = getRatios();
  const sumRatios = ratios.reduce((a, b) => a + b, 0);
  let total = parseFloat(totalAmountInput.value) || 0;
  const amounts = (sumRatios > 0) ? ratios.map(r => r / sumRatios * total) : ratios.map(() => 0);
  setAmounts(amounts);
  totalAmountInput.value = calcTotalAmount();
}

// Add a row
function addRow(ratio = 1, name = "") {
  const tr = document.createElement("tr");
  // Name
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "nameInput";
  nameInput.value = name;
  nameTd.appendChild(nameInput);
  // Ratio
  const ratioTd = document.createElement("td");
  const ratioInput = document.createElement("input");
  ratioInput.type = "number";
  ratioInput.className = "ratioInput";
  ratioInput.value = ratio;
  ratioInput.min = "0";
  ratioInput.step = "any";
  ratioInput.addEventListener("input", function() {
    const idx = Array.from(tableBody.children).indexOf(tr);
    onRatioInput(idx);
  });
  ratioTd.appendChild(ratioInput);
  // Amount (float, 3 decimals allowed)
  const amountTd = document.createElement("td");
  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.className = "amountInput";
  amountInput.min = "0";
  amountInput.step = "0.001";
  amountInput.value = "0";
  amountInput.addEventListener("input", function() {
    const idx = Array.from(tableBody.children).indexOf(tr);
    onAmountInput(idx);
  });
  amountTd.appendChild(amountInput);
  // Remove
  const removeTd = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "🗑️";
  removeBtn.onclick = function() {
    tableBody.removeChild(tr);
    if (tableBody.children.length < 2) {
      addRow();
    }
    onTotalAmountInput();
  };
  removeTd.appendChild(removeBtn);
  tr.appendChild(nameTd);
  tr.appendChild(ratioTd);
  tr.appendChild(amountTd);
  tr.appendChild(removeTd);
  tableBody.appendChild(tr);

  // Initialize amounts for this row
  setTimeout(() => {
    // Distribute using current total
    onTotalAmountInput();
  }, 0);
}

window.onload = function () {
  addRow(1);
  addRow(1);
  totalAmountInput.value = 1000;
  onTotalAmountInput();
};

addRowBtn.onclick = function () {
  addRow(1);
  onTotalAmountInput();
};

totalAmountInput.addEventListener("input", onTotalAmountInput);