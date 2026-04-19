import { isLoggedIn, logout, getCurrentUser, loginU } from '/assets/js/login.js';
import { updateMyLanguage } from '/assets/js/lang.js';

document.getElementById("login").style.display = "none";

async function handleLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const success = await loginU(username, password);
    if (success) {
        localStorage.setItem('loginEvent', Date.now().toString());
        showWelcome(username);
    } else {
        document.getElementById("welcome-text").innerHTML = "❌ <span class='eng'>Invalid username or passcode.</span> <span class='chn'>用戶名或密碼錯誤。</span>";
    }
}


function showWelcome(username) {
  document.getElementById("login-form").style.display = "none";
  const welcome = document.getElementById("welcome");
  document.getElementById("welcome-text").innerHTML = "✅ <span class='eng'>You are logged in</span> <span class='chn'>您已登录</span>";
  document.getElementById("active-username").textContent = `${username}`;
  document.getElementById("active-category").innerHTML = "<span class='eng'>True Fan</span> <span class='chn'>真爱粉</span>";
  updateMyLanguage();
  welcome.style.display = "block";
}

if (isLoggedIn()) {
  document.getElementById("login-form").style.display = "none";
  showWelcome(getCurrentUser());
}

function handleLogout() {
    logout();
    document.getElementById("welcome").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("welcome-text").textContent = "";
    localStorage.setItem('logoutEvent', Date.now().toString());
}

window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
