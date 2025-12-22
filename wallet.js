import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

function updateNumber() {
    let method = document.getElementById("paymentMethod").value;
    let number = "01797632229"; 

    if (method === "") {
        document.getElementById("paymentNumber").innerText = "মেথড নির্বাচন করুন";
        return;
    }

    document.getElementById("paymentNumber").innerText = `${method} ➤ ${number}`;
}

window.updateNumber = updateNumber;

window.depositMoney = function () {
    let amount = document.getElementById("depositAmount").value.trim();
    let trxid = document.getElementById("trxid").value.trim();
    let method = document.getElementById("paymentMethod").value;
    
    let user = localStorage.getItem("currentUser");

    if (!user) {
        alert("লগইন করুন");
        return;
    }

    if (!amount || !trxid || !method) {
        alert("সব তথ্য দিন!");
        return;
    }

    const depositRef = ref(db, "pendingDeposits");

    push(depositRef, {
        user: user,
        amount: amount,
        trxid: trxid,
        method: method,
        status: "pending"
    });

    alert("ডিপোজিট পাঠানো হয়েছে!");
};