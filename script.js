let count = 0;

let countEl = document.getElementById("count");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");
let resetBtn = document.getElementById("reset");

// Function to update color based on count
function updateColor() {
    if (count >= 10) {
        countEl.style.color = "green";
    } 
    else if (count < 0) {
        countEl.style.color = "red";
    } 
    else {
        countEl.style.color = "black";
    }
}

// Increase button
incBtn.onclick = function() {
    count++;
    countEl.innerText = count;
    updateColor();
};

// Decrease button (prevent negative)
decBtn.onclick = function() {
    if (count > 0) {
        count--;
        countEl.innerText = count;
        updateColor();
    }
};

// Reset button
resetBtn.onclick = function() {
    count = 0;
    countEl.innerText = count;
    updateColor();
};
