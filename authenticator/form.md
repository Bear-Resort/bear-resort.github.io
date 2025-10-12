---
title: "Private Form"
---

<div style="text-align: center">
    <div id="result" style="display: none">
        <h2 id="question"></h2>
        <textarea id="inputBox" name="feedback" placeholder="Enter your reponse here... / 输入你的回答..." style="font-size: 16px; height: 39px;"></textarea>
        <button id="submit"><span class="eng">Submit</span><span class="chn">提交</span></button>
    </div>
    <div id="alert">
        <span class="eng">Log in to fill this form.</span><span class="chn">登录以填写问卷。</span><br>
        <button onclick="window.open('/assets/html/login.html')"><span class="eng">Log in</span><span class="chn">登录</span></button>
    </div>
    <div id="no-auth">
        <span class="eng">You are not authorized to fill in the form.</span><span class="chn">你无权填写本表格。</span>
    </div>
</div>

<script type="module" src="./form.js"></script>