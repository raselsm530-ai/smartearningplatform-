function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (method === "bkash") {
        numberBox.innerText = "📱 বিকাশ: 01797632229";
    }
    else if (method === "nagad") {
        numberBox.innerText = "📱 নগদ: 01797632229";
    }
    else if (method === "rocket") {
        numberBox.innerText = "📱 রকেট: 01797632229";
    }
    else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}
