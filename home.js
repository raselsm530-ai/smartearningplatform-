import { db } from "./firebase-config.js";
import { ref, onValue, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// --------------------
// Login Check
// --------------------
const user = localStorage.getItem("user");

// যদি ইউজার না থাকে, লগইন পেজে পাঠাবে
if(!user) {
    alert("দয়া করে লগইন করুন");
    location.href = "login.html";
} else {
    // ইউজার আছে, ডেটা লোড করবে
    document.getElementById("username").innerText = user;

    // --------------------
    // Real-time Balance Update
    // --------------------
    const balanceEl = document.getElementById("balance");
    const userRef = ref(db, `users/${user}`);

    // ফায়ারবেস থেকে ব্যালেন্স নিয়ে আসা
    onValue(userRef, snapshot => {
        const data = snapshot.val();
        if(data) {
            balanceEl.innerText = data.balance || 0;
        } else {
            balanceEl.innerText = 0;
        }
    });
}

// --------------------
// Button Actions
// --------------------
window.goToWallet = function() {
    location.href = "wallet.html";
}

window.goToPackages = function() {
    location.href = "packages.html";
}

window.logout = function() {
    localStorage.removeItem("user");
    location.href = "login.html";
}