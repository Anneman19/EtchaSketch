document.querySelector("#startButton").addEventListener("click", () => {
    startGame();
});

function startGame() {
    gridSize = parseFloat(prompt("Enter grid size (2 - 100): "));
    if (isNaN(gridSize) || gridSize < 2 || gridSize > 1000) {
        alert("Please enter a valid number between 2 and 100!");
        return;
    }

    let mainBox = document.querySelector("#mainDiv");
    mainBox.innerHTML = "";

    let cols = Math.ceil(Math.sqrt(gridSize));
    let rows = cols;

    // let gridItemSize = `calc(100% / ${cols})`;
    // mainBox.style.gridTemplateColumns = `repeat(${cols}, ${gridItemSize})`;

    mainBox.style.setProperty("--cols", cols);

    for (let i = 1; i <= gridSize; i++) {
        
        let gridBox = document.createElement("div");
        gridBox.setAttribute("class", "gridBox");
        mainBox.appendChild(gridBox);
    }
}
// create random function for rgb values, 0-255 for each value, add to background thing below
// this is to test a commit
document.querySelector("#mainDiv").addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("gridBox")) {
        event.target.style["background-color"] = "black";
    }
});