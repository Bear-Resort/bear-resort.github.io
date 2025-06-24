function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    return headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {});
  });
}

// Login check
function checkLogin(inputUsername, inputPassword, users) {
  return users.some(user =>
    user.username === inputUsername && user.password === inputPassword
  );
}

// Save user login info to localStorage
export function loginU(username, password) {
  if (!username || !password) {
    console.error("Username or password missing");
    return Promise.resolve(false);
  }
  const usernameEnc = encodeRSA(username);
  const passwordEnc = encodeRSA(password);

  alert(username)
  alert(usernameEnc)

  return fetch("/assets/js/users.csv") 
    .then(response => response.text())
    .then(csvText => {
      const users = parseCSV(csvText);
      if (checkLogin(usernameEnc, passwordEnc, users)) {
        // alert("Login successful");
        localStorage.setItem("loggedInUser", username);

        const loginLink = document.getElementById("login");
        if (loginLink) loginLink.textContent = username;

        return true; // ✅ resolves the promise
      } else {
        // alert("Invalid username or password");
        return false;
      }
    })
    .catch(error => {
      console.error("CSV load error:", error);
      return false;
    });
}

// Check if user is logged in
export function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Get current user info
export function getCurrentUser() {
    return localStorage.getItem('loggedInUser');
}

// Log out user
export function logout() {
    localStorage.removeItem('loggedInUser');
    console.log("User logged out");
    document.getElementById("login").textContent = "log in";
}

if (isLoggedIn()) {
    document.getElementById("login").textContent = localStorage.getItem('loggedInUser');
}