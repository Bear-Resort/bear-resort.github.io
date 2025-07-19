---
title: "Timer"
---

<style>
    body {
        /* font-family: Times New Roman, sans-serif; */
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        height: 100vh;
    }
    input {
        padding: 10px;
        font-size: 20pt;
        margin-top: 10px;
        width: 70px;
        text-align: center;
    }
    button {
        padding: 10px 20px;
        margin-top: 10px;
    }
    h1 {
        font-size: 36px;
    }
    #countdown-timer {
        font-size: 48px;
        color: var(--text-color);
        margin-top: 20px;
    }
    #controls {
        display: none;
    }
</style>



# <span class="eng">Countdown Timer</span><span class="chn">计时器</span>

<div style = "text-align: center">
<div id="stopped">
    <img src="stop.gif" style="width: 200px; height: 200px;">
</div>
<div id="progress" style="display: none;">
    <img src="begin.gif" style="width: 200px; height: 200px;">
</div>
<div id="inputForm">
    <input type="number" id="hoursInput" placeholder="0" min="0"> <span class="eng">Hour(s)</span><span class="chn">小时</span> 
    <input type="number" id="minutesInput" placeholder="00" min="0" max="59"> <span class="eng">Minute(s)</span><span class="chn">分</span> 
    <input type="number" id="secondsInput" placeholder="00" min="0" max="59"> <span class="eng">Second(s)</span><span class="chn">秒</span><br><br>
    <div style="text-align: center;">
        <button id="startButton"><span class="eng">Start</span><span class="chn">开始</span></button>
    </div>
</div>
<div id="controls">
    <button id="pauseResumeButton"><span class="eng">Pause</span><span class="chn">暂停</span></button>
    <button id="stopButton"><span class="eng">Stop</span><span class="chn">停止</span></button>
</div>
<div id="countdown-timer" style="display: none">00:00:00</div>
<div id="additions" style="display: none">
    <button id="add30sButton"><span class="eng">Add 30s</span><span class="chn">加30秒</span></button>
    <button id="add1mButton"><span class="eng">Add 1m</span><span class="chn">加1分钟</span></button>
    <button id="add5mButton"><span class="eng">Add 5m</span><span class="chn">加5分钟</span></button>
</div>
</div>

<script type="module" src="timer.js"></script>