let selectedFlower = "";
let growthStage = 0; 

function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectFlower(emoji) {
    selectedFlower = emoji;
    nextScreen('screen-grow');
}

function handleGrowth() {
    const stageDisplay = document.getElementById('stage-display');
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('grow-status');
    const actionBtn = document.getElementById('action-btn');

    growthStage++;

    // Reset and trigger pop animation
    stageDisplay.classList.remove('grow-animation');
    void stageDisplay.offsetWidth; 
    stageDisplay.classList.add('grow-animation');

    if (growthStage === 1) {
        stageDisplay.innerText = "🌱";
        statusText.innerText = "Watering...";
        actionBtn.innerText = "GIVE WATER 💧";
        progressBar.style.width = "25%";
    } 
    else if (growthStage === 2) {
        stageDisplay.innerText = "🌿";
        statusText.innerText = "Adding Sun...";
        actionBtn.innerText = "ADD SUNLIGHT ☀️";
        progressBar.style.width = "50%";
    } 
    else if (growthStage === 3) {
        stageDisplay.innerText = "🪴";
        statusText.innerText = "Almost ready...";
        actionBtn.innerText = "GIVE LOVE ❤️";
        progressBar.style.width = "75%";
    } 
    else if (growthStage === 4) {
        stageDisplay.innerText = selectedFlower;
        statusText.innerText = "It Bloomed!";
        actionBtn.innerText = "PICK FLOWERS";
        progressBar.style.width = "100%";
        progressBar.style.backgroundColor = "#ff4d6d";
    } 
    else {
        const resultContainer = document.getElementById('bouquet-result');
        // Arrange flowers in a 2x2 grid bouquet style
        resultContainer.innerHTML = `${selectedFlower}${selectedFlower}<br>${selectedFlower}${selectedFlower}`;
        nextScreen('screen-final');
    }
}