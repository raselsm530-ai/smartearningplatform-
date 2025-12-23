import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const userPhone = localStorage.getItem("user");

// ইউজার লগইন না থাকলে লগইন পেজে
if (!userPhone) {
    alert("Login করুন");
    window.location.href = "login.html";
}

// রিয়েল টাইম ব্যালেন্স
const balanceRef = ref(db, "users/" + userPhone + "/balance");
onValue(balanceRef, (snapshot) => {
    const balance = snapshot.val() || 0;
    document.getElementById("balance").innerText = balance + " ৳";
});

// স্বাগতম টেক্সট
const welcomeRef = ref(db, "users/" + userPhone + "/phone");
onValue(welcomeRef, (snapshot) => {
    const phone = snapshot.val();
    document.getElementById("welcomeText").innerText = `স্বাগতম ${phone}`;
});

// লগআউট
window.logoutUser = function() {
    localStorage.removeItem("user");
    alert("লগআউট সফল");
    window.location.href = "login.html";
};
