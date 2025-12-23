import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

window.login = () => {
    const phone = document.getElementById("phone").value.trim();
    const pass = document.getElementById("password").value.trim();
    if (!phone || !pass) return alert("সব ঘর পূরণ করুন");

    const email = phone + "@app.com";

    signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
        localStorage.setItem("user", phone);
        location.href = "home.html";
    })
    .catch(err => alert("লগইন ব্যর্থ: " + err.message));
};