function signUp() {
    let name = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (name === "" || phone === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    // Save user data to localStorage
    let user = {
        fullname: name,
        phone: phone,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    // Redirect to login page
    window.location.href = "login.html";
}
