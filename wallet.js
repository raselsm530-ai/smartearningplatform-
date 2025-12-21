const paymentNumbers = {
    bkash: "01797632229",
    nagad: "01797632229",
    rocket: "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberField = document.getElementById("paymentNumber");

    if (paymentNumbers[method]) {
        numberField.textContent = `${method}: ${paymentNumbers[method]}`;
    } else {
        numberField.textContent = "মেথড নির্বাচন করুন";
    }
}

function depositMoney() {
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("paymentMethod").value;
    const trxid = document.getElementById("trxid") ? document.getElementById("trxid").value : "";
    
    if (!amount || !method) {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    const depositNumber = paymentNumbers[method];

    const deposit = {
        user: localStorage.getItem("loggedInUser"),
        amount: amount,
        method: method,
        number: depositNumber,
        trxid: trxid,
        date: new Date().toLocaleString()
    };

    let pendingDeposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pendingDeposits.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(pendingDeposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে");
    window.location.href = "wallet.html";
}
