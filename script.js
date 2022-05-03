//Select all required elements
const selectBox = document.querySelector(".select-box"),
selectUnicornBtn = selectBox.querySelector(".playerunicorn"),
selectMermaidBtn = selectBox.querySelector(".playermermaid"),
gameBoard = document.querySelector(".game-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = () => {
    //add onclick attribute in all available section spans
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
    //once window loads
    selectUnicornBtn.onclick = () => {
        selectBox.classList.add("hide"); //hide the select box on unicorn player button click
        gameBoard.classList.add("show"); //show the gameboard on unicorn player button click
    }
    selectMermaidBtn.onclick = () => {
        selectBox.classList.add("hide"); //hide the select box on mermaid player button click
        gameBoard.classList.add("show"); //show the gameboard on mermaid player button click
        players.setAttribute("class", "players active"); //add three class names in players element
    }
}

let playerunicornIcon = document.createElement("img");
playerunicornIcon.src = "icons8-unicorn-50.png";

let playermermaidIcon = document.createElement("img");
playermermaidIcon.src = "Images\icons8-mermaid-24.png";


function clickedBox(element) {
    if(players.classList.contains("player")) {
        element.innerHTML = `${playerunicornIcon}"/>`; //adding unicorn icon
    } else {
        element.innerHTML = `<img = "${playermermaidIcon}"/>`//adding mermaid icon
    }
}