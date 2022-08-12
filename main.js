// Choices of the game.
const choices = ['rock', 'paper', 'scissors'];

console.log(choices)
console.log(choices[0])
console.log(choices[1])
console.log(choices[2])

const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');



btn0.addEventListener('click', playerChoice, computerChoice, () => {
        (choices[0]);
})

btn1.addEventListener('click', playerChoice, computerChoice, () => {
        console.log(choices[1]);
})

btn2.addEventListener('click', playerChoice, computerChoice, () => {
        (choices[2]);
})

let round = 0;
let playerScore = 0;
let computerScore = 0;

let winner;

function roundCounter(){

        round += 1;
}


 function playerChoice(computerChoice) {
        
        if (playerChoice == choices[0] && computerChoice == choices[1]) {
                return console.log('You won!');
        }
        if (playerChoice === choices[1] && computerChoice === choices[0]) {
                return console.log('You won!');
        }
        if (playerChoice == choices[2] && computerChoice === choices[1]) {
                return console.log('You won!');
        }
        if (playerChoice === computerChoice) {
                return console.log('This is a tie.');
};
};

function computerChoice() {
    Math.random(Math.floor() * choices.length);
        if (choices[0]) {
                return console.log('rock');
        }
        else if (choices[1]) {
                return console.log('paper');
        }
        else if (choices[2]) {
                return console.log('scissors');
        }
        if (playerChoice === choices[2] && computerChoice === choices[0]) {
                return console.log('Computer wins!');
        }
        if (playerChoice === choices[0] && computerChoice === choices[1]) {
                return console.log('Computer wins!');
        }
        if (playerChoice === choices[1] && computerChoice === choices[2]) {
                return console.log('Computer wins!');
        }
        if (playerChoice === computerChoice) {
                return console.log('This is a tie.');
        }
};

function playGame(playerChoice, computerChoice) {
        return
}

playGame;

