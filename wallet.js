// Fixed Deposit Numbers
const fixedNumbers = {
    "বিকাশ": "01797632229",
    "নগদ": "01797632229",
    "রকেট": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const paymentNumber = document.getElementById("paymentNumber");

    if (!method) {
        paymentNumber.textContent = "মেথড নির্বাচন করুন";
        return;
    }

    const num = fixedNumbers[method];
    if (num) {
        paymentNumber.textContent = method + ": " + num;
    } else {
        paymentNumber.textContent = "নাম্বার নেই";
    }
}

function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    let method = document.getElementById("paymentMethod").value;

    if (!amount || !method) {
        alert("পরিমাণ ও পেমেন্ট মেথড নির্বাচন করুন!");
        return;
    }

    let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

    deposits.push({
        user: localStorage.getItem("currentUser") || "",
        amount,
        method,
        number: fixedNumbers[method],
        time: new Date().toLocaleString()
    });

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে!");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
