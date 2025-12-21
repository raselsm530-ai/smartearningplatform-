const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    document.getElementById("paymentNumber").innerText =
        fixedNumbers[method] ? `${method}: ${fixedNumbers[method]}` : "মেথড নির্বাচন করুন";
}

function depositMoney() {
    const amount = document.getElementById("depositAmount").value.trim();
    const method = document.getElementById("paymentMethod").value.trim();
    const trx = document.getElementById("trxid").value.trim();

    if (!amount || !method) {
        alert("Amount এবং Method দিন!");
        return;
    }

    const user = localStorage.getItem("currentUser");

    if (!user) {
        alert("Please Login!");
        return;
    }

    const deposit = {
        user: user,                    // PHONE NUMBER ONLY ✔️
        amount: Number(amount),
        method: method,
        number: fixedNumbers[method],
        trxid: trx ? trx : "N/A",
        date: new Date().toLocaleString()
    };

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("Deposit Sent!");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
}
