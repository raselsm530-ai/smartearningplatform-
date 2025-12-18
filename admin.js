// লগইন চেক
if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin_login.html";
}

// pending deposits লোড
let pendingDeposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

// balances লোড
let balances = JSON.parse(localStorage.getItem("balances")) || {};

// pending deposit দেখানো
function loadDeposits() {
    let container = document.getElementById("pendingDeposits");

    container.innerHTML = "";

    if (pendingDeposits.length === 0) {
        container.innerHTML = "<p>No pending deposits!</p>";
        return;
    }

    pendingDeposits.forEach((dep, index) => {
        let div = document.createElement("div");
        div.className = "deposit-card";

        div.innerHTML = `
            <p>User: ${dep.user}</p>
            <p>Amount: ${dep.amount} ৳</p>
            <p>Method: ${dep.method}</p>
            <p>Date: ${dep.date}</p>
            <button onclick="approveDeposit(${index})">Approve</button>
        `;

        container.appendChild(div);
    });
}

loadDeposits();

// Approve Deposit
function approveDeposit(index) {
    let deposit = pendingDeposits[index];

    if (!balances[deposit.user]) {
        balances[deposit.user] = 0;
    }

    balances[deposit.user] += deposit.amount;

    pendingDeposits.splice(index, 1);

    localStorage.setItem("balances", JSON.stringify(balances));
    localStorage.setItem("pendingDeposits", JSON.stringify(pendingDeposits));

    alert("Deposit Approved!");
    loadDeposits();
}

// Logout
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin_login.html";
}
