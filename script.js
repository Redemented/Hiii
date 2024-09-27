function showSecondScreen() {
    // Hide the first screen and show the second screen
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'flex';
}

function showFinalScreen() {
    // Hide the second screen and show the final screen
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'flex';
}
