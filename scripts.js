let points = 0;

// Event listeners for navigation buttons
document.getElementById("achievementsBtn").addEventListener("click", function() {
    navigateToPage("achievementsPage");
});

document.getElementById("pointsBtn").addEventListener("click", function() {
    navigateToPage("pointsRewardsPage");
});

document.getElementById("feedbackBtn").addEventListener("click", function() {
    navigateToPage("feedbackPage");
});

document.getElementById("socialFeedBtn").addEventListener("click", function() {
    navigateToPage("socialFeedPage");
});

// Function to navigate between pages
function navigateToPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

// Function to earn points
function earnPoints() {
    points += 10;
    document.getElementById("pointsCount").textContent = points;
    document.getElementById("progressBar").style.width = `${(points / 100) * 100}%`;
    alert("Challenge completed! You earned 10 points!");
}

// Function to redeem points
function redeemPoints() {
    if (points >= 50) {
        points -= 50;
        document.getElementById("pointsCount").textContent = points;
        alert("You redeemed 50 points!");
    } else {
        alert("Not enough points to redeem.");
    }
}

// Function to submit feedback
function submitFeedback() {
    let feedback = document.getElementById("feedbackInput").value;
    if (feedback) {
        alert("Feedback submitted! Thank you!");
        document.getElementById("feedbackInput").value = "";
    } else {
        alert("Please enter feedback.");
    }
}

// Initial page load
document.addEventListener("DOMContentLoaded", function() {
    navigateToPage("achievementsPage");
});
