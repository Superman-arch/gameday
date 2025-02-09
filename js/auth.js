// js/auth.js

(function() {
  // Global variable for rewards points (starting at 1000)
  let currentPoints = 1000;

  /* -------------------------------------
     Rewards Functions
  ------------------------------------- */
  /**
   * Updates the points display (if present) with the current points.
   */
  function updatePointsDisplay() {
    const pointsElement = document.getElementById('pointsValue');
    if (pointsElement) {
      pointsElement.innerText = currentPoints;
    }
  }

  /**
   * Adds 100 points to the current total, updates the display,
   * and notifies the user.
   */
  function earnPoints() {
    currentPoints += 100;
    updatePointsDisplay();
    alert('You earned 100 points!');
    console.log('Points increased. Current points:', currentPoints);
  }

  /**
   * Handles reward redemption by reading the cost and reward name from
   * the button's data attributes; if sufficient points exist,
   * deducts the cost and confirms the redemption.
   * @param {Event} event - The click event from a redeem button.
   */
  function redeemReward(event) {
    const button = event.currentTarget;
    const cost = parseInt(button.getAttribute('data-cost'), 10);
    const rewardName = button.getAttribute('data-reward');

    if (currentPoints >= cost) {
      currentPoints -= cost;
      updatePointsDisplay();
      alert('Congratulations! You have redeemed: ' + rewardName);
      console.log(`Redeemed "${rewardName}". Points remaining:`, currentPoints);
    } else {
      alert('Insufficient points to redeem ' + rewardName + '.');
      console.log('Redemption failed for:', rewardName);
    }
  }

  /* -------------------------------------
     Login Authentication Functions
  ------------------------------------- */
  /**
   * Validates login credentials when the form is submitted.
   * Redirects to home.html if credentials are correct.
   * @param {Event} event - The form submission event.
   */
  function validateLogin(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');

    // Sanitize and retrieve input values
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    // Check against deca-oriented credentials
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
   * enabling or disabling the SIGN IN button accordingly.
   */
  function checkFormInputs() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInBtn = document.getElementById('signInBtn');

    if (emailInput && passwordInput && signInBtn) {
      signInBtn.disabled = (emailInput.value.trim() === '' || passwordInput.value.trim() === '');
    }
  }

  /* -------------------------------------
     Additional Interaction Functions
  ------------------------------------- */
  /**
   * Tracks a day when the "Track Your Day" button is clicked.
   */
  function trackDay() {
    alert('Your day has been tracked!');
    console.log('Track day button clicked.');
  }

  /* -------------------------------------
     Event Listener Attachments
  ------------------------------------- */
  // Login Form (for index.html)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', validateLogin);

    // Enable SIGN IN button only when both email and password have input
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    if (emailInput && passwordInput) {
      emailInput.addEventListener('input', checkFormInputs);
      passwordInput.addEventListener('input', checkFormInputs);
    }
  }

  // Track Day Button (for home.html)
  const trackDaysBtn = document.getElementById('trackDaysBtn');
  if (trackDaysBtn) {
    trackDaysBtn.addEventListener('click', trackDay);
  }

  // Earn Points Button (for rewards.html)
  const earnPointsBtn = document.getElementById('earnPointsBtn');
  if (earnPointsBtn) {
    earnPointsBtn.addEventListener('click', earnPoints);
    updatePointsDisplay(); // Initialize the points display when the page loads
  }

  // Reward Redemption Buttons (for rewards.html)
  const redeemButtons = document.querySelectorAll('.redeem-btn');
  if (redeemButtons.length > 0) {
    redeemButtons.forEach(button => {
      button.addEventListener('click', redeemReward);
    });
  }

  // Additional event listeners can be added here for other pages or interactions
})();
