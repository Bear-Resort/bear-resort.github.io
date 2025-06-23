---
title: "Login"
---

<div class="container">
    <div id="login-form" style="text-align: center;">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button onclick="handleLogin()">Login</button>
    </div>
    <div id="welcome" style="display: none; text-align: center;">
      <div id="welcome-text"></div>
      <button id="logout-btn" onclick="handleLogout()">Logout</button>
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
    }
</script>