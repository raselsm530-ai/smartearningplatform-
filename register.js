document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let withdrawPin = document.getElementById("withdrawPin").value.trim();
    let refCode = document.getElementById("inviteCode").value.trim();

    // Validation
    if (phone.length !== 11 || !phone.startsWith("01")) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলছে না");
        return;
    }

    if (withdrawPin.length !== 4) {
        alert("৪ সংখ্যার পিন দিন");
        return;
    }

    // Firebase DB Reference
    const userRef = window.ref(window.db, "users/" + phone);

    // Check if already exists
    const snapshot = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js")
        .then(module => module.get(userRef));

    if (snapshot.exists()) {
        alert("এই নম্বরে আগেই একাউন্ট আছে");
        return;
    }

    // New user data
    const newUser = {
        phone,
        password,
        withdrawPin,
        refCode: refCode || "NO-REF",
        balance: 0
    };

    // Save to firebase
    window.set(userRef, newUser)
        .then(() => {
            alert("রেজিস্ট্রেশন সফল 🎉");

            // Save current user locally (optional)
            localStorage.setItem("currentUser", phone);
            localStorage.setItem("currentUserData", JSON.stringify(newUser));

            window.location.href = "login.html";
        })
        .catch((error) => {
            alert("কিছু সমস্যা হয়েছে ❌");
            console.log(error);
        });

});