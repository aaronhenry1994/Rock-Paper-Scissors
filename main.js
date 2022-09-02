// Game building blocks and logic
const choices = ['rock', 'paper', 'scissors']

function playerChoice(buttonClicked, choices) {
  
  
  return playerInput
}

function computerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);

  const item = choices[randomIndex];

  return item;
}

const computerResult = computerChoice(choices);

function playRound(playerChoice, computerResult) {
  if (playerChoice === 'rock' && computerResult === 'scissors') {
    return console.log('You win!');
  } if (playerChoice === 'paper' && computerResult === 'rock') {
    return console.log('You win!');
  } if (playerChoice === 'scissors' && computerResult === 'paper') {
    return console.log('You win!');
  } if (playerChoice === 'rock' && computerResult === 'paper') {
    return console.log('You lose!');
  } if (playerChoice === 'paper' && computerResult === 'scissors') {
    return console.log('You lose!');
  } if (playerChoice === 'scissors' && computerResult === 'rock') {
    return console.log('You lose!');
  }
}

// UI
const buttons = document.querySelectorAll('button');

function buttonClicked() {
  const playerSelection = document.getElementById('playerChoice').textContent = 'You have chosen ' + playerChoice + '';

  const computerSelection = document.getElementById('computerChoice').textContent = 'The computer has chosen ' + computerResult + '';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id.toString);
    buttonClicked();
    playRound();

  });
});



playRound();