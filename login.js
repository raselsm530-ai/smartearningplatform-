import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login Successful");
    window.location.href = "home.html";
  } catch (err) {
    alert("❌ " + err.message);
  }
});