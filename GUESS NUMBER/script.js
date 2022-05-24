'use strict';
// SETTING THE HIDDEN NUMBER
let secretnumber = Math.trunc(Math.random() * 20) + 1;
// SETTING SCORE
let score = 20;
let highscore = 0;
// ADDING THE FUNCTIONALITY TO THE CHECK BUTTON
function displayContnt(selector, message) {
  document.querySelector(selector).textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // No input
  if (!guess) {
    //document.querySelector('.message').textContent = '🚫 No Number!';
    displayContnt('.message', '🚫 No Number!');
  }
  // When player wins
  else if (guess === secretnumber) {
    displayContnt('.message', '🎉 Correct Answer');
    displayContnt('.number', secretnumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      displayContnt('.highscore', highscore);
    }
    // WHEN GUESS HIGH/LOW
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayContnt(
        '.message',
        guess > secretnumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      displayContnt('.score', score);
    } else {
      displayContnt('.message', '✴️ You Lost the Game');
      displayContnt('.score', 0);
    }
  }
});
// ADDING THE FUNCTIONALITY TO THE AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  // SETTING THE HIDDEN NUMBER
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
