if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

function depositMoney() {
    let amount = parseInt(document.getElementById("depositAmount").value);
    let method = document.getElementById("paymentMethod").value;
    let trxId = document.getElementById("trxId").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }
    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }
    if (!trxId) {
        alert("Transaction ID দিন");
        return;
    }

    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Deposit",
        amount: amount,
        method: method,
        trxId: trxId,
        status: "Pending",
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("ডিপোজিট রিকুয়েস্ট পাঠানো হয়েছে ⏳ (Pending)");

    window.location.href = "home.html";
}
