if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

function depositMoney() {
    let amount = parseInt(document.getElementById("depositAmount").value);
    let method = document.getElementById("paymentMethod").value;

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট দিন");
        return;
    }

    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন");
        return
