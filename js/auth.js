// File: js/auth.js
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      console.log("Login attempt:", email, password);
      if (email === "deca" && password === "deca") {
        // Redirect to the Home Screen (index.html)
        window.location.href = "index.html";
      } else {
        errorMsg.textContent = "Invalid username or password";
        console.log("Invalid credentials");
      }
    });
  }
});
