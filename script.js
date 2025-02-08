// Visit Counter
function updateVisitCount() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("visitCount", visits);
    document.getElementById("visitCount").innerText = visits;
}

// Show Feedback Popup
function showFeedbackPopup() {
    setTimeout(() => {
        document.getElementById("feedbackBox").style.display = "block";
    }, 3000);
}

// Submit Feedback
function submitFeedback() {
    let feedback = document.getElementById("feedbackText").value;
    if (feedback.trim() !== "") {
        let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbackList.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
        alert("Thank you for your feedback!");
        document.getElementById("feedbackBox").style.display = "none";
    }
}

// Initialize
updateVisitCount();
showFeedbackPopup();