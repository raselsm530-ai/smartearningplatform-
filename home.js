import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

window.onload = async () => {
    const phone = localStorage.getItem("currentUser");
    if (!phone) return location.href = "login.html";

    document.getElementById("welcomeText").innerText = "স্বাগতম " + phone;

    const snap = await get(ref(db, "users/" + phone));

    if (snap.exists()) {
        document.getElementById("balance").innerText = snap.val().balance + " ৳";
    }
};