function registerUser() {
    let phone = phoneInput.value.trim();
    let password = passwordInput.value.trim();
    let confirm = confirmPassword.value.trim();
    let pin = withdrawPin.value.trim();

    if (phone.length !== 11 || !phone.startsWith("01")) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }

    if (password !== confirm) {
        alert("পাসওয়ার্ড মিলছে না");
        return;
    }

    if (pin.length !== 4) {
        alert("৪ সংখ্যার পিন দিন");
        return;
    }

    if (localStorage.getItem(phone)) {
        alert("এই নাম্বারে আগে থেকেই একাউন্ট আছে");
        return;
    }

    let user = {
        phone,
        password,
        withdrawPin: pin,
        balance: 0,
        transactions: []
    };

    localStorage.setItem(phone, JSON.stringify(user));
    alert("রেজিস্টার সফল 🎉");
    window.location.href = "login.html";
}
