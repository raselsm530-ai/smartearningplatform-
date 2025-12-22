let amount = 0;

const paymentNumbers = {
    "বিকাশ": "01797632229",
    "নগদ": "01797632229",
    "রকেট": "01797632229"
};

document.querySelectorAll(".amount").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".amount").forEach(x =>
            x.classList.remove("active")
        );

        btn.classList.add("active");

        amount = btn.dataset.amount;

        document.getElementById("selectedBox").innerHTML =
            `আপনি নির্বাচন করেছেন <b>${amount}৳</b>`;
    });
});

window.deposit = () => {

    if (!amount) {
        alert("দয়া করে Amount নির্বাচন করুন");
        return;
    }

    const method = document.getElementById("method").value;

    if (!method) {
        alert("মেথড নির্বাচন করুন");
        return;
    }

    const num = paymentNumbers[method];

    const box = document.getElementById("numberBox");
    box.classList.remove("hidden");

    box.innerHTML = `
        📌 ${method} নাম্বার:<b> ${num}</b>
        <br>এমাউন্ট: <b>${amount}৳</b>
        <br><br>এখন টাকা পাঠান!
    `;
};
