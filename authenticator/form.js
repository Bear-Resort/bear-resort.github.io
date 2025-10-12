import { isLoggedIn } from "/assets/js/login.js";

const authoDiv = document.getElementById("result");
const alertDiv = document.getElementById("alert");
const authDiv = document.getElementById("no-auth");
const response = document.getElementById("inputBox");
const submitBtn = document.getElementById("submit");
const quest = document.getElementById("question");

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxVHgyxO8kUy84SgOZxuwC50uKHsnsMJCxq76VouA8I4pGoY_zVVEMDWvjoXx5w83LnQ/exec';


const urlParams = new URLSearchParams(window.location.search);

const question = urlParams.get('quest');
const usr = urlParams.get('usr');


const rendercode = () => {
    quest.innerText = question;
    if (!isLoggedIn()) {
        alertDiv.style.display = "block";
        authoDiv.style.display = "none";
        authDiv.style.display = "none";
    } else if (usr !== "all" && localStorage.getItem("loggedInUser") !== usr) {
        alertDiv.style.display = "none";
        authoDiv.style.display = "none";
        authDiv.style.display = "block";
    } else {
        alertDiv.style.display = "none";
        authoDiv.style.display = "block";
        authDiv.style.display = "none";
        response.style = "font-size: 16px; height: 39px";
    }
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    submitBtn.disabled = true;

    const formData = {
        userId: localStorage.getItem("loggedInUser"),
        formName: question,
        response: response.value,
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
    response.value = "";
    submitBtn.disabled = false;
    })
    .catch(err => {
        alert("❌ Failed / 失败");
        alert("🛜 Is your internet connection all good? / 你的网络可还好？");
        submitBtn.disabled = false;
    });
})

document.addEventListener("DOMContentLoaded", rendercode);