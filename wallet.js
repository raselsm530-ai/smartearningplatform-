// Fixed numbers for each method
const fixedNumbers = {
    "বিকাশ": "01797632229",
    "নগদ": "01797632229",
    "রকেট": "01797632229"
};

// Update shown number based on selected method
function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (!method) {
        numberBox.textContent = "মেথড নির্বাচন করুন";
        return;
    }

    // Use the mapping
    const num = fixedNumbers[method];
    if (num) {
        numberBox.textContent = method + ": " + num;
    } else {
        numberBox.textContent = "নাম্বার নেই";
    }
}

// Submit deposit request
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
        amount: amount,
        method: method,
        number: fixedNumbers[method],
        time: new Date().toLocaleString()
    });

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("✅ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে!");
    
    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
