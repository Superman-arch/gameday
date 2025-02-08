document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission (and page reload)
      
      // Convert username to lowercase for case-insensitive checking
      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("error-msg");

      // For debugging: log the attempt
      console.log("Login attempt:", username, password);

      // Check if both username and password are "deca"
      if (username === "deca" && password === "deca") {
        // Credentials are correct, hide the login overlay
        document.getElementById("login-container").style.display = "none";
      } else {
        // Otherwise, show an error message
        errorMsg.textContent = "Invalid username or password";
        console.log("Invalid credentials");
      }
    });
  }
});
