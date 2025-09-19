import { isLoggedIn, logout, getCurrentUser, loginU, checkUsr } from '/assets/js/login.js';
import { updateMyLanguage } from '/assets/js/lang.js';

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usrnameInput = document.getElementById("username");
const pdInput = document.getElementById("password");
const pdInputRe = document.getElementById("re-password");

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby13wkrygJBb9qk_DEwOOibQWj4Nu5VxLyblrW6PmRoqDhriWuKvlAwG-ICZTpt4vzZmA/exec';

const pdReBlk = document.getElementById("re");

document.getElementById("sub").addEventListener("click", handleSubmit);

async function handleSubmit() {
    const username = usrnameInput.value.trim();
    const password = pdInput.value;
    const repassword = pdInputRe.value;

    if (password !== repassword) {
        alert("The passwords do not match!");
        return;
    }

    if (!checkUsr(username)) {
        alert("Username occupied!");
        return;
    }

    uploadData();
}


async function uploadData() {
    submitBtn.disabled = true;

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        username: usrnameInput.value.trim(),
        password: pdInput.value
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
}

// document.addEventListener("keydown", (event) => {
//   if (pdInput.value) {
//     pdInputRe.style.display = flex;
//   } else {
//     pdInputRe.style.display = none;
//     pdInput.value = "";
//   }
// })