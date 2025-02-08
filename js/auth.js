// js/auth.js
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default submission
      
      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      
      console.log("Login attempt:", username, password);
      
      if (username === "deca" && password === "deca") {
        // On successful login, redirect to dashboard.html
        window.location.href = "dashboard.html";
      } else {
        errorMsg.textContent = "Invalid username or password";
        console.log("Invalid credentials");
      }
    });
  }
});
