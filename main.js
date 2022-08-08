// Choices of the game.
const choices = ['rock', 'paper', 'scissors'];

let round = 0;
let playerScore = 0;
let computerScore = 0;

let result;

let winner;

function roundCounter(){
        round += 1;
}

const btn = document.querySelectorAll('#btn');
btn.forEach((btn) => {
        btn.addEventListener('click', handleClick, () => {
                playGame();
        });
});

function handleClick() {
        playGame(this.textContent)
}

document.getElementById('whoWon').addEventListener('click', handleClick, function() {
    document.getElementById('returnStatement').textContent = "";
})

function computerChoice() {
    Math.random(Math.floor() * choices.length);
        if (choices == 1) {
                return 'rock';
        }
        else if (choices == 2) {
                return 'paper';
        }
        else if (choices == 3) {
                return 'scissors';
        };
};

function whoWon() {
        playGame();
                return winner;
}


function playGame(handleClick, computerChoice) {
        if (btn === computerChoice) {
                return console.log("This is a tie!")
        }
        if (btn === 'rock' && computerChoice === 'scissors') {
        return console.log('This is a win!');
    } else {
        if (computerChoice === 'paper') {
                return console.log('The computer wins!');
        }
    } if (btn === 'paper' && computerChoice === 'rock') {
        return console.log('This is a win!');
    } else {
        if (computerChoice === 'scissors') {
                return console.log('The computer wins!');
        }
    } if (btn === 'scissors' && computerChoice === 'paper') {
        return console.log('This is a win!');
    } else {
        if (computerChoice === 'rock') {
                return console.log('The computer wins!');
        }
    }
};