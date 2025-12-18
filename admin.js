let list = document.getElementById("depositList");

// user deposits stored in "deposits", not pendingDeposits
let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

list.innerHTML = "";

deposits.forEach((d, i) => {
    if (d.status === "Pending") {
        let div = document.createElement("div");
        div.className = "info-box";

        div.innerHTML = `
            <p>Amount: ${d.amount} ৳</p>
            <p>Method: ${d.method}</p>
            <p>Date: ${d.date}</p>
            <button onclick="approve(${i})">Approve</button>
        `;

        list.appendChild(div);
    }
});

function approve(index) {
    let d = deposits[index];

    let user = localStorage.getItem("currentUser");  // optional if you want

    let key = "balance_main"; // main balance
    let balance = Number(localStorage.getItem(key)) || 0;
    balance += Number(d.amount);

    localStorage.setItem(key, balance);

    // update status
    deposits[index].status = "Approved";
    localStorage.setItem("deposits", JSON.stringify(deposits));

    alert("Deposit Approved!");

    location.reload();
}
