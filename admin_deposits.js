function loadDeposits() {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    let html = "";

    if (deposits.length === 0) {
        document.getElementById("depositList").innerHTML = "<p>No Pending Deposits</p>";
        return;
    }

    deposits.forEach((d, i) => {
        html += `
        <div class="box">
            <p>📌 ইউজার: ${d.user}</p>
            <p>💰 Amount: ${d.amount}৳</p>
            <p>💳 Method: ${d.method}</p>
            <p>⏱ Date: ${d.time}</p>

            <button class="approve" onclick="approveDeposit(${i})">Approve</button>
        </div>`;
    });

    document.getElementById("depositList").innerHTML = html;
}

function approveDeposit(index) {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let dep = deposits[index];

    let userIndex = users.findIndex(u => u.phone === dep.user);

    if (userIndex !== -1) {
        users[userIndex].balance = Number(users[userIndex].balance || 0) + Number(dep.amount);
    }

    deposits.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("Deposit Approved Successfully!");
    loadDeposits();
}

loadDeposits();
