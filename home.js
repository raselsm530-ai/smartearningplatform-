import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, onValue } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 🔐 AUTH GUARD + BALANCE
onAuthStateChanged(auth, user => {

    const phone = localStorage.getItem("user");

    if (!user || !phone) {
        location.href = "login.html";
        return;
    }

    const balanceRef = ref(db, "users/" + phone + "/balance");

    onValue(balanceRef, snapshot => {
        document.getElementById("balance").innerText =
            snapshot.val() ?? 0;
    });
});

// 🔴 LOGOUT
window.logout = async function () {
    await signOut(auth);
    localStorage.removeItem("user");
    location.href = "login.html";
};

// 🔗 NAV
window.go = function (page) {
    location.href = page;
};