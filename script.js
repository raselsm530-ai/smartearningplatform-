// Save user
function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    let user = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account Created Successfully!");

    window.location.href = "login.html";
}

// Login
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found. Please Sign Up first.");
        return;
    }

    if (username === savedUser.username && password === savedUser.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

// Check login on dashboard
function checkLogin() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        window.location.href = "login.html";
    } else {
        let user = JSON.parse(localStorage.getItem("user"));
        document.getElementBy
