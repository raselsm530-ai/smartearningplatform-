import { db } from "./firebase-config.js";
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const user = localStorage.getItem("user");
if(!user) location.href="login.html";

const balanceEl = document.getElementById("balance");

const userRef = ref(db, `users/${user}`);
onValue(userRef, snap=>{
    const data = snap.val() || {balance:0};
    balanceEl.innerText = data.balance;
});

window.buyPackage = (amount)=>{
    if(!amount) return;
    onValue(userRef, snap=>{
        const data = snap.val() || {balance:0};
        if(data.balance<amount) return alert("Balance কম আছে");
        const newBalance = data.balance - amount;
        update(userRef, {balance:newBalance});
        alert(`Package ${amount} ৳ কেনা হয়েছে\nনতুন ব্যালেন্স: ${newBalance}`);
    }, {onlyOnce:true});
};