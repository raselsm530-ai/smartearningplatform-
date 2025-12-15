if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));
let box = document.getElementById("historyList");

if (!userData.transactions || userData.transactions.length === 0) {
    box.innerHTML = "<p>কোনো লেনদেন নেই</p>";
} else {
    userData.transactions.slice().reverse().forEach(tx => {
        let div = document.createElement("div");
        div.className = "menu-card";
        div.innerHTML = `
            <h4>${tx.type}</h4>
            <p>পরিমাণ: ${tx.amount} ৳</p>
            <p>${tx.date}</p>
        `;
        box.appendChild(div);
    });
}
