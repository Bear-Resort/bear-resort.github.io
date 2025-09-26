import { isLoggedIn, logout, getCurrentUser, loginU, checkUsr } from '/assets/js/login.js';
import { updateMyLanguage } from '/assets/js/lang.js';

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usrnameInput = document.getElementById("username");
const pdInput = document.getElementById("password");
const pdInputRe = document.getElementById("re-password");
const verfication = document.getElementById("verification");

let temp_vericode = "";

const veriBtn = document.getElementById("veri")
const submitBtn = document.getElementById("sub")

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby13wkrygJBb9qk_DEwOOibQWj4Nu5VxLyblrW6PmRoqDhriWuKvlAwG-ICZTpt4vzZmA/exec';

const SCRIPT_URL_2 = 'https://script.google.com/macros/s/AKfycbzANy1B45cj0KiWUuu0ZlhfWTfNZCnddvUhH63LLbDy0fwuQ_AU7TlpR-I1iVdpn1WYMQ/exec';


submitBtn.addEventListener("click", handleSubmit);

async function handleSubmit() {
    const username = usrnameInput.value.trim();
    const password = pdInput.value;
    const repassword = pdInputRe.value;

    const vercode = verfication.value;

    if (password !== repassword) {
        alert("The passwords do not match!");
        return;
    }

    const promise = Promise.resolve(checkUsr(username));
    const value = await promise;
    if (!value) {
        alert("Username occupied!");
        return;
    }

    if (vercode !== temp_vericode) {
        alert("Incorrect verification code!")
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
        enc_password: hashDeterministically(pdInput.value),
        enc_pwd: stringToHash(pdInput.value)
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
    verfication.value = "";
    pdInputRe.style.display = "none";
    verfication.style.display = "none";
    submitBtn.disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {
    submitBtn.disabled = true;
    verfication.disabled = true;
})

document.addEventListener("keyup", () => {
    if (nameInput.value === "" ||
        emailInput.value === "" ||
        usrnameInput.value === "" ||
        pdInput.value === "" ||
        pdInputRe.value === "" || 
        verfication.value === ""    
    ) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
    if (isValidEmail(emailInput.value)) {
        verfication.style.display = "flex";
    } else {
        verfication.style.display = "none";
        verfication.value = "";
    }
    if (pdInput.value === "") {
        pdInputRe.style.display = "none";
        pdInput.value = "";
    } else {
        pdInputRe.style.display = "flex";
    }
})

function isValidEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

veriBtn.addEventListener("click", handleEmail);

async function handleEmail() {
    temp_vericode = Math.floor(Math.random() * 90000) + 10000;
    veriBtn.disabled = true;

    const formData = {
        email: emailInput.value.trim(),
        vcode: temp_vericode
    };

    fetch(SCRIPT_URL_2, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(msg => {
        if (updateMyLanguage() === "Chn") {
            alert("✅ 验证码已发送到您的邮箱")
        } else {
            alert("✅ The verification code is sent to your email address.")
        }
        verfication.style.display = "flex";
        })
    .catch(err => {
        console.log(err);
        if (updateMyLanguage() === "Chn") {
            alert("❌ 发送失败，请检查您网络后重试。")
        } else {
            alert("❌ Email Failed, please check your internet connection.")
        }
        veriBtn.disabled = false;
    });
}
