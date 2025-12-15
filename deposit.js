if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

function addMoney() {
    let amount = parseInt(document.getElementById("amount").value);

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }

    userData.balance += amount;

    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Deposit",
        amount: amount,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("ডিপোজিট সফল ✅");
    window.location.href = "home.html";
}
