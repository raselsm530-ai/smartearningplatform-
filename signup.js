document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.some(u => u.phone === phone);

    if(exists){
        alert("Phone number already registered!");
        return;
    }

    users.push({
        name: name,
        phone: phone,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";
});
