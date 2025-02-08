document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Check credentials (username is case-insensitive)
  if (username === "amadeo bonde" && password === "gameday") {
    // Redirect to dashboard on successful login
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Invalid username or password";
  }
});
