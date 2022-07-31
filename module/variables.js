//Variables

export let GAME = {
    X_CLASS: 'x', //mermaid
    Y_CLASS: 'y', //unicorn
    turn: undefined,
    winner: null,
    selectedProfile: document.querySelectorAll(".img .id"),
    blockElements: document.querySelectorAll('[data-cell]'),
    boardElement: document.getElementById('play-area'),
    startBtn: document.getElementById("startBtn"),
    startWindow: document.querySelector(".start-game"),
    winEl: document.querySelector('.winner-msg'),
    drawEl: document.querySelector('.draw-msg'),
    winnerImg: document.querySelector(".winner-msg .winner"),
    restartBtn: document.getElementById("restartBtn"),
    drawBtn: document.getElementById("drawBtn")
}