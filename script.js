let humanScore = 0;
let computerScore = 0;


if(localStorage.getItem('humanScore')) {
  humanScore = parseInt(localStorage.getItem('humanScore'));
}
if(localStorage.getItem('computerScore')) {
  computerScore = parseInt(localStorage.getItem('computerScore'));
}
updateScoreboard();


document.getElementById('rockBtn').addEventListener('click', function() {
  playRound('rock');
});
document.getElementById('paperBtn').addEventListener('click', function() {
  playRound('paper');
});
document.getElementById('scissorsBtn').addEventListener('click', function() {
  playRound('scissors');
});


document.querySelector('.reset').addEventListener('click', resetScores);

function playRound(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = computerTurn(); 

  
  if (playerChoice === computerChoice) {
    showResultMessage("It's a tie!");
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    showResultMessage("You win!");
  } else {
    computerScore++;
    showResultMessage("Computer wins!");
  }

 
  document.getElementById('rockBtn').style.display = 'none';
  document.getElementById('paperBtn').style.display = 'none';
  document.getElementById('scissorsBtn').style.display = 'none';


  updateScoreboard();
  localStorage.setItem('humanScore', humanScore);
  localStorage.setItem('computerScore', computerScore);
}

function updateScoreboard() {
  document.getElementById('humanScore').textContent = humanScore;
  document.getElementById('computerScore').textContent = computerScore;
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
  updateScoreboard();
  localStorage.setItem('humanScore', humanScore);
  localStorage.setItem('computerScore', computerScore);

 
  document.getElementById('rockBtn').style.display = 'inline-block';
  document.getElementById('paperBtn').style.display = 'inline-block';
  document.getElementById('scissorsBtn').style.display = 'inline-block';
}

function showRules() {
  document.getElementById('rulesPopup').style.display = 'block';
}

function hideRules() {
  document.getElementById('rulesPopup').style.display = 'none';
}

function showResultMessage(message) {
  document.getElementById('resultMessage').textContent = message;
}

function computerTurn() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}