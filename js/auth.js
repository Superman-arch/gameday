// File: js/auth.js
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Retrieve and process credentials
      const email = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      
      console.log("Login attempt:", email, password);
      
      // Check credentials: email must equal "abonde421@gmail.com" and password "deca"
      if (email === "deca" && password === "deca") {
        // On successful login, redirect to home.html (dashboard)
        window.location.href = "home.html";
      } else {
        errorMsg.textContent = "Invalid username or password";
        console.log("Invalid credentials");
      }
    });
  }
});
