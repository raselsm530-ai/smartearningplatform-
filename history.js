/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* ইউজার লোড */
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

let historyList = document.getElementById("historyList");

if (!userData || !userData.transactions || userData.transactions.length === 0) {
    historyList.innerHTML = "<p>কোনো উত্তোলন হিস্টরি নেই</p>";
} else {
    userData.transactions
        .filter(t => t.type === "Withdraw")
        .reverse()
        .forEach(t => {
            let div = document.createElement("div");
            div.className = "menu-card";
            div.innerHTML = `
                <h4>উত্তোলন</h4>
                <p>পরিমাণ: ${t.amount} ৳</p>
                <p>${t.date}</p>
            `;
            historyList.appendChild(div);
        });
}
