function loadPendingDeposits() {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    const list = document.getElementById("depositList");

    list.innerHTML = "";

    if (pending.length === 0) {
        list.innerHTML = "<p>No Pending Deposits</p>";
        return;
    }

    pending.forEach((d, index) => {
        list.innerHTML += `
        <div class="box">
            <p>User: ${d.user}</p>
            <p>Amount: ${d.amount}৳</p>
            <p>Method: ${d.method}</p>
            <p>Send To: ${d.number}</p>
            <p>TrxID: ${d.trxid}</p>
            <p>Date: ${d.date}</p>
            <button onclick="approve(${index})">Approve</button>
        </div>`;
    });
}

function approve(index) {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    const deposit = pending[index];

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex(u => u.phone === deposit.user);

    if (userIndex !== -1) {
        users[userIndex].balance = Number(users[userIndex].balance) + Number(deposit.amount);
        localStorage.setItem("users", JSON.stringify(users));
    }

    pending.splice(index, 1);

    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("Approved");
    loadPendingDeposits();
}

loadPendingDeposits();
