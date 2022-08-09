// Choices of the game.
const choices = ['rock', 'paper', 'scissors'];
const SELECTIONS = [
{
        name: 'rock',
        beats: 'scissors'
},
{
        name: 'paper',
        beats: 'rock'
},{
        name: 'scissors',
        beats: 'paper'
},

]


let round = 0;
let playerScore = 0;
let computerScore = 0;

let result;

let winner;

function roundCounter(){
        round += 1;
}

const btn = document.querySelectorAll('[data-selection]');
btn.forEach((btn) => {
        btn.addEventListener('click', handleClick, e => {
        playGame();
        });
});

function handleClick() {
        playGame(this.value)
}

document.getElementById('whoWon').addEventListener('click', handleClick, function() {
    document.getElementById('returnStatement').textContent = "";
})

function playerChoice(btn) {
        if (playerChoice == 'rock' && computerChoice == 'scissors') {
                console.log('You won!');
        }
        if (playerChoice == 'paper' && computerChoice == 'rock') {
                console.log('You won!');
        }
        if (playerChoice == 'scissors' && computerChoice == 'paper') {
                console.log('You won!');
        }
        if (playerChoice == computerChoice) {
                console.log('This is a tie.');
};
};

function computerChoice() {
    Math.random(Math.floor() * choices.length);
        if (choices == 0) {
                return 'rock';
        }
        else if (choices == 1) {
                return 'paper';
        }
        else if (choices == 2) {
                return 'scissors';
        }
        if (playerChoice == 'scissors' && computerChoice == 'rock') {
                console.log('Computer wins!');
        }
        if (playerChoice == 'rock' && computerChoice == 'paper') {
                console.log('Computer wins!');
        }
        if (playerChoice == 'paper' && computerChoice == 'scissors') {
                console.log('Computer wins!');
        }
        if (playerChoice == computerChoice) {
                console.log('This is a tie.');
        }
};

function playRound(){
        for (let round = 0; round < 5; round++) {
                playerChoice();
                computerChoice();
        }
}

function playGame() {
        playRound();
};

function whoWon() {
        playGame();
                return winner;
};

