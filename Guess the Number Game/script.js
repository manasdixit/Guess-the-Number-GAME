'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = ;
// document.querySelector('.score').textContent = ;
// document.querySelector('.guess').value = 99;
// document.querySelector('.highscore').textContent = ;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log('Secret Number: ' + secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score === 0) {
    document.querySelector('.message').textContent =
      'Sorry, you are out of moves !!';
    document.querySelector('.score').textContent = 0;
  } else {
    if (!guess) {
      document.querySelector('.message').textContent = 'Please Enter a Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Guess !!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'olive';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Guessed too high !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Guessed too low !!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#2b2222';
  document.querySelector('.number').style.width = '15rem';
});
