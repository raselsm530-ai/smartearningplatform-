/* =========================
   লগইন চেক
========================= */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* =========================
   ইউজার লোড
========================= */
let currentPhone = localStorage.getItem("currentUser");

if (!currentPhone) {
    alert("লগইন তথ্য পাওয়া যায়নি!");
    window.location.href = "login.html";
}

let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

/* =========================
   Withdraw Function
========================= */
function withdrawMoney() {

    let amount = parseFloat(document.getElementById("withdraw
