const tableBody = document.querySelector("#ratioTable tbody");
    const addRowBtn = document.getElementById("addRowBtn");
    const totalAmountDisplay = document.getElementById("totalAmountDisplay");
    const totalAmountInput = document.getElementById("desiredTotalAmount");
    // Helper functions
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
        let raw = amounts[idx];
        if (Number.isInteger(raw)) {
          input.value = raw;
        } else {
          input.value = parseFloat(raw.toFixed(3));
        }
      });
    }
    function getTotalAmount() {
      return getAmounts().reduce((a, b) => a + b, 0);
    }
    function updateTotalAmountDisplay() {
      const total = getTotalAmount();
      totalAmountDisplay.textContent = Number.isInteger(total) ? total : total.toFixed(3);
    }
    // Distribute totalAmount by current ratios
    function distributeAmountsByRatios(totalAmount) {
      const ratios = getRatios();
      const sumRatios = ratios.reduce((a, b) => a + b, 0);
      let amounts = (sumRatios > 0)
        ? ratios.map(r => r / sumRatios * totalAmount)
        : ratios.map(_ => 0);
      setAmounts(amounts);
      updateTotalAmountDisplay();
    }
    // When a ratio is typed: only this row's amount changes, keeping total amount the same
    function onRatioInput(idx) {
      const ratios = getRatios();
      const total = getTotalAmount();
      const sumRatios = ratios.reduce((a, b) => a + b, 0);
      let amounts = getAmounts();
      amounts[idx] = sumRatios > 0 ? (ratios[idx] / sumRatios) * total : 0;
      setAmounts(amounts);
      updateTotalAmountDisplay();
    }
    // When an amount is typed: just set the amount, update the sum
    function onAmountInput(idx) {
      updateTotalAmountDisplay();
    }
    // When the desired total amount is changed: distribute among ratios
    function onTotalAmountInput() {
      const desiredTotal = parseFloat(totalAmountInput.value) || 0;
      distributeAmountsByRatios(desiredTotal);
    }
    function addRow(ratio = 1, name = "") {
      const tr = document.createElement("tr");
      // Name input
      const nameTd = document.createElement("td");
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.className = "nameInput";
      nameInput.value = name;
      nameTd.appendChild(nameInput);
      // Ratio input
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
      // Amount input (float up to 3 decimals)
      const amountTd = document.createElement("td");
      const amountInput = document.createElement("input");
      amountInput.type = "number";
      amountInput.className = "amountInput";
      amountInput.min = "0";
      amountInput.step = "0.001";
      amountInput.value = "0";
      amountInput.addEventListener("input", function () {
        const idx = Array.from(tableBody.children).indexOf(tr);
        onAmountInput(idx);
      });
      amountTd.appendChild(amountInput);
      // Remove button
      const removeTd = document.createElement("td");
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "🗑️";
      removeBtn.onclick = function() {
        tableBody.removeChild(tr);
        if (tableBody.children.length < 2) {
          addRow();
        }
        updateTotalAmountDisplay();
      };
      removeTd.appendChild(removeBtn);
      tr.appendChild(nameTd);
      tr.appendChild(ratioTd);
      tr.appendChild(amountTd);
      tr.appendChild(removeTd);
      tableBody.appendChild(tr);
    }
    // Compose initial table, set behaviors
    window.onload = function () {
      addRow(1);
      addRow(1);
      distributeAmountsByRatios(parseFloat(totalAmountInput.value) || 0);
      updateTotalAmountDisplay();
    };
    addRowBtn.onclick = function () {
      addRow(1);
      distributeAmountsByRatios(getTotalAmount());
    };
    totalAmountInput.addEventListener("change", onTotalAmountInput);
    totalAmountInput.addEventListener("blur", onTotalAmountInput);
    totalAmountInput.addEventListener("keyup", function(e) {
      if (e.key === "Enter") onTotalAmountInput();
    });