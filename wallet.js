// =========================
// Wallet System Functions
// =========================

// Get current balance
function getBalance() {
    let balance = localStorage.getItem("walletBalance");
    if (!balance) {
        return 0; // default balance
    }
    return parseFloat(balance);
}

// Add money (For Deposit)
function addMoney(amount) {
    let current = getBalance();
    let newBalance = current + amount;

    localStorage.setItem("walletBalance", newBalance);
    return newBalance;
}

// Deduct money (For Withdraw / Buy Package)
function deductMoney(amount) {
    let current = getBalance();

    if (amount > current) {
        return false;
    }

    let newBalance = current - amount;
    localStorage.setItem("walletBalance", newBalance);

    return newBalance;
}

// Show balance on dashboard
function showBalance() {
    let balanceBox = document.getElementById("balance");
    if (balanceBox) {
        balanceBox.innerText = getBalance() + "৳";
    }
}
