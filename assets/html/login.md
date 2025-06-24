---
title: "User Center"
---

<div class="container">
    <h1>User Center <br> 用户中心</h1>
    <img src="/logos/user.gif" height="200"><br>
    <br>
    Users of the Bear Resort enjoys "fans-only" exclusive contents. 小熊樂園用户享受“粉丝专享”独家资源。
    <br>
    <div id="login-form" style="text-align: center;">
      <h2>Log in <br> 登录</h2>
      Username / 用户名: <input type="text" id="username" placeholder="Enter your username..." style="font-size: 16px" required /> &nbsp; &nbsp;
      Password / 密码: <input type="password" id="password" placeholder="Enter your password..." style="font-size: 16px" required /> <br><br>
      <button onclick="handleLogin()">Login</button>
    </div>
    <div style="text-align: center;">
      <div id="welcome-text"></div>
    </div>
    <div id="welcome" style="display: none; text-align: center;">
      <button id="logout-btn" onclick="handleLogout()">Logout</button>
    </div>
    <br>
    <h2>Do not give your password to other people. 不要把密码给别人！</h2>
</div>

<script type="module">
    import { isLoggedIn, logout, getCurrentUser, loginU } from '/assets/js/login.js';

    document.getElementById("login").style.display = "none";

    async function handleLogin() {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const success = await loginU(username, password); // Wait for async result
        if (success) {
            localStorage.setItem('loginEvent', Date.now().toString());
            showWelcome(username);
        } else {
            document.getElementById("welcome-text").textContent = "❌ Invalid username or passcode.";
        }
    }

    function showWelcome(username) {
      document.getElementById("login-form").style.display = "none";
      const welcome = document.getElementById("welcome");
      document.getElementById("welcome-text").textContent = `✅ You are logged in as "${username}"`;
      welcome.style.display = "block";
    }

    // Auto-check on page load
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
</script>