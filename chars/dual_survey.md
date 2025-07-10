---
title: "Character Survey: Dual Brothers"
---

# <span class="eng">Bear Resort Character Survey: Dual Brothers</span> <span class="chn">小熊樂園角色问卷：双胞熊弟</span> 

<span class="eng">The Bear Resort will be welcoming two brand new bears this time. These two bears happens to be twins, although they do not look anyhow alike (the creator also doesn't know why).</span>

<span class="chn">小熊樂園将一次迎来两头全新小熊。这两头熊弟是一对儿双胞胎，尽管他们看起来完全不一样（作者也不晓得为什么）。</span> 

<span class="eng">Now, the brothers badly need some names. So it is up to you! By July 20th, we will be collecting some names for these brothers!</span>

<span class="chn">现在，两兄弟急需一些名字。由此，我们向大伙儿征集名字！到7月20日，我们会手机大家给兄弟们起的名字。</span> 

# <img src="dual.png" style="height: 200px;">

<form id="survey-form">
  <div style="width: 75%; margin: 0 auto; text-align: center;">
    <p>
        <span class="eng">Name of the Black Bear</span> <span class="chn">狗熊的名字</span>  <br>
        <input type="text" name="b_name" placeholder="English..." required> <input type="text" name="b_name_ch" placeholder="中文..." required>
        <br>
        <span class="eng">Name of the Polar Bear</span> <span class="chn">北极熊的名字</span>  <br>
        <input type="text" name="p_name" placeholder="English..." required> <input type="text" name="p_name_ch" placeholder="中文..." required>
        <br>
        <textarea id="inputBox" name="feedback" placeholder="Enter your feedback here... / 输入你的意见..." style="font-size: 16px; height: 39px;"></textarea>
    </p>
    <button type="submit" id="submitBtn"><span class="eng">Submit</span> <span class="chn">提交</span> </button><br>
    </div>
</form>

  <script>
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXD-HmCXj3Hr4-X9M5fd-MrPxjgu8NlcOlustH2p7-fCwEoOSsF0fh-Ggyxaq-6cUJ2g/exec';

    const form = document.getElementById('survey-form');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        submitBtn.disabled = true;

        const formData = {
            black_Bear_Name: form.b_name.value,
            black_Bear_Name_ch: form.b_name_ch.value,
            polar_Bear_Name: form.p_name.value,
            polar_Bear_Name_ch: form.p_name_ch.value,
            comments: form.feedback.value
        };

        fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        })
        .then(res => res.text())
        .then(msg => {
        alert("✅ Success / 成功");
        form.reset();
        submitBtn.disabled = false;
        })
        .catch(err => {
        alert("❌ Failed / 失败");
        alert("🛜 This might be an issue of the internet / 也许是网络失效");
        submitBtn.disabled = false;
        });
    });
</script>
