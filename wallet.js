function updateDepositNumber() {
    const method = document.getElementById("method").value;
    const numberBox = document.getElementById("depositNumber");

    if (method === "Bkash") {
        numberBox.innerText = "📱 বিকাশ নাম্বার: 01797632229";
    } 
    else if (method === "Nagad") {
        numberBox.innerText = "📱 নগদ নাম্বার: 01797632229";
    } 
    else if (method === "Rocket") {
        numberBox.innerText = "📱 রকেট নাম্বার: 01797632229";
    } 
    else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}
