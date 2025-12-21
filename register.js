document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.phone === phone)) {
        alert("এই নাম্বার দিয়ে অ্যাকাউন্ট আগে থেকেই আছে!");
        return;
    }

    const newUser = {
        phone: phone,
        password: password,
        balance: 0
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", phone); // <-- এই লাইনটাই আসল

    alert("রেজিস্ট্রেশন সম্পন্ন!");

    window.location.href = "home.html";
});
