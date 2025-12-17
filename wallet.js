function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (method === "bkash") {
        numberBox.innerText = "📱 বিকাশ নম্বর: 01797632229";
    }
    else if (method === "nagad") {
        numberBox.innerText = "📱 নগদ নম্বর: 01797632229";
    }
    else if (method === "rocket") {
        numberBox.innerText = "📱 রকেট নম্বর: 01797632229";
    }
    else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}


function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    let method = document.getElementById("paymentMethod").value;

    if (!amount || !method) {
        alert("এমাউন্ট ও পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }

    let user = localStorage.getItem("currentUser");
    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

    deposits.push({
        user: user,
        amount: Number(amount),
        method: method,
        number: "01797632229",
        status: "Pending",
        time: new Date().toLocaleString()
    });

    localStorage.setItem("deposits", JSON.stringify(deposits));

    alert("📨 ডিপোজিট রিকুয়েস্ট পাঠানো হয়েছে");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").innerText = "মেথড নির্বাচন করুন";
}
