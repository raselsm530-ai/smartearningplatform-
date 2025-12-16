// লগইন চেক
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentUser = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentUser));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

function submitDeposit() {
    let amount = parseInt(document.getElementById("depositAmount").value);
    let trxId = document.getElementById("trxId").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }

    if (trxId === "") {
        alert("Transaction ID দিন");
        return;
    }

    // ব্যালেন্স যোগ
    if (!userData.balance) {
        userData.balance = 0;
    }

    userData.balance += amount;

    // ট্রানজেকশন হিস্টরি
    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Deposit",
        amount: amount,
        trxId: trxId,
        number: "01797632229",
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentUser, JSON.stringify(userData));

    alert("✅ ডিপোজিট সফল!\nব্যালেন্সে টাকা যোগ হয়েছে");

    window.location.href = "home.html";
}
