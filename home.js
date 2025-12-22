// হোম পেজ লোড হলে ইউজারের ডেটা দেখাবে
window.onload = function () {
    const user = localStorage.getItem("user");
    if (!user) {
        alert("আপনি লগইন করুন!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("welcomeText").textContent = "স্বাগতম, " + user;

    // Firebase থেকে ব্যালেন্স নেওয়া
    import { db } from "./firebase-config.js";
    import { ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

    const userRef = ref(db, 'users/' + user);
    get(userRef).then(snapshot => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("balance").textContent = (data.balance || 0) + " ৳";
        } else {
            document.getElementById("balance").textContent = "0 ৳";
        }
    }).catch(err => console.log(err));
};

// লগআউট ফাংশন
function logoutUser() {
    localStorage.removeItem("user");
    alert("লগআউট সম্পন্ন হয়েছে");
    window.location.href = "login.html";
}
