---
title: "Distributor"
---

## Adjustable Ratio Distributor

<label>
    <span class="eng">Total Amount:</span><span class="chn">总量:</span>  
    <input type="number" id="desiredTotalAmount" min="0" step="0.001" value="1000">
    <span style="color:#888;"><span class="eng">Press enter to distribute.</span><span class="chn">按下回车以分配。</span> </span>
  </label>
  <br><br>
  <table id="ratioTable">
    <thead>
      <tr>
        <th><span class="eng">Name</span><span class="chn">名称</span></th>
        <th><span class="eng">Ratio</span><span class="chn">比例</span></th>
        <th><span class="eng">Amount</span><span class="chn">数量</span></th>
        <th><span class="eng">Remove</span><span class="chn">删除</span></th>
      </tr>
    </thead>
    <tbody>
      <!-- Rows rendered dynamically -->
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" style="text-align: right;"><span class="eng">Total:</span><span class="chn">共计:</span></td>
        <td id="totalAmountDisplay">0</td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  <button id="addRowBtn"><span class="eng">Add Row</span><span class="chn">添加行</span></button>
  <script src="distributor.js"></script>