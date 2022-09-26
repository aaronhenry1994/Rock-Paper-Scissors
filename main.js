// Game building blocks and logic
const choices = ['Rock', 'Paper', 'Scissors']

let currentRound = 0;

function playGame(playRound) {
  for (let i = 0; i < 5; i++);
  if (playerScore === 5) {
    return 'Congratuations, you won!'
  }
  if (computerScore === 5) {
    return 'Sorry, I win.'
  }
}

function showButton(playGame) {
  if (playerScore === 5) {
    return resetBtn = document.getElementById('resetBtn').hidden = false;
  }
  if (computerScore === 5) {
    return resetBtn = document.getElementById('resetBtn'). hidden = false;
  }
}

function computerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);

  const item = choices[randomIndex];

  return item;
}

const computerResult = computerChoice(choices);

function playRound(playerInput, computerResult) {
  if (playerInput === 'Rock' && computerResult === 'Scissors') {
    ++playerScore;
    return 'You win!';
  } if (playerInput === 'Paper' && computerResult === 'Rock') {
    ++playerScore;
    return 'You win!';
  } if (playerInput === 'Scissors' && computerResult === 'Paper') {
    ++playerScore;
    return 'You win!';
  } if (playerInput === 'Rock' && computerResult === 'Paper') {
    ++computerScore;
    return 'You lose!';
  } if (playerInput === 'Paper' && computerResult === 'Scissors') {
    ++computerScore;
    return 'You lose!';
  } if (playerInput === 'Scissors' && computerResult === 'Rock') {
    ++computerScore;
    return 'You lose!';
  }
  if (playerInput === computerResult) {
    return 'This is a tie, try again.'
  }
};

// UI
let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
let playerInput;

btns.forEach((button) => {
  button.addEventListener('click', (event) => {

    playerInput = button.textContent;

    let computerResult = computerChoice(choices);

    let result = playRound(playerInput, computerResult);

    ++currentRound;

    playGame(playRound);

    showButton(playGame);

    const playerScoreDisplay = document.getElementById('playerScore').textContent = 'Player Score: ' + playerScore + '';

    const computerScoreDisplay = document.getElementById('computerScore').textContent = 'Computer Score: ' + computerScore + '';

    const playerSelection = document.getElementById('playerChoice').textContent = 'You have chosen: ' + playerInput + '';

    const computerSelection = document.getElementById('computerChoice').textContent = 'The computer has chosen: ' + computerResult + '';

    const resultText = document.getElementById('resultText').textContent = 'Result: ' + result + '';

    const round = document.getElementById('round').textContent = 'Round: ' + currentRound + '';

  });
});