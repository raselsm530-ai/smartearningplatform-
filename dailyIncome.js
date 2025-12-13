/* =========================
   ডেইলি ইনকাম লজিক
========================= */

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData.dailyIncome) {
    userData.dailyIncome = {
        lastClaim: 0,
        totalEarned: 0
    };
}

/* একাধিক ডেইলি ইনকাম অপশন */
const incomeOptions = [
    { id: 1, name: "বেসিক ডেইলি ইনকাম", amount: 20 },
    { id: 2, name: "প্রিমিয়াম ডেইলি ইনকাম", amount: 50 }
];

function claimDailyIncome(amount) {
    let now = Date.now();
    let oneDay = 24 * 60 * 60 * 1000;

    if (now - userData.dailyIncome.lastClaim < oneDay) {
        alert("আজকের ডেইলি ইনকাম ইতিমধ্যে নেওয়া হয়েছে ❌");
        return;
    }

    userData.balance += amount;
    userData.dailyIncome.lastClaim = now;
    userData.dailyIncome.totalEarned += amount;

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert(`অভিনন্দন 🎉 ${amount} ৳ যোগ হয়েছে`);
    location.reload();
}
