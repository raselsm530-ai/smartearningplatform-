/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

function depositMoney() {
    let amount = parseInt(document.getElementById("depositAmount").value);

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট দিন");
        return;
    }

    if (!userData.balance) {
        userData.balance = 0;
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

    alert("টাকা যোগ সফল ✅");
    window.location.href = "home.html";
}
