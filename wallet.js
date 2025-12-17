// ===== FIXED PAYMENT NUMBERS =====
const paymentNumbers = {
    Bkash: "01797632229",
    Nagad: "01797632229",
    Rocket: "01797632229"
};

// ===== UPDATE NUMBER ON METHOD CHANGE =====
function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (!method) {
        numberBox.innerText = "মেথড নির্বাচন করুন";
        return;
    }

    numberBox.innerText = paymentNumbers[method];
}

// ===== DEPOSIT FUNCTION =====
function depositMoney() {
    const amount = Number(document.getElementById("depositAmount").value);
    const method = document.getElementById("paymentMethod").value;

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }

    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }

    alert(
        "ডিপোজিট রিকুয়েস্ট নেওয়া হয়েছে ✅\n\n" +
        "মেথড: " + method + "\n" +
        "নাম্বার: " + paymentNumbers[method] + "\n" +
        "এমাউন্ট: " + amount + " টাকা"
    );
}
