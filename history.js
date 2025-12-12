// লগইন চেক
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি! আবার লগইন করুন।");
    window.location.href = "login.html";
}

// হিস্টোরি লোড
let historyList = document.getElementById("historyList");

if (userData.history && userData.history.length > 0) {

    userData.history.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("history-item");

        div.innerHTML = `
            <p><strong>${item.type}</strong> - ${item.amount} ৳</p>
            <small>${item.date}</small>
        `;

        historyList.appendChild(div);
    });

} else {
    historyList.innerHTML = "<p>কোনো হিস্টোরি পাওয়া যায়নি।</p>";
}

// হোমে ফেরত
function goHome() {
    window.location.href = "home.html";
}
