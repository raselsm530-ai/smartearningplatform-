document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();

        // Check if user data exists
        let storedUser = localStorage.getItem("user");

        if (!storedUser) {
            alert("No account found! Please register first.");
            return;
        }

        let user = JSON.parse(storedUser);

        if (phone === user.phone && password === user.password) {
            alert("Login Successful!");

            // Save login status
            localStorage.setItem("isLoggedIn", "true");

            // Redirect to dashboard
            window.location.href = "dashboard.html";
        } 
        else {
            alert("Incorrect Phone Number or Password!");
        }
    });

});
