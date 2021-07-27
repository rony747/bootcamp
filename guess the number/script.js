'use strict';

const message = document.querySelector('.message');
const playAgain = document.querySelector('.again');
const check = document.querySelector('.check');
const scoreDiv = document.querySelector('.score');
const numberDiv = document.querySelector('.number');
let playTry = 0;
let score = 0;
let number = 5;
let randomNumber = Math.trunc(Math.random() * number) + 1;
console.log(randomNumber);
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Please input a number';
  } else if (guess === randomNumber) {
    playTry++;
    score++;
    scoreDiv.textContent = score;
    message.textContent = 'Correct';
    clearField();
    numberDiv.textContent = guess;
    document.querySelector('body').style.background = 'green';
    numberDiv.style.width = '200px';
  } else if (guess !== randomNumber) {
    playTry++;
    if (guess < randomNumber) {
      message.textContent = 'Number too low';
    } else {
      message.textContent = 'Number too high';
    }
    clearField();
  }

  if (playTry >= number) {
    playAgain.classList.add('shown');
    document.querySelector('body').style.background = 'red';
    message.textContent = 'Game over';
  }
});
playAgain.addEventListener('click', reset);

function clearField() {
  randomNumber = Math.trunc(Math.random() * number) + 1;

  scoreDiv.textContent = score;
  numberDiv.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
}

function reset() {
  randomNumber = Math.trunc(Math.random() * number) + 1;
  score = 0;
  playTry = 1;
  message.textContent = 'Start guessing';
  scoreDiv.textContent = 0;
  numberDiv.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  playAgain.classList.remove('shown');
}
