document.addEventListener('DOMContentLoaded', function () {
    // Retrieve scores from localStorage
    const cstScores = JSON.parse(localStorage.getItem('cstScores')) || [0, 0, 0, 0, 0, 0];
    const maxCstScores = JSON.parse(localStorage.getItem('maxCstScores')) || [0, 0, 0, 0, 0, 0];

    // Update the DOM
    document.getElementById("family-and-community-score").textContent = formatScore(cstScores[0], maxCstScores[0]);
    document.getElementById("rights-and-responsibilities-score").textContent = formatScore(cstScores[1], maxCstScores[1]);
    document.getElementById("protection-for-the-poor-score").textContent = formatScore(cstScores[2], maxCstScores[2]);
    document.getElementById("solidarity-score").textContent = formatScore(cstScores[3], maxCstScores[3]);
    document.getElementById("care-for-creation-score").textContent = formatScore(cstScores[4], maxCstScores[4]);
    document.getElementById("workers-rights-score").textContent = formatScore(cstScores[5], maxCstScores[5]);
});

// Helper function to get percentage
function formatScore(score, max) {
    if (max === 0) return "N/A";
    return (score / max * 100).toFixed(1) + "%";
}