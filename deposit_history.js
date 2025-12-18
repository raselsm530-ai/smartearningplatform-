document.addEventListener("DOMContentLoaded", () => {

    const user = localStorage.getItem("currentUser");
    const table = document.getElementById("historyTable");

    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

    let myDeposits = deposits.filter(d => d.user === user);

    if (myDeposits.length === 0) {
        let row = table.insertRow();
        let cell = row.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = "কোনো ডিপোজিট নেই";
        cell.style.textAlign = "center";
        return;
    }

    myDeposits.forEach(deposit => {
        let row = table.insertRow();
        row.insertCell(0).textContent = deposit.amount + " ৳";
        row.insertCell(1).textContent = deposit.method;
        row.insertCell(2).textContent = deposit.status;
        row.insertCell(3).textContent = deposit.time;
    });

});
