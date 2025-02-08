// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Login form functionality
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Check credentials (case insensitive username)
    if(username === "amadeo bonde" && password === "gameday") {
      // Hide login container on successful login
      document.getElementById("login-container").style.display = "none";
    } else {
      errorMsg.textContent = "Invalid username or password";
    }
  });
});
