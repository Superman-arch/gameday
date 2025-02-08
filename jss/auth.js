document.addEventListener("DOMContentLoaded", function() {
  // Show login overlay when the "Login" link is clicked.
  const loginLink = document.getElementById("login-link");
  if (loginLink) {
    loginLink.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("login-container").style.display = "flex";
    });
  }
  
  // Attach submit event to the login form.
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission (page reload)
      
      // Convert username to lowercase for case-insensitive checking.
      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("error-msg");
      
      console.log("Login attempt:", username, password);
      
      // Check if both username and password are "deca"
      if (username === "deca" && password === "deca") {
        // Hide the login overlay on success.
        document.getElementById("login-container").style.display = "none";
      } else {
        // Otherwise, show an error message.
        errorMsg.textContent = "Invalid username or password";
        console.log("Invalid credentials");
      }
    });
  }
});
