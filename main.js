// Choices of the game.
const choices = ['rock', 'paper', 'scissors'];

let round = 0;

let result;

let winner;

function roundCounter(){
        round += 1;
}

const btn = document.querySelectorAll('#btn');
btn.forEach((btn) => {
        btn.addEventListener('click', () => {
                console.log();
        });
});

document.getElementById('whoWon').addEventListener('click', function() {
    document.getElementById('returnStatement').textContent = "";
})

function computerChoice() {
    Math.random(Math.floor() * choices.length);
        return console.log(random, choices[random]);
        
}

function whoWon() {
        playGame();
                return winner;
}

function playGame(computerChoice) {
        if (btn === computerChoice) {
        return console.log('This is a tie.');
    } else if (btn === 'rock' && computerChoice === 'scissors') {
        return console.log('This is a win!');
    } else if (btn === 'paper' && computerChoice === 'rock') {
        return console.log('This is a win!');
    } else if (btn === 'scissors' && computerChoice === 'paper') {
        return console.log('This is a win!');
    } else {
        return console.log('The computer wins!');
    }
}