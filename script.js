let count = 0;

let gemsEl = document.getElementById("gems");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");
let resetBtn = document.getElementById("reset");

function updateGems() {
    let gems = "";

    for (let i = 0; i < count; i++) {
        gems += "💎 ";
    }

    gemsEl.innerText = gems || "No gems collected";

    // color logic
    if (count >= 10) {
        gemsEl.style.color = "brown";
    } else {
        gemsEl.style.color = "red";
    }
}

incBtn.onclick = function() {
    count++;
    updateGems();
};

decBtn.onclick = function() {
    if (count > 0) {
        count--;
        updateGems();
    }
};

resetBtn.onclick = function() {
    count = 0;
    updateGems();
};

// initial render
updateGems();
