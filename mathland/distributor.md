---
title: "Distributor"
---

<style>
    input {
        padding: 10px;
        font-size: 20pt;
        margin-top: 10px;
        width: 70px;
        text-align: center;
    }
</style>

## <span class="eng">Adjustable Ratio Distributor</span><span class="chn">比例分配器</span>

<table id="ratioTable">
    <thead>
      <tr>
        <th><span class="eng">Name</span><span class="chn">名称</span></th>
        <th><span class="eng">Ratio</span><span class="chn">比例</span></th>
        <th><span class="eng">Amount</span><span class="chn">数量</span></th>
        <th><span class="eng">Remove</span><span class="chn">删除</span></th>
      </tr>
    </thead>
    <tbody></tbody>
    <tfoot>
      <tr>
        <td colspan="2" style="text-align: right;"><span class="eng">Total:</span><span class="chn">共计:</span></td>
        <td>
          <input type="number" id="totalAmountInput" min="0" step="1" value="1000">
        </td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  <button id="addRowBtn"><span class="eng">Add Row</span><span class="chn">添加行</span></button>
  <script src="distributor.js"></script>