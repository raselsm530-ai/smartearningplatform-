import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

window.register = function () {
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("password").value;

    if (!phone || !pass) {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    let email = phone + "@smart.com"; // custom email format

    createUserWithEmailAndPassword(auth, email, pass)
        .then((res) => {
            set(ref(db, "users/" + res.user.uid), {
                phone: phone,
                balance: 0,
                status: "active"
            });

            alert("রেজিস্ট্রেশন সফল!");
            window.location.href = "login.html";
        })
        .catch((err) => {
            alert(err.message);
        });
};