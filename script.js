let score = 0;
let time = 60;
let level = 1;

let gameInterval;
let timerInterval;

let gameArea = document.getElementById("gameArea");
let scoreEl = document.getElementById("score");
let timerEl = document.getElementById("timer");
let statusEl = document.getElementById("status");

function startGame() {
    score = 0;
    time = 60;
    level = 1;

    updateUI();

    gameInterval = setInterval(createGem, getSpeed());
    timerInterval = setInterval(updateTimer, 1000);
}

function updateUI() {
    scoreEl.innerText = "Score: " + score;
    timerEl.innerText = "Time: " + time;
    statusEl.innerText = "Level: " + level;
    statusEl.style.color = "black";
}

function getSpeed() {
    if (level === 1) return 800;
    if (level === 2) return 500;
    if (level === 3) return 300;
}

function createGem() {
    let gem = document.createElement("div");
    gem.innerText = "💎";
    gem.classList.add("gem");

    let x = Math.random() * 350;
    let y = Math.random() * 350;

    gem.style.left = x + "px";
    gem.style.top = y + "px";

    gem.onclick = function () {
        score++;
        updateUI();
        gem.remove();

        // Level up logic
        if (score === 10) {
            level = 2;
            restartSpeed();
        }
        if (score === 20) {
            level = 3;
            restartSpeed();
        }
    };

    gameArea.appendChild(gem);

    setTimeout(() => {
        gem.remove();
    }, getSpeed());
}

function restartSpeed() {
    clearInterval(gameInterval);
    gameInterval = setInterval(createGem, getSpeed());
}

function updateTimer() {
    time--;
    timerEl.innerText = "Time: " + time;

    if (time <= 0) {
        clearInterval(timerInterval);
        clearInterval(gameInterval);
        endGame();
    }
}

function endGame() {
    if (score >= 10) {
        statusEl.innerText = "YOU WIN 🎉";
        statusEl.style.color = "blue";
    } else {
        statusEl.innerText = "YOU LOSE 😢";
        statusEl.style.color = "black";
    }
}
