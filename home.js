// লগইন আছে কিনা চেক
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ইউজার ডাটা লোড
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

// ওয়েলকাম টেক্সট
document.getElementById("welcomeText").innerText =
    "স্বাগতম, " + userData.phone + " 🎉";

// লগআউট ফাংশন
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
