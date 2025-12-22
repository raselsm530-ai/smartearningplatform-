import { db } from "./firebase-config.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const fixedNumbers = {
    bkash: "01797632229",
    nagad: "01797632229",
    rocket: "01797632229"
};

window.updateNumber = () => {
    const method = document.getElementById("paymentMethod").value;
    document.getElementById("paymentNumber").innerText =
        fixedNumbers[method] ? `${method}: ${fixedNumbers[method]}` : "মেথড নির্বাচন করুন";
};

window.depositMoney = () => {
    const amount = document.getElementById("depositAmount").value.trim();
    const method = document.getElementById("paymentMethod").value.trim();
    const trxid = document.getElementById("trxid").value.trim();
    const phone = localStorage.getItem("user");

    if (!phone) { alert("Please login first!"); return; }
    if (!amount || !method) { alert("Amount & Method দরকার!"); return; }

    const depositRef = push(ref(db, "deposits"));
    set(depositRef, {
        user: phone,
        amount: Number(amount),
        method: method,
        number: fixedNumbers[method],
        trxid: trxid || "N/A",
        status: "pending",
        date: new Date().toLocaleString()
    });
    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে (Pending)");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
};
