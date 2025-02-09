// js/auth.js

(function() {
  // Global variable for rewards points (default: 1000)
  let currentPoints = 1000;

  /**
   * Updates the points display on the Rewards page.
   */
  function updatePointsDisplay() {
    const pointsElement = document.getElementById('pointsValue');
    if (pointsElement) {
      pointsElement.innerText = currentPoints;
    }
  }

  /**
   * Validates login credentials when the form is submitted.
   * On success, redirects to home.html; otherwise, displays an error message.
   * @param {Event} event - The form submission event.
   */
  function validateLogin(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');

    // Sanitize and retrieve input values
    let email = emailInput.value.trim().toLowerCase();
    let password = passwordInput.value;

    // Validate credentials against expected values
    if (email === 'deca@gmail.com' && password === 'deca') {
      // Successful login; redirect to Home (Dashboard) screen
      window.location.href = 'home.html';
    } else {
      // Display error message for incorrect credentials
      errorMsg.textContent = 'Invalid email or password. Please try again.';
      console.log('Login failed: invalid credentials.');
    }
  }

  /**
   * Checks if both email and password fields have values,
   * enabling or disabling the sign‑in button accordingly.
   */
  function checkFormInputs() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInBtn = document.getElementById('signInBtn');

    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      signInBtn.disabled = false;
    } else {
      signInBtn.disabled = true;
    }
  }

  /**
   * Adds 100 points to the current total, updates the display,
   * and notifies the user that points have been earned.
   */
  function earnPoints() {
    currentPoints += 100;
    updatePointsDisplay();
    alert('You earned 100 points!');
    console.log('Points earned: currentPoints = ' + currentPoints);
  }

  /**
   * Handles redemption of rewards. Checks if the user has enough points;
   * if so, deducts the cost and confirms the redemption; otherwise, alerts
   * the user of insufficient points.
   * @param {Event} event - The click event from the redeem button.
   */
  function redeemReward(event) {
    const button = event.currentTarget;
    const cost = parseInt(button.getAttribute('data-cost'), 10);
    const rewardName = button.getAttribute('data-reward');

    if (currentPoints >= cost) {
      currentPoints -= cost;
      updatePointsDisplay();
      alert('Congratulations! You have redeemed: ' + rewardName);
      console.log('Redeemed reward: ' + rewardName + '. Points left: ' + currentPoints);
    } else {
      alert('Insufficient points to redeem ' + rewardName + '.');
      console.log('Redemption failed: insufficient points for ' + rewardName);
    }
  }

  // --- Login Form Event Listeners ---
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    // Listen for form submission to validate credentials
    loginForm.addEventListener('submit', validateLogin);

    // Listen for input changes to enable the SIGN IN button
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    if (emailInput && passwordInput) {
      emailInput.addEventListener('input', checkFormInputs);
      passwordInput.addEventListener('input', checkFormInputs);
    }
  }

  // --- Rewards Page Event Listeners ---
  const earnPointsBtn = document.getElementById('earnPointsBtn');
  if (earnPointsBtn) {
    earnPointsBtn.addEventListener('click', earnPoints);
    // Initialize the points display on page load
    updatePointsDisplay();
  }

  // Attach event listeners to all redeem buttons on the rewards page
  const redeemButtons = document.querySelectorAll('.redeem-btn');
  if (redeemButtons.length > 0) {
    redeemButtons.forEach(button => {
      button.addEventListener('click', redeemReward);
    });
  }

  // Additional debugging or navigation event listeners can be added here if needed
})();
