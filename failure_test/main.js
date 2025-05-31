var score = 0;

    // Update text for each switch based on state
    for (let i = 1; i <= 20; i++) {
        const switchButton = document.getElementById(`switchButton${i}`);
        const statusText = document.getElementById(`status${i}`);
        switchButton.addEventListener('change', function() {
            if (switchButton.checked) {
                statusText.textContent = 'Yes';
                score++;
            } else {
                statusText.textContent = 'No';
                score--;
            }
        });
    }
    
    async function result() {
        const name = document.getElementById('inputBox').value;

        if (name.trim() === "") {
            document.getElementById('greeting').textContent = "";
            document.getElementById('end').textContent =  "";
            document.getElementById('greeting_ch').textContent = "";
            document.getElementById('result_ch').textContent = "";
            document.getElementById('end_ch').textContent =  "";
            document.getElementById('result').textContent =  "You need to fill in your name, my friend! We do not record your name and it is for your own reference. / 你需要填写你的名字，我的朋友。我们不会记录你的名字，这个是给你自己的.";
            await new Promise(resolve => setTimeout(resolve, 3000));
            document.getElementById('result').textContent =  "";
        } else {
            var outcome = "";
            var sentence = "";
            var outcome_ch = "";
            var sentence_ch = "";
            if (score < 5) {
                outcome = "absolute failure";
                sentence = "Try to enjoy your life at Hopkins please!"
                outcome_ch = "绝对废物";
                sentence_ch = "享受一下霍普金斯生活好吗？请！"
            } else if (score < 10) {
                outcome = "mostly failure";
                sentence = "At least there are people that is more failure than you! Hopefully."
                outcome_ch = "很是废物";
                sentence_ch = "至少有人比你更废物！希望如此。"
            } else if (score < 15) {
                outcome = "somewhat failure";
                sentence = "Generally not failure, but you can be better!"
                outcome_ch = "有点废物";
                sentence_ch = "本质上不是废物，但是你能做到跟好！"
            } else if (score < 20) {
                outcome = "not really failure";
                sentence = "Glad you are generally successful here!"
                outcome_ch = "不是废物";
                sentence_ch = "很高兴你在这儿蛮成功的！"
            } else {
                outcome = "absolutely successful";
                sentence = "Well, the only failure you might be is failing to be a failure. Maybe?"
                outcome_ch = "绝对王者";
                sentence_ch = "如果真的说，你唯一的失败就是无法成为废物。也许？"
            }
            document.getElementById('greeting').textContent = "Hey " + name + ",";
            document.getElementById('result').textContent =  "Your Hopkins life is identified as " + outcome + ". " + sentence;
            document.getElementById('end').textContent =  "Sincerely, Bear Resort.";
            document.getElementById('greeting_ch').textContent = "嘿" + name + ",";
            document.getElementById('result_ch').textContent = "你的霍普金斯生活被鉴定为" + outcome_ch + ". " + sentence_ch;
            document.getElementById('end_ch').textContent =  "诚挚的, 小熊樂園.";
        }
    }