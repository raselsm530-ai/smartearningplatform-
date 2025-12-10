document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let matchedUser = users.find(u => u.phone === phone && u.password === password);

    if(matchedUser){
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid phone number or password");
    }
});
