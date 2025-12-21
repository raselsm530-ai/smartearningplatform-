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
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("paymentMethod").value;

    const trx = document.getElementById("trxid").value.trim() || "N/A";

    if (!amount || !method) {
        alert("Amount & Method দিন!");
        return;
    }

    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("Please Login!");
        return;
    }

    const deposit = {
        user: currentUser,
        amount: Number(amount),
        method,
        number: fixedNumbers[method],
        trxid: trx,
        date: new Date().toLocaleString()
    };

    let list = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    list.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(list));

    alert("Deposit Sent!");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
}
