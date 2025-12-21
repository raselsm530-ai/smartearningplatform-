const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (fixedNumbers[method]) {
        numberBox.innerText = `${method}: ${fixedNumbers[method]}`;
    } else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}

function depositMoney() {
    const amount = document.getElementById("depositAmount").value.trim();
    const method = document.getElementById("paymentMethod").value.trim();
    const trxidInput = document.getElementById("trxid").value.trim();

    // Amount & method validation
    if (!amount || !method) {
        alert("Amount এবং Method দিতে হবে!");
        return;
    }

    // ট্রানজেকশন আইডি অপশনাল
    const trxid = trxidInput !== "" ? trxidInput : "N/A";

    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("Please login first!");
        return;
    }

    const depositData = {
        user: currentUser,
        amount: Number(amount),
        method: method,
        number: fixedNumbers[method],
        trxid: trxid,
        status: "pending",
        date: new Date().toLocaleString()
    };

    let pendingDeposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pendingDeposits.push(depositData);

    localStorage.setItem("pendingDeposits", JSON.stringify(pendingDeposits));

    alert("ডিপোজিট রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!");

    // form reset
    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
}
