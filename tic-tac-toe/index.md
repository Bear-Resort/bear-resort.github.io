---
title: "Tic-Tac-Toe Game"
---

<style>
    #game {
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(3, 60px);
        gap: 10px;
        margin-top: 24px;
    }
    .cell {
        background: var(--secondary-color);
        border: 2px solid var(--main-color-light);
        font-size: 2.2em;
        font-weight: bold;
        color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px; width: 60px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .cell:hover {
        background: var(    --secondary-light);
    }
    #status {
        margin-top: 20px;
        font-size: 1.2em;
        min-height: 30px;
    }
    #reset {
        margin-top: 18px;
        padding: 6px 24px;
        font-size: 1em;    
    }
</style>

<div style="display: flex; flex-direction: column; align-items: center;">

<h1><span class="eng">Tic-Tac-Toe Game</span><span class="chn">井字棋</span></h1>
<div id="game"></div>
<div id="status">
    <div id="computer-win"><span class="chn">🏳️你输了!</span><span class="eng">🏳️You Lose!</span></div>
    <div id="draw"><span class="chn">🤝平局!</span><span class="eng">🤝Draw!</span></div>
    <div id="player-win"><span class="chn">🏅️你赢了!</span><span class="eng">🏅️You Win!</span></div>
</div>
<button id="reset"><span class="chn">⭕️重开!</span><span class="eng">⭕️Play Again!</span></button></div>

<script src="./main.js"></script>