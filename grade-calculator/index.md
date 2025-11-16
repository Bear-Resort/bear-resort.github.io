---
layout: default
title: "Grade Calculator"
title-chn: "成绩计算器"
---

<style>
    table {
      border-collapse: collapse;
      width: 800px;
      margin-bottom: 20px;
    }
    button {
      font-size: small !important;
      margin: 1px !important;
      padding: 5px 10px !important;
    }
    .goal-message {
      color: #d83b3b;
      font-size: 1.1em;
      margin-top: 10px;
      font-weight: bold;
    }
    .slider-group {
      margin: 1em 0;
      font-size: 1em;
      display: flex;
      align-items: center;
    }
    .slider-group label {
      margin-right: 8px;
      white-space:nowrap;
    }
    .slider-group input[type="range"] {
      margin: 0 10px;
      width: 250px;
    }
    .slider-value {
      font-weight: bold;
      margin-left: 6px;
      min-width: 35px;
      display: inline-block;
      text-align: left;
    }
    input[type="number"] {
      max-width: 70px;
    }
    input[type="text"] {
      max-width: 80px;
    }
  </style>

# <span class="eng">Grade Calculator</span><span class="chn">成績計算器</span>

<div class="note" style="text-align: center;">
    <img src="../assets/img/good-grade.gif" style="width: 200px; height: 200px;"><br>
    <span class="eng">Set up categeories, weights, add in current assingments, and set a targeted grade.</span><span class="chn">輸入種類、佔比、當前成績和目標成績</span>
</div>
<div style="margin: 0 auto; width: fit-content;">
    <div class="slider-group">
    <label for="goal-slider"><span class="eng">Aimed grade</span><span class="chn">目標成績</span>:</label>
    <input id="goal-slider" type="range" min="0" max="100" value="93" oninput="updateGoalValue(this.value)">
    <span id="goal-value" class="slider-value">93</span>
  </div>
  </div>
  <table id="category-table">
    <thead>
      <tr>
        <th><span class="eng">Category</span><span class="chn">種類</span></th>
        <th><span class="eng">Weights</span><span class="chn">佔比</span> (%)</th>
        <th><span class="eng">Weighted Grade</span><span class="chn">比例成績</span></th>
        <th><span class="eng">Actions</span><span class="chn">動作</span></th>
      </tr>
    </thead>
    <tbody id="category-tbody">
      <!-- Categories go here -->
    </tbody>
  </table>
  <div style="text-align: center;">
    <button id="add-category"><span class="eng">Add a Category</span><span class="chn">增加種類</span></button>
  <div style="margin: 0 auto; width: fit-content;">
    <div id="goal-message" class="goal-message"></div>
  </div>

  <script type="module" src="main.js"></script>
