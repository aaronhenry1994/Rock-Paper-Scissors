// Choices of the game.
const choices = ['rock', 'paper', 'scissors'];

function playGame() {
    for(let i = 0; i<=5; i++) {
        let playerChoice = enterUser;
        playRound(playerChoice, randomIndex);
    }
}

function playRound() {{
    // Setting up playerChoice vs randomIndex

    let playerChoice = prompt('Type rock, paper, or scissors.');

    if (playerChoice == randomIndex) {
        console.log(playerChoice);
        return ('This is a tie.');
    } else if (playerChoice === null) {
        console.log(playerChoice);
        return ('Maybe next time.');
    } else if (playerChoice === 'rock' && randomIndex === 'scisssors') {
        console.log(playerChoice);
        return ('Congratuations, you win!');
    } else if (playerChoice === 'paper' && randomIndex === 'rock') {
        console.log(playerChoice);
        return ('Congratulations, you win!');
    } else if (playerChoice === 'scissors' && randomIndex === 'paper') {
        console.log(playerChoice);
        return ('Congratulations, you win!');
    } else {
        console.log(playerChoice);
        return ('Sorry, the computer wins.');
}
}
}

function randomIndex() { Math.floor(Math.random() * choices.length);

// Get random Index
const item = choices[randomIndex];

return item;
}