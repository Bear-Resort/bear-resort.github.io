import { encodeRSA } from '/assets/js/prsa.js';

function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index].trim();
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
function login(username, password) {
    if (!username || !password) {
        console.error("Username or password missing");
        return false;
    }
    const usernameEnc = username;
    const passwordEnc = password;
    // const usernameEnc = encodeRSA(username);
    // const passwordEnc = encodeRSA(password);
    fetch("users.csv")
        .then(response => response.text())
        .then(csvText => {
        const users = parseCSV(csvText);
        if (checkLogin(usernameEnc, passwordEnc, users)) {
            alert("Login successful");
            localStorage.setItem("loggedInUser", username);
            document.getElementById("login").id = username;
            return true;
        } else {
            alert("Invalid username or password");
        }
        })
        .catch(error => console.error("CSV load error:", error));
    return false;
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Get current user info
function getCurrentUser() {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
}

// Log out user
function logout() {
    localStorage.removeItem('loggedInUser');
    console.log("User logged out");
    document.getElementById("login").id = "log in";
}

// Export functions if using modules
// export { login, isLoggedIn, getCurrentUser, logout };
