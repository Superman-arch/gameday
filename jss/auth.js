// js/auth.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
  
  // Retrieve and process credentials
  var username = document.getElementById("username").value.trim().toLowerCase();
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("errorMsg");
  
  console.log("Login attempt:", username, password);
  
  // Check if credentials are correct (both username and password should be "deca")
  if (username === "deca" && password === "deca") {
    // Redirect to the dashboard if login is successful
    window.location.href = "dashboard.html";
  } else {
    // Display error message if credentials are invalid
    errorMsg.textContent = "Invalid username or password";
    console.log("Invalid credentials");
  }
});
