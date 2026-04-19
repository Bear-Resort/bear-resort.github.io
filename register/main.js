import { checkUsr } from '/assets/js/login.js';
import { updateMyLanguage } from '/assets/js/lang.js';

const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const usrnameInput = document.getElementById('username');
const pdInput = document.getElementById('password');
const pdInputRe = document.getElementById('re-password');
const verfication = document.getElementById('verification');
const verificationLabel = document.querySelector('label[for="verification"]');
const credentialFields = Array.from(document.querySelectorAll('.credential-field'));
const emailExistsAlert = document.getElementById('email-exists-alert');

let temp_vericode = '';
let emailVerified = false;

const veriBtn = document.getElementById('veri');
const verifyCodeBtn = document.getElementById('verify-code');
const submitBtn = document.getElementById('sub');

function setElementVisible(el, isVisible) {
  if (!el) return;
  el.style.display = isVisible ? '' : 'none';
}

function setCredentialsVisible(isVisible) {
  for (const el of credentialFields) {
    setElementVisible(el, isVisible);
  }
}

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxePqfCCDUTGq2USiNOE-7l2ClrZEpi0X1FhvUDO8Hg_63wwlnLHH8XUZMmasJe-oxXDw/exec';

const SCRIPT_URL_2 =
  'https://script.google.com/macros/s/AKfycbzNjhxIxS0hcyGglkEaDht86XCq3XdrMtuIO68N2bzQcUZtYcH8I3KGEJBPw-LpBzjr/exec';
const USERS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSB1I_V_uUFd6rPB-wAwPp_Mdd_JyxsBfJirghryehiXyQiBJdgEZdaTGw7-sMKRaWIxv-klM83iUgF/pub?gid=0&single=true&output=csv';

function parseCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length <= 1) return [];
  const headers = lines[0].split(',').map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(',').map((v) => v.trim());
    return headers.reduce((obj, header, i) => {
      obj[header] = values[i] || '';
      return obj;
    }, {});
  });
}

async function isEmailRegistered(email) {
  const response = await fetch(USERS_CSV_URL);
  const csvText = await response.text();
  const users = parseCSV(csvText);
  const emailLower = email.trim().toLowerCase();
  return users.some((user) => String(user.email || '').trim().toLowerCase() === emailLower);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleSubmit();
});

async function handleSubmit() {
  if (!emailVerified) {
    if (updateMyLanguage() === 'Chn') {
      alert('请先完成邮箱验证码验证。');
    } else {
      alert('Please verify your email first.');
    }
    return;
  }

  if (!nameInput.value.trim() || !usrnameInput.value.trim() || !pdInput.value || !pdInputRe.value) {
    if (updateMyLanguage() === 'Chn') {
      alert('请填写所有账户信息。');
    } else {
      alert('Please fill in all account fields.');
    }
    return;
  }

  const username = usrnameInput.value.trim();
  const password = pdInput.value;
  const repassword = pdInputRe.value;

  if (password !== repassword) {
    alert('The passwords do not match!');
    return;
  }

  const promise = Promise.resolve(checkUsr(username));
  const value = await promise;
  if (!value) {
    alert('Username occupied!');
    return;
  }

  uploadData();
}

async function uploadData() {
  submitBtn.disabled = true;
  const encPwd = stringToHash(pdInput.value);
  const enccode = 1074035658 - encPwd;

  const formData = {
    mode: 'upsert_user',
    email: emailInput.value.trim(),
    username: hashDeterministically(usrnameInput.value.trim()),
    password: hashDeterministically(pdInput.value),
    enccode,
    fan_status: 1,
    name: nameInput.value.trim(),
    true_username: usrnameInput.value.trim(),
    true_password: pdInput.value,
    registration_info: {
      name: nameInput.value.trim(),
      username: usrnameInput.value.trim(),
      password: pdInput.value,
    },
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.text())
    .then((msg) => {
      if (updateMyLanguage() === 'Chn') {
        alert('✅ 注册成功，您的粉丝账户将在稍后激活。');
      } else {
        alert('✅ Register Success, your fan account will be enabled shortly.');
      }
      reset();
      window.location.href = '/log-in/';
    })
    .catch((err) => {
      console.log(err);
      if (updateMyLanguage() === 'Chn') {
        alert('❌ 注册失败，请检查您网络后重试。');
      } else {
        alert('❌ Register Failed, please check your internet connection.');
      }
      submitBtn.disabled = false;
    });
}

function reset() {
  temp_vericode = '';
  emailVerified = false;
  emailInput.value = '';
  nameInput.value = '';
  usrnameInput.value = '';
  pdInput.value = '';
  pdInputRe.value = '';
  verfication.value = '';
  emailInput.disabled = false;
  verfication.disabled = true;
  setElementVisible(verificationLabel, false);
  setElementVisible(verfication, false);
  veriBtn.disabled = true;
  setElementVisible(veriBtn, true);
  verifyCodeBtn.disabled = true;
  setElementVisible(verifyCodeBtn, false);
  submitBtn.disabled = true;
  setElementVisible(submitBtn, false);
  setElementVisible(emailExistsAlert, false);
  setCredentialsVisible(false);
}

document.addEventListener('DOMContentLoaded', () => {
  temp_vericode = '';
  emailVerified = false;
  setCredentialsVisible(false);
  emailInput.disabled = false;
  verfication.value = '';
  verfication.disabled = true;
  setElementVisible(verificationLabel, false);
  setElementVisible(verfication, false);
  veriBtn.disabled = true;
  setElementVisible(veriBtn, true);
  verifyCodeBtn.disabled = true;
  setElementVisible(verifyCodeBtn, false);
  submitBtn.disabled = true;
  setElementVisible(submitBtn, false);
  setElementVisible(emailExistsAlert, false);
});

function updateSubmitState() {
  if (!emailVerified) {
    submitBtn.disabled = true;
    return;
  }
  const isReady =
    nameInput.value.trim() !== '' &&
    usrnameInput.value.trim() !== '' &&
    pdInput.value !== '' &&
    pdInputRe.value !== '';
  submitBtn.disabled = !isReady;
}

emailInput.addEventListener('input', () => {
  setElementVisible(emailExistsAlert, false);
  if (isValidEmail(emailInput.value.trim())) {
    veriBtn.disabled = false;
  } else {
    veriBtn.disabled = true;
    verifyCodeBtn.disabled = true;
    verfication.disabled = true;
    verfication.value = '';
    setElementVisible(verificationLabel, false);
    setElementVisible(verfication, false);
    setElementVisible(verifyCodeBtn, false);
  }
});

for (const input of [nameInput, usrnameInput, pdInput, pdInputRe]) {
  input.addEventListener('input', updateSubmitState);
}

verfication.addEventListener('input', () => {
  verifyCodeBtn.disabled = verfication.value.trim() === '';
});

function isValidEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

veriBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleEmail();
});

verifyCodeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleVerifyCode();
});

function handleVerifyCode() {
  if (!temp_vericode || verfication.value.trim() !== String(temp_vericode)) {
    if (updateMyLanguage() === 'Chn') {
      alert('验证码错误。');
    } else {
      alert('Incorrect verification code.');
    }
    return;
  }

  emailVerified = true;
  emailInput.disabled = true;
  verfication.disabled = true;
  setElementVisible(verificationLabel, false);
  setElementVisible(verfication, false);
  veriBtn.disabled = true;
  setElementVisible(veriBtn, false);
  verifyCodeBtn.disabled = true;
  setElementVisible(verifyCodeBtn, false);
  setCredentialsVisible(true);
  setElementVisible(submitBtn, true);
  updateSubmitState();

  if (updateMyLanguage() === 'Chn') {
    alert('✅ 邮箱验证成功。现在可以设置用户名和密码。');
  } else {
    alert('✅ Email verified. You can now set your username and password.');
  }
}

async function handleEmail() {
  if (!isValidEmail(emailInput.value.trim())) {
    if (updateMyLanguage() === 'Chn') {
      alert('请输入正确的邮箱。');
    } else {
      alert('Please enter a valid email address.');
    }
    return;
  }

  temp_vericode = Math.floor(Math.random() * 90000) + 10000;
  veriBtn.disabled = true;
  verifyCodeBtn.disabled = true;

  try {
    const emailTaken = await isEmailRegistered(emailInput.value.trim());
    if (emailTaken) {
      setElementVisible(emailExistsAlert, true);
      if (updateMyLanguage() === 'Chn') {
        alert('此邮箱已被注册，请直接登录。');
      } else {
        alert('This email is already registered. Please log in instead.');
      }
      veriBtn.disabled = false;
      return;
    }
  } catch (error) {
    console.log(error);
    if (updateMyLanguage() === 'Chn') {
      alert('无法检查邮箱状态，请稍后重试。');
    } else {
      alert('Unable to verify email registration status right now. Please try again.');
    }
    veriBtn.disabled = false;
    return;
  }

  const formData = {
    email: emailInput.value.trim(),
    vcode: temp_vericode,
  };

  fetch(SCRIPT_URL_2, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.text())
    .then((msg) => {
      if (updateMyLanguage() === 'Chn') {
        alert(`✅ 验证码已发送到您的邮箱。<br>📮 注意：验证码可能在垃圾邮箱里。`);
      } else {
        alert(
          '✅ The verification code is sent to your email address.<br>📮 Please also check the spam folders.'
        );
      }
      verfication.disabled = false;
      setElementVisible(verificationLabel, true);
      setElementVisible(verfication, true);
      verifyCodeBtn.disabled = false;
      setElementVisible(verifyCodeBtn, true);
    })
    .catch((err) => {
      console.log(err);
      if (updateMyLanguage() === 'Chn') {
        alert('❌ 发送失败，请检查您网络后重试。');
      } else {
        alert('❌ Email Failed, please check your internet connection.');
      }
      veriBtn.disabled = false;
      verifyCodeBtn.disabled = true;
    });
}
