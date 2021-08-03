"use strict";
// Selecting elements
const player1Score = document.getElementById("p1Score");
const player2Score = document.getElementById("p2Score");
const WinginScoreDisplay = document.getElementById("wScore");
const inputScore = document.getElementById("inputScore");
const player1Btn = document.getElementById("p1Btn");
const player2Btn = document.getElementById("p2Btn");
const resetBtn = document.getElementById("reset");
let p1Ini = 0;
let p2Ini = 0;
let winningIni = 5;
let gameOver = false;

function winner(oldScore, winningScore) {
  if (oldScore >= winningScore) {
    gameOver = true;
    player1Btn.disabled = true;
    player2Btn.disabled = true;
    p1Ini === winningIni
      ? player1Score.classList.add("winner")
      : player2Score.classList.add("winner");
  }
}

function reset() {
  p1Ini = 0;
  p2Ini = 0;
  gameOver = false;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Btn.disabled = false;
  player2Btn.disabled = false;
  player1Score.classList.remove("winner");
  player2Score.classList.remove("winner");
}

player1Btn.addEventListener("click", () => {
  if (!gameOver) {
    p1Ini++;
    player1Score.textContent = p1Ini;
    winner(p1Ini, winningIni);
  }
});
player2Btn.addEventListener("click", () => {
  if (!gameOver) {
    p2Ini++;
    player2Score.textContent = p2Ini;
    winner(p2Ini, winningIni);
  }
});
inputScore.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    WinginScoreDisplay.textContent = inputScore.value;
    winningIni = Number(inputScore.value);
    inputScore.value = "";
    reset();
  }
});

resetBtn.addEventListener("click", reset);
