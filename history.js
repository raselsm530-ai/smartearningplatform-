let phone = localStorage.getItem("currentUser");
let user = JSON.parse(localStorage.getItem(phone));

user.transactions.forEach(t => {
    let div = document.createElement("div");
    div.className = "menu-card";
    div.innerHTML = `<b>${t.amount} ৳</b><br>${t.time}`;
    list.appendChild(div);
});
