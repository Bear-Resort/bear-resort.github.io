---
title: "Login"
---

<div class="container">
    <div id="login-form">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button onclick="handleLogin()">Login</button>
    </div>
    <div id="welcome" style="display: none;">
      <div id="welcome-text"></div>
      <button id="logout-btn" onclick="handleLogout()">Logout</button>
    </div>
</div>

<script>
    document.getElementById("login").style.display = "none";

    function handleLogin() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (login(username, password)) {
        showWelcome(username);
      } else {
        alert("Invalid username or password");
      }
    }

    function showWelcome(username) {
      document.getElementById("login-form").style.display = "none";
      const welcome = document.getElementById("welcome");
      document.getElementById("welcome-text").textContent = `✅ You are logged in as "${getCurrentUser()}"`;
      welcome.style.display = "block";
    }

    // Auto-check on page load
    if (isLoggedIn()) {
      document.getElementById("login-form").style.display = "none";
      showWelcome(savedUser);
    }

    function handleLogout() {
      logout();
      document.getElementById("welcome").style.display = "none";
      document.getElementById("login-form").style.display = "block";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
</script>