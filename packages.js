/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

/* প্যাকেজ কেনা */
function buyPackage(amount) {

    if (!userData.balance || userData.balance < amount) {
        alert("পর্যাপ্ত ব্যালেন্স নেই ❌");
        return;
    }

    // ব্যালেন্স কাট
    userData.balance -= amount;

    // প্যাকেজ লিস্ট না থাকলে বানাও
    if (!userData.packages) {
        userData.packages = [];
    }

    // প্যাকেজ যোগ
    userData.packages.push({
        amount: amount,
        date: new Date().toLocaleString(),
        status: "Active"
    });

    // লোকালস্টোরেজে সেভ
    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("প্যাকেজ সফলভাবে Active হয়েছে ✅");

    window.location.href = "home.html";
}
