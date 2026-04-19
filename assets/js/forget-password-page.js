import { updateMyLanguage } from '/assets/js/lang.js';

document.getElementById('login').style.display = 'none';

const RESET_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxePqfCCDUTGq2USiNOE-7l2ClrZEpi0X1FhvUDO8Hg_63wwlnLHH8XUZMmasJe-oxXDw/exec';
const EMAIL_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzNjhxIxS0hcyGglkEaDht86XCq3XdrMtuIO68N2bzQcUZtYcH8I3KGEJBPw-LpBzjr/exec';
const USERS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSB1I_V_uUFd6rPB-wAwPp_Mdd_JyxsBfJirghryehiXyQiBJdgEZdaTGw7-sMKRaWIxv-klM83iUgF/pub?gid=0&single=true&output=csv';

let resetVerificationCode = '';
let resetEmailVerified = false;

const resetCredentialFields = Array.from(document.querySelectorAll('.fp-credential-field'));
const resetVerificationInput = document.getElementById('fp-verification');
const resetVerificationLabel = document.querySelector('label[for="fp-verification"]');
const resetVerifyCodeBtn = document.getElementById('fp-verify-code-btn');
const resetSubmitBtn = document.getElementById('fp-submit-btn');

function setElementVisible(el, isVisible) {
  if (!el) return;
  el.style.display = isVisible ? '' : 'none';
}

function setResetCredentialFieldsVisible(isVisible) {
  for (const field of resetCredentialFields) {
    setElementVisible(field, isVisible);
  }
}

function resetForgotPasswordState() {
  resetEmailVerified = false;
  resetVerificationCode = '';
  const fpEmail = document.getElementById('fp-email');
  const fpUsername = document.getElementById('fp-username');
  const fpPassword = document.getElementById('fp-password');
  const fpPasswordRe = document.getElementById('fp-password-re');
  const fpVerification = document.getElementById('fp-verification');
  const fpSendCodeBtn = document.getElementById('fp-send-code-btn');

  fpEmail.value = '';
  fpUsername.value = '';
  fpPassword.value = '';
  fpPasswordRe.value = '';
  fpVerification.value = '';

  setResetCredentialFieldsVisible(false);
  setElementVisible(resetVerificationLabel, true);
  setElementVisible(resetVerificationInput, true);
  setElementVisible(fpSendCodeBtn, true);
  setElementVisible(resetVerifyCodeBtn, true);
  setElementVisible(resetSubmitBtn, false);

  fpSendCodeBtn.disabled = false;
  resetVerifyCodeBtn.disabled = true;
  resetSubmitBtn.disabled = true;
  resetVerificationInput.disabled = true;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

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

function showMissingEmailModal() {
  const modal = document.getElementById('fp-email-missing-modal');
  if (!modal) return;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMissingEmailModal() {
  const modal = document.getElementById('fp-email-missing-modal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

async function sendResetCode() {
  const email = document.getElementById('fp-email').value.trim();
  const sendCodeBtn = document.getElementById('fp-send-code-btn');
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  resetVerificationCode = String(Math.floor(Math.random() * 90000) + 10000);
  sendCodeBtn.disabled = true;
  resetVerificationInput.disabled = false;
  resetVerifyCodeBtn.disabled = true;

  try {
    const exists = await isEmailRegistered(email);
    if (!exists) {
      sendCodeBtn.disabled = false;
      resetVerificationInput.disabled = true;
      showMissingEmailModal();
      return;
    }
  } catch (err) {
    console.log(err);
    sendCodeBtn.disabled = false;
    resetVerificationInput.disabled = true;
    if (updateMyLanguage() === 'Chn') {
      alert('无法检查邮箱是否已注册，请稍后重试。');
    } else {
      alert('Unable to check if this email is registered. Please try again later.');
    }
    return;
  }

  const payload = { email, vcode: resetVerificationCode };
  fetch(EMAIL_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(() => {
      if (updateMyLanguage() === 'Chn') {
        alert('✅ 验证码已发送到您的邮箱。');
      } else {
        alert('✅ Verification code sent to your email.');
      }
    })
    .catch((err) => {
      console.log(err);
      if (updateMyLanguage() === 'Chn') {
        alert('❌ 发送失败，请稍后重试。');
      } else {
        alert('❌ Failed to send code. Please try again.');
      }
      sendCodeBtn.disabled = false;
    });
}

function verifyResetCode() {
  const verification = document.getElementById('fp-verification').value.trim();
  if (!resetVerificationCode || verification !== resetVerificationCode) {
    if (updateMyLanguage() === 'Chn') {
      alert('验证码错误。');
    } else {
      alert('Invalid verification code.');
    }
    return;
  }

  resetEmailVerified = true;
  const sendCodeBtn = document.getElementById('fp-send-code-btn');
  sendCodeBtn.style.display = 'none';
  setElementVisible(resetVerificationLabel, false);
  setElementVisible(resetVerificationInput, false);
  setElementVisible(resetVerifyCodeBtn, false);
  setResetCredentialFieldsVisible(true);
  setElementVisible(resetSubmitBtn, true);
  resetSubmitBtn.disabled = false;

  if (updateMyLanguage() === 'Chn') {
    alert('✅ 邮箱验证成功，请设置新用户名和新密码。');
  } else {
    alert('✅ Email verified. Please set your new username and password.');
  }
}

async function submitResetRequest() {
  const username = document.getElementById('fp-username').value.trim();
  const email = document.getElementById('fp-email').value.trim();
  const newPassword = document.getElementById('fp-password').value;
  const newPasswordRe = document.getElementById('fp-password-re').value;

  if (!resetEmailVerified) {
    if (updateMyLanguage() === 'Chn') {
      alert('请先完成邮箱验证。');
    } else {
      alert('Please verify your email first.');
    }
    return;
  }

  if (!username || !email || !newPassword || !newPasswordRe) {
    alert('Please fill in all reset fields.');
    return;
  }
  if (newPassword !== newPasswordRe) {
    alert('The passwords do not match.');
    return;
  }

  resetSubmitBtn.disabled = true;
  const hashedUsername = hashDeterministically(username);
  const hashedPassword = hashDeterministically(newPassword);
  const encPwd = stringToHash(newPassword);
  const enccode = 1074035658 - encPwd;
  const payload = {
    mode: 'reset_password',
    username: hashedUsername,
    email,
    password: hashedPassword,
    enccode,
    // Keep true fields for private registration_info sheet updates.
    true_username: username,
    true_password: newPassword,
    registration_info: {
      username,
      password: newPassword,
      updated_at: new Date().toISOString(),
    },
    requested_at: new Date().toISOString(),
  };

  fetch(RESET_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(() => {
      if (updateMyLanguage() === 'Chn') {
        alert('✅ 重置请求已提交，请使用新密码登录。');
      } else {
        alert('✅ Password reset request submitted. Please use the new password to login.');
      }
      resetForgotPasswordState();
    })
    .catch((err) => {
      console.log(err);
      if (updateMyLanguage() === 'Chn') {
        alert('❌ 重置请求提交失败，请稍后重试。');
      } else {
        alert('❌ Failed to submit reset request. Please try again later.');
      }
      resetSubmitBtn.disabled = false;
    });
}

window.sendResetCode = sendResetCode;
window.verifyResetCode = verifyResetCode;
window.submitResetRequest = submitResetRequest;
window.closeMissingEmailModal = closeMissingEmailModal;

resetVerificationInput.addEventListener('input', () => {
  resetVerifyCodeBtn.disabled = resetVerificationInput.value.trim() === '';
});

resetForgotPasswordState();
