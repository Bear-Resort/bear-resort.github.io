import { updateMyLanguage } from '../assets/js/lang.js';

// ---- DATA STATE ----
let categories = [];
let aimedGrade = 93;

// CATEGORY NAME HELPER
function getCategoryDisplayName(cat, idx) {
    return cat.name && cat.name.trim() ? cat.name : `Category ${idx + 1}`;
}

// Rendering
function renderCategories() {
    const tbody = document.getElementById('category-tbody');
    tbody.innerHTML = '';
    categories.forEach((cat, idx) => {
    const tr = document.createElement('tr');
    if (cat.editing) {
        tr.innerHTML = `
        <td>
            <input type="text" value="${cat.name}" id="cat-name-${idx}" placeholder="(optional)">
        </td>
        <td>
            <input type="number" min="0" max="100" value="${cat.ratio}" id="cat-ratio-${idx}">
        </td>
        <td>-</td>
        <td class="actions">
            <button onclick="saveEdit(${idx})"><span class="eng">Save</span><span class="chn">保存</span></button>
            <button onclick="cancelEdit(${idx})"><span class="eng">Cancel</span><span class="chn">取消</span></button>
        </td>
        `;
    } else {
        let weighted = computeCategoryWeightedScore(cat);
        tr.innerHTML = `
        <td>${getCategoryDisplayName(cat, idx)}</td>
        <td>${cat.ratio}</td>
        <td>${typeof weighted === 'number' ? weighted.toFixed(2) : '-'}</td>
        <td class="actions">
            <button onclick="editCategory(${idx})"><span class="eng">Edit</span><span class="chn">編輯</span></button>
            <button onclick="deleteCategory(${idx})"><span class="eng">Delete</span><span class="chn">刪除</span></button>
            <button onclick="addSubAssignment(${idx})"><span class="eng">Add Assignment</span><span class="chn">增加作業</span></button>
        </td>
        `;
    }
    tbody.appendChild(tr);

    if (!cat.editing && Array.isArray(cat.subs) && cat.subs.length > 0) {
        const subTable = renderSubAssignments(cat, idx);
        tbody.appendChild(subTable);
    }
    });
    updateGoalMessage();
    updateMyLanguage();
}

function renderSubAssignments(cat, catIdx) {
    const subTr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 4;
    td.style.textAlign = 'left';
    td.style.paddingLeft = '24px';
    td.appendChild(document.createTextNode(`<span class="eng">Assignments for </span><span class="chn">作業給</span>"${getCategoryDisplayName(cat, catIdx)}":`));
    const subTable = document.createElement('table');
    subTable.className = 'sub-assignment-table';

    subTable.innerHTML = `
    <thead>
        <tr>
        <th><span class="eng">Name</span><span class="chn">名稱</span></th>
        <th><span class="eng">Score</span><span class="chn">分數</span></th>
        <th><span class="eng">Out of</span><span class="chn">總分</span></th>
        <th><span class="eng">% Grade</span><span class="chn">百分比</span></th>
        <th><span class="eng">Action</span><span class="chn">動作</span></th>
        </tr>
    </thead>
    <tbody>
        ${cat.subs.map((sub, subIdx) => sub.editing
        ? `<tr>
            <td><input type="text" value="${sub.name}" id="sub-name-${catIdx}-${subIdx}" placeholder="(optional)"></td>
            <td><input type="number" min="0" id="sub-grade-${catIdx}-${subIdx}" value="${sub.grade}"></td>
            <td><input type="number" min="1" id="sub-outof-${catIdx}-${subIdx}" value="${sub.outOf}"></td>
            <td>-</td>
            <td>
                <button onclick="saveSubEdit(${catIdx},${subIdx})"><span class="eng">Save</span><span class="chn">保存</span></button>
                <button onclick="cancelSubEdit(${catIdx},${subIdx})"><span class="eng">Cancel</span><span class="chn">取消</span></button>
            </td>
            </tr>`
        : `<tr>
            <td>${sub.name ? sub.name : '<span style="color:#aaa"><span class="eng">(Untitled)</span><span class="chn">(未命名)</span></span>'}</td>
            <td>${sub.grade || '-'}</td>
            <td>${sub.outOf || '-'}</td>
            <td>${sub.grade != null && sub.outOf ? ((sub.grade / sub.outOf) * 100).toFixed(2) : '-'}</td>
            <td>
                <button onclick="editSubAssignment(${catIdx},${subIdx})"><span class="eng">Edit</span><span class="chn">編輯</span></button>
                <button onclick="deleteSubAssignment(${catIdx},${subIdx})"><span class="eng">Delete</span><span class="chn">刪除</span></button>
            </td>
            </tr>`
        ).join('')}
    </tbody>
    `;
    td.appendChild(subTable);
    if (cat.subs.length === 0) {
    const none = document.createElement('div');
    none.style.color = '#ccc';
    none.style.fontSize = '0.98em';
    none.textContent = `<span class="eng">No assignments</span><span class="chn">尚無作業</span>`;
    td.appendChild(none);
    }
    subTr.appendChild(td);
    return subTr;
}

// Event Handlers
function addCategory() {
    categories.push({
    name: "",
    ratio: 0,
    editing: true,
    subs: [],
    });
    renderCategories();
}
function editCategory(idx) {
    categories[idx].editing = true;
    renderCategories();
}
function deleteCategory(idx) {
    if (confirm(updateMyLanguage() === "Eng" ? "Delete this category?" : "刪除類別嗎？")) {
    categories.splice(idx, 1);
    renderCategories();
    }
}
function saveEdit(idx) {
    const name = document.getElementById(`cat-name-${idx}`).value;
    let ratio = parseFloat(document.getElementById(`cat-ratio-${idx}`).value);
    if (isNaN(ratio) || ratio <= 0 || ratio > 100) {
        if (updateMyLanguage() === "Eng") {
            alert("Ratio must be a number between 0 and 100.");
        } else {
            alert("比例應當在0到100之間.");
        }
    return;
    }
    categories[idx].name = name.trim() ? name.trim() : "";
    categories[idx].ratio = Math.max(0, Math.min(100, ratio));
    categories[idx].editing = false;
    renderCategories();
}
function cancelEdit(idx) {
    if (!categories[idx].name && categories[idx].ratio === 0 && categories[idx].subs.length === 0) {
    categories.splice(idx, 1);
    } else {
    categories[idx].editing = false;
    }
    renderCategories();
}

function addSubAssignment(catIdx) {
    let cat = categories[catIdx];
    cat.subs.push({
    name: "",
    grade: "",
    outOf: "",
    editing: true,
    });
    renderCategories();
}
function editSubAssignment(catIdx, subIdx) {
    categories[catIdx].subs[subIdx].editing = true;
    renderCategories();
}
function deleteSubAssignment(catIdx, subIdx) {
    if (confirm(updateMyLanguage() === "Eng" ? "Delete this assignment?" : "刪除作業嗎？")) {
    categories[catIdx].subs.splice(subIdx, 1);
    renderCategories();
    }
}
function saveSubEdit(catIdx, subIdx) {
    const sub = categories[catIdx].subs[subIdx];
    const name = document.getElementById(`sub-name-${catIdx}-${subIdx}`).value;
    let grade = document.getElementById(`sub-grade-${catIdx}-${subIdx}`).value;
    let outOf = document.getElementById(`sub-outof-${catIdx}-${subIdx}`).value;
    grade = (grade === "") ? "" : parseFloat(grade);
    outOf = (outOf === "") ? "" : parseFloat(outOf);

    if (outOf !== "" && (isNaN(outOf) || outOf <= 0)) {
    alert("Out Of must be a positive number.");
    return;
    }
    if (grade !== "" && (isNaN(grade) || grade < 0)) {
    alert("Grade must be a non-negative number.");
    return;
    }
    if (grade !== "" && outOf === "") {
    alert("Please enter 'Out Of'.");
    return;
    }
    sub.name = name.trim();
    sub.grade = grade;
    sub.outOf = outOf;
    sub.editing = false;
    renderCategories();
}
function cancelSubEdit(catIdx, subIdx) {
    const sub = categories[catIdx].subs[subIdx];
    if (!sub.name && (sub.grade === "" || sub.grade == null) && (sub.outOf === "" || sub.outOf == null)) {
    categories[catIdx].subs.splice(subIdx, 1);
    } else {
    sub.editing = false;
    }
    renderCategories();
}

// Calculation
function computeCategoryWeightedScore(cat) {
    if (!cat.subs || cat.subs.length === 0) return undefined;
    let validSubs = cat.subs.filter(sub => sub.grade !== "" && sub.outOf);
    if (validSubs.length === 0) return undefined;
    let weighted = 0;
    let sum = 0, possible = 0;
    for (let sub of validSubs) {
    sum += sub.grade;
    possible += sub.outOf;
    }
    let percent = (possible > 0) ? (sum / possible) : 0;
    weighted = percent * cat.ratio;
    return weighted * 100 / 100;
}

function computeTotalGrade() {
    let total = 0;
    let totalRatio = 0;
    for (let cat of categories) {
    if (!cat.ratio) continue;
    let weighted = computeCategoryWeightedScore(cat);
    if (typeof weighted === 'number') {
        total += weighted;
        totalRatio += cat.ratio;
    }
    }
    return { total, totalRatio: categories.reduce((r, c) => r + (c.ratio || 0), 0) };
}

function updateGoalMessage() {
    let goal = aimedGrade * 1;
    let msg = "";
    const totalRatio = categories.reduce((sum, cat) => sum + (+cat.ratio || 0), 0);
    if (categories.length === 0) {
    msg = "Add categories and their ratios (% of grade) to start.";
    }
    else if (totalRatio !== 100) {
    msg = "Warning: Ratios across categories do not sum to 100%.";
    }
    else {
    let anyGrades = false;
    for (let cat of categories) {
        if (cat.subs && cat.subs.some(sub => sub.grade !== "" && sub.outOf !== "")) {
        anyGrades = true;
        break;
        }
    }

    if (!anyGrades) {
        msg = "No grades entered yet.<br>";
        msg += `To reach a total of <b>${goal}</b>, you need at least <b>${goal}</b> percent in each category (if you get the same percent everywhere).`;
    } else {
        let sumWeighted = 0;
        let sumRatiosWithGrades = 0;
        let missingCats = [];
        categories.forEach((cat, idx) => {
        let hasGrades = cat.subs && cat.subs.some(sub => sub.grade !== "" && sub.outOf !== "");
        if (hasGrades) {
            let weighted = computeCategoryWeightedScore(cat);
            if (typeof weighted === 'number') {
            sumWeighted += weighted;
            sumRatiosWithGrades += (+cat.ratio || 0);
            }
        } else {
            missingCats.push(idx);
        }
        });
        let remainingRatio = totalRatio - sumRatiosWithGrades;
        let { total } = computeTotalGrade();
        msg = `Current weighted grade: <b>${total.toFixed(2)}</b><br>`;
        if (remainingRatio <= 0) {
        msg += (total >= goal)
            ? `<span style="color:green">You're on track!</span>`
            : `<span style="color:#d08">You need to improve to reach at least ${goal}.</span>`;
        } else {
        let need = (goal - sumWeighted) / remainingRatio * 100;
        need = Math.max(0, need);
        let needText = need.toFixed(2) + "%";
        if (missingCats.length > 0) {
            msg += `<span style="color:#a52a2a">To reach a total of ${goal}, you must get at least <b>${needText}</b> in: `;
            msg += missingCats.map(idx => `<b>${getCategoryDisplayName(categories[idx], idx)}</b>`).join(', ');
            msg += `</span>`;
            if (need > 100)
            msg += `<br><span style="color:#c00">Warning: It's not possible to reach ${goal} with your current grades.</span>`;
        }
        else {
            msg += (total >= goal)
            ? `<span style="color:green">You're on track!</span>`
            : `<span style="color:#d08">You need to improve to reach at least ${goal}.</span>`;
        }
        }
    }
    }
    document.getElementById('goal-message').innerHTML = msg;
}

// Slider logic
function updateGoalValue(val) {
    aimedGrade = Math.round(val);
    document.getElementById('goal-slider').value = aimedGrade;
    document.getElementById('goal-value').textContent = aimedGrade;
    updateGoalMessage();
}

// -- Init / initial value
window.onload = function() {
    document.getElementById('goal-slider').value = aimedGrade;
    document.getElementById('goal-value').textContent = aimedGrade;
    renderCategories();
};


const addCate = document.getElementById("add-category");
addCate?.addEventListener("click", addCategory);

Object.assign(window, {
  cancelEdit,
  saveEdit,
  editCategory,
  deleteCategory,
  addCategory,
  addSubAssignment,
  editSubAssignment,
  deleteSubAssignment,
  saveSubEdit,
  cancelSubEdit,
});