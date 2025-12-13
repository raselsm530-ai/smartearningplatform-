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
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি! আবার লগইন করুন।");
    window.location.href = "login.html";
}

/* =========================
   Withdraw Function
========================= */
function withdrawMoney() {
    let amount = parseInt(document.getElementById("withdrawAmount").value);
    let pin = document.getElementById("withdrawPin").value.trim();

    /* এমাউন্ট চেক */
    if (!amount || amount <= 0) {
        alert("সঠিক উত্তোলন এমাউন্ট লিখুন!");
        return;
    }

    /* পিন চেক */
    if (!pin || pin.length !== 4) {
        alert("৪ সংখ্যার সঠিক পিন দিন!");
        return;
    }

    if (pin !== userData.withdrawPin) {
        alert("ভুল উত্তোলন পিন!");
