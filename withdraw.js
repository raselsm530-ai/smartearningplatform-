 let phone = localStorage.getItem("currentUser");
let user = JSON.parse(localStorage.getItem(phone));

function withdrawMoney() {
    let amount = parseInt(withdrawAmount.value);
    let pin = withdrawPin.value;

    if (pin !== user.withdrawPin) {
        alert("ভুল পিন");
        return;
    }

    if (user.balance < amount) {
        alert("ব্যালেন্স নেই");
        return;
    }

    user.balance -= amount;

    user.transactions.push({
        type: "Withdraw",
        amount,
        time: new Date().toLocaleString()
    });

    localStorage.setItem(phone, JSON.stringify(user));
    window.location.href = "home.html";
}   
