import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Login check
const user = localStorage.getItem("user");
if(!user) {
    location.href = "login.html";
} else {
    document.getElementById("username").innerText = user;

    const userRef = ref(db, `users/${user}`);
    const balanceEl = document.getElementById("balance");

    // Real-time balance update
    onValue(userRef, snapshot => {
        const data = snapshot.val();
        balanceEl.innerText = (data && data.balance) ? data.balance : 0;
    });
}

// Button actions
window.goToWallet = () => location.href = "wallet.html";
window.goToPackages = () => location.href = "packages.html";
window.logout = () => {
    localStorage.removeItem("user");
    location.href = "login.html";
}