// Game building blocks and logic
const choices = ['rock', 'paper', 'scissors']

function playGame(playRound) {
  let roundsPlayed = 0;
  for (let i = 0; i < 5; i++);
}

function computerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);

  const item = choices[randomIndex];

  return item;
}

const computerResult = computerChoice(choices);

function playRound(buttons, computerResult) {
  if (buttons === 'rock' && computerResult === 'scissors') {
    return console.log('You win!');
  } if (buttons === 'paper' && computerResult === 'rock') {
    return console.log('You win!');
  } if (buttons === 'scissors' && computerResult === 'paper') {
    return console.log('You win!');
  } if (buttons === 'rock' && computerResult === 'paper') {
    return console.log('You lose!');
  } if (buttons === 'paper' && computerResult === 'scissors') {
    return console.log('You lose!');
  } if (buttons === 'scissors' && computerResult === 'rock') {
    return console.log('You lose!');
  }
}

// UI
function updatePlayerScore(playRound) {
  let playerScore = 0;
  
}

function updateComputerScore(playRound) {

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    let playerInput = button.id;

    let computerResult = computerChoice(choices);

    const playerSelection = document.getElementById('playerChoice').textContent = 'You have chosen: ' + playerInput + '';

    const computerSelection = document.getElementById('computerChoice').textContent = 'The computer has chosen: ' + computerResult + '';

    const playerScore = document.getElementById('playerScore').textContent = 'Player Score: 0' + updatePlayerScore + '';

    const computerScore = document.getElementById('computerScore').textContent = 'Computer Score: 0' + updateComputerScore + '';

    playGame(playRound);

  });
});

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const sciBtn = document.getElementById('scissors');

playGame(playRound);