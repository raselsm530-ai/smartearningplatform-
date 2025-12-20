window.onload = function () {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    const container = document.getElementById("pendingList");

    container.innerHTML = "";

    pending.forEach((d, index) => {
        container.innerHTML += `
        <div class="pending-card">
            <p>📱 ইউজার: ${d.user}</p>
            <p>💰 Amount: ${d.amount} ৳</p>
            <p>🏦 Method: ${d.method}</p>
            <p>📝 TrxID: ${d.trx}</p>
            <p>⏱ Date: ${d.date}</p>

            <button onclick="approveDeposit(${index})">Approve</button>
        </div>
        `;
    });
};

function approveDeposit(index) {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    let deposits = pending[index];

    let balances = JSON.parse(localStorage.getItem("balances")) || {};

    balances[deposits.user] = (balances[deposits.user] || 0) + deposits.amount;

    localStorage.setItem("balances", JSON.stringify(balances));

    pending.splice(index, 1);
    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("Approved Successfully!");

    location.reload();
}
