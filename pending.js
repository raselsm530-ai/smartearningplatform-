document.addEventListener("DOMContentLoaded", () => {
    const pendingList = document.getElementById("pendingList");
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");

    if (deposits.length === 0) {
        pendingList.innerHTML = "<p>কোনো Pending Deposit নেই</p>";
        return;
    }

    deposits.forEach((item, index) => {
        const box = document.createElement("div");
        box.classList.add("deposit-box");
        box.innerHTML = `
            <p><strong>User:</strong> ${item.user}</p>
            <p><strong>Amount:</strong> ${item.amount}</p>
            <button onclick="approve(${index})">Approve</button>
            <button onclick="reject(${index})">Reject</button>
        `;
        pendingList.appendChild(box);
    });
});


function approve(i) {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const dep = deposits[i];

    let user = users.find(u => u.phone === dep.user);

    if (user) {
        user.balance = Number(user.balance) + Number(dep.amount);
    }

    deposits.splice(i, 1);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("Approved!");
    location.reload();
}

function reject(i) {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");

    deposits.splice(i, 1);

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("Rejected!");
    location.reload();
}
