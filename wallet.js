// ⬇ পেমেন্ট নাম্বার আপডেট
function updateNumber() {
    let method = document.getElementById("paymentMethod").value;
    let numberBox = document.getElementById("paymentNumber");

    if (method === "Bkash") {
        numberBox.innerHTML = "বিকাশ: 01797632229";
    } else if (method === "Nagad") {
        numberBox.innerHTML = "নগদ: 01797632229";
    } else if (method === "Rocket") {
        numberBox.innerHTML = "রকেট: 01797632229";
    } else {
        numberBox.innerHTML = "মেথড নির্বাচন করুন";
    }
}


// ⬇ ডিপোজিট সাবমিট সিস্টেম
function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    let method = document.getElementById("paymentMethod").value;

    if (!amount || !method) {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

    deposits.push({
        amount: Number(amount),
        method: method,
        status: "Pending",
        time: new Date().toLocaleString()
    });

    localStorage.setItem("deposits", JSON.stringify(deposits));

    alert("✔ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে\n➤ Admin যাচাই করবে");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    updateNumber();
}
