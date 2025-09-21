import { isLoggedIn, logout, getCurrentUser, loginU, checkUsr } from '/assets/js/login.js';
import { updateMyLanguage } from '/assets/js/lang.js';

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usrnameInput = document.getElementById("username");
const pdInput = document.getElementById("password");
const pdInputRe = document.getElementById("re-password");

const submitBtn = document.getElementById("sub")

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby13wkrygJBb9qk_DEwOOibQWj4Nu5VxLyblrW6PmRoqDhriWuKvlAwG-ICZTpt4vzZmA/exec';

const pdReBlk = document.getElementById("re");

submitBtn.addEventListener("click", handleSubmit);

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
        password: pdInput.value,
        enc_usrname: hashDeterministically(usrnameInput.value.trim()),
        enc_password: hashDeterministically(pdInput.value)
    };

    fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(msg => {
        if (updateMyLanguage() === "Chn") {
            alert("✅ 注册成功，您的粉丝账户将在稍后激活。")
        } else {
            alert("✅ Register Success, your fan account will be enabled shortly.")
        }
        reset();
        submitBtn.disabled = false;
        })
    .catch(err => {
        console.log(err);
        if (updateMyLanguage() === "Chn") {
            alert("❌ 注册失败，请检查您网络后重试。")
        } else {
            alert("❌ Register Failed, please check your internet connection.")
        }
        submitBtn.disabled = false;
    });
}

function reset() {
    nameInput.value = "";
    emailInput.value = "";
    usrnameInput.value = "";
    pdInput.value = "";
    pdInputRe.value = "";
}

document.addEventListener("keydown", () => {
    if (!nameInput.value || !emailInput.value || usrnameInput.value
        || pdInput.value || pdInputRe.value) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }

    if (pdInput.value) {
        pdInputRe.style.display = flex;
    } else {
        pdInputRe.style.display = none;
        pdInput.value = "";
    }
})