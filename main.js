// Choices of the game.
const choices = ['rock', 'paper', 'scissors']

function playGame() {
    for(let i = 0; i<=5; i++) {
        playRound()
    }
}
function playRound(computerChoice) {
    // Setting up playerChoice vs computerChoice

    let playerChoice = prompt('Type rock, paper, or scissors.');
    if (playerChoice === computerChoice) {
        return console.log('This is a tie.');
    } else if (playerChoice === null) {
        return console.log('Maybe next time.');
    } else if (playerChoice === 'rock' && computerChoice === 'scisssors') {
        return console.log('Congratuations, you win!');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return console.log('Congratulations, you win!.');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return console.log('Congratulations, you win!');
    } else {
        return console.log('Sorry, the computer wins.')
}
}

function computerChoice() {
    function getRandomChoice() {
        // Gives randomc index value
        const randomIndex = Math.floor(Math.random() * choices.length);

        // Get random Index
        const item = choices[randomIndex];

        return item;
    }
}