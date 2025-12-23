// ================= FIXED PAYMENT NUMBERS =================
const fixedNumbers = {
    bkash: "01797632229",
    nagad: "01797632229",
    rocket: "01797632229"
};

let selectedAmount = 0;

// ================= AMOUNT SELECT =================
function selectAmount(amount) {
    selectedAmount = amount;
    document.getElementById("showAmount").innerText = amount;

    // visual active effect (optional)
    document.querySelectorAll(".amount-grid button").forEach(btn => {
        btn.classList.remove("active");
    });
}

// ================= COPY NUMBER =================
function copyNumber() {
    const text = document.getElementById("fixedNumberText").innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("✅ নাম্বার কপি হয়েছে\nবিকাশ / নগদ অ্যাপে Paste করুন");
    });
}

// ================= SUBMIT DEPOSIT =================
function submitDeposit() {
    const method = document.getElementById("method").value;
    const trxid = document.getElementById("trxid").value.trim();
    const screenshot = document.getElementById("screenshot").files[0];

    if (!selectedAmount) {
        alert("❌ আগে এমাউন্ট সিলেক্ট করুন");
        return;
    }

    if (!method) {
        alert("❌ পেমেন্ট মেথড সিলেক্ট করুন");
        return;
    }

    if (!trxid) {
        alert("❌ Transaction ID দিন");
        return;
    }

    const user = localStorage.getItem("user");
    if (!user) {
        alert("❌ আগে লগইন করুন");
        return;
    }

    // ===== Deposit Object =====
    const deposit = {
        user: user,
        amount: selectedAmount,
        method: method,
        number: fixedNumbers[method],
        trxid: trxid,
        screenshot: screenshot ? screenshot.name : "N/A",
        status: "pending",
        time: new Date().toLocaleString()
    };

    // ===== Save Pending Deposit (Demo) =====
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);
    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("✅ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে\nঅ্যাডমিন এপ্রুভের অপেক্ষা করুন");

    // ===== Reset =====
    selectedAmount = 0;
    document.getElementById("showAmount").innerText = "0";
    document.getElementById("method").value = "";
    document.getElementById("trxid").value = "";
    document.getElementById("screenshot").value = "";
}    
