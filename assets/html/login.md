---
title: "User Center"
---

<div class="container">
    <h1><span class="eng">User Center</span> <span class="chn">用户中心</span></h1>
    <img src="/logos/user.gif" style="width: 200px; height: 200px;"><br>
    <br>
    <span class="eng">Users of the Bear Resort enjoys "fans-only" exclusive contents.</span>
    <span class="chn">小熊樂園用户享受“粉丝专享”独家资源。</span> 
    <br>
    <div id="login-form" style="text-align: center;">
      <h2><span class="eng">Log in</span> <span class="chn">登录</span></h2>
      <form class="login-grid">
      <label for="username"><span class="eng">Username</span> <span class="chn">用户名</span>:</label> <input type="text" id="username" placeholder="Enter your username..." style="font-size: 16px" required />
      <label for="password"><span class="eng">Password</span> <span class="chn">密码</span>:</label> <input type="password" id="password" placeholder="Enter your password..." style="font-size: 16px" required />
      </form>
      <br><br>
      <button onclick="handleLogin()">Login</button>
    </div>
    <br>
    <div style="text-align: center;">
      <div id="welcome-text"></div>
    </div>
    <br>
    <div id="welcome" style="display: none; text-align: center;">
        <div class="login-grid">
            <label for="username-active"><span class="eng">Username</span> <span class="chn">用户名</span>:</label> <span id="active-username"></span>
            <label for="user-lvl"><span class="eng">Category</span> <span class="chn">范畴</span>:</label> <span id="active-category"></span>
        </div>
        <br>
        <button id="logout-btn" onclick="handleLogout()">Logout</button>
      </div>
    <div style="text-align: center">
        <h2><span class="eng">Do not give your password to other people!</span> <span class="chn">不要把密码给别人！</span></h2>
    </div>
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
            document.getElementById("welcome-text").textContent = "❌ <span class="eng">Invalid username or passcode.</span> <span class="chn">用戶名或密碼錯誤。</span>";
        }
    }

    function showWelcome(username) {
      document.getElementById("login-form").style.display = "none";
      const welcome = document.getElementById("welcome");
      document.getElementById("welcome-text").textContent = "✅ <span class="eng">You are logged in</span> <span class="chn">您已登录</span>";
      document.getElementById("active-username").textContent = `${username}`;
      document.getElementById("active-category").textContent = "<span class="eng">True Fan</span> <span class="chn">真爱粉</span>";
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