---
title: "Draw it!"
title-chn: "我是小画家"
---

<style>
    #canvas {
      background: #fff;
      border: 1px solid #888;
      cursor: crosshair;
      display: block;
      width: 500px;
      height: 500px;
      image-rendering: pixelated;
    }
    #display_result {
      font-size: 12px;
      font-family: 'Noto Sans Mono', 'Noto Sans Symbols2', monospace;
    }
</style>

# <span class="eng">Draw it!</span><span class="chn">我是小画家！</span>

<div style="text-align: center">
    <button id="undoBtn" title="Undo (Cmd/Ctrl+Z)"><span class="eng">Undo</span><span class="chn">撤销</span></button>
    <button id="redoBtn" title="Redo (Cmd/Ctrl+Shift+Z)"><span class="eng">Redo</span><span class="chn">重做</span></button>
    <button id="clearBtn"><span class="eng">Clear</span><span class="chn">清除</span></button>
    <button id="exportBtn"><span class="eng">Export</span><span class="chn">导出</span></button>
    <br><br>
    <div style="display: flex; align-items: center;">
    <canvas id="canvas" width="100" height="100"></canvas>
    </div><br><br>
    <h3><span class="eng">Result</span><span class="chn">结果</span></h3>
    <button id="copyBtn" title="Copy output text (Cmd/Ctrl+C)"><span class="eng">Copy</span><span class="chn">拷贝</span></button>
    <br>
    <div id="display_result" readonly></div>
</div>

<script src="./main.js"></script>