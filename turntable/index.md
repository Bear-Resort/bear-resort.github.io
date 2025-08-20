---
title: "Mathy's Turntable"
title-chn: "数数的大转盘"
---

<style>
    .container {
        max-width: 600px;
        margin: 30px auto;
        background: var(--secondary-light);
        border-radius: 16px;
        box-shadow: 0 4px 18px var(--shadow-color);
        padding: 30px;
    }

    .choices-list {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        justify-content: flex-start;
        height: 50px;
        overflow-x: auto;           /* <-- enables horizontal scrolling */
        overflow-y: hidden;         /* optional, disable vertical scroll */
        align-items: center;        /* vertically center items */
    }

    .choice-item button {
        background: snow;
        border: 1px solid darkslategray;
        cursor: pointer;
        font-size: 12px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 15px;
        padding-right: 5px;
        color: darkslategray;
        white-space: nowrap;
    }
    .choice-item button:hover {
        background: whitesmoke;
        border: 1px solid darkred;
        color: darkred;
    }
    .choice-item button:active {
        background: lightgray;
        border: 1px solid darkred;
        color: darkslategray;
    }

    #add-choice-form {
        margin-bottom: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px; }

    #turntable-wrapper {
        margin: 28px auto 24px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #turntable-canvas {
        display: block;
        margin: auto;
        background: var(--background-light);
        border-radius: 50%;
        box-shadow: 0 2px 8px var(--shadow-color);
    }
</style>

# <span class="eng">Mathy's Turntable</span><span class="chn">数数的大转盘</span>

<div class="container">
    <form id="add-choice-form" autocomplete="off">
        <input type="text" id="new-choice" placeholder="Enter a choice" maxlength="18" required>
        <button type="submit" id="add-choice-btn" style="padding: 6px 12px;"><span class="eng">Add</span><span class="chn">添加</span></button>
    </form>
    <div class="choices-list" id="choices-list"></div>
    <div id="turntable-wrapper">
        <canvas id="turntable-canvas" width="340" height="340"></canvas>
        <br><br>
        <button id="spin-btn" disabled><span class="eng">Let's Rock!</span><span class="chn">转盘，启动！</span></button>
    </div>
    <div id="result-modal">
        <div id="result-box">
            <div id="result-text"></div>
                <button id="close-modal-btn">×</button>
            </div>
        </div>
    </div>
</div>

<script type="module" src="main.js"></script>