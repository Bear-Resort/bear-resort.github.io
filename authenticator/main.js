import { isLoggedIn } from "/assets/js/login.js";

const authoDiv = document.getElementById("result");
const alertDiv = document.getElementById("alert");
const codeSpan = document.getElementById("cc");

const rendercode = () => {
    if (isLoggedIn()) {
        alertDiv.style.display = "none";
        authoDiv.style.display = "block";
        renderResult();
    } else {
        alertDiv.style.display = "block";
        authoDiv.style.display = "none";
        codeSpan.textContent = "";
    }
}

const renderResult = () => {
    const v1 = hashDeterministically(localStorage.getItem("loggedInUser")) % 1000;
    const v2 = urlParams.get('auth') ** 13 % 100;
    codeSpan.textContent = v1.toString() + v2.toString();
}

document.addEventListener("DOMContentLoaded", rendercode);