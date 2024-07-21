playGame()

// Get randomly generated choice of rock, paper, or scissors.
function getComputerChoice () {
    const randomNumber = () => {
        return Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }

    switch (randomNumber()) {
        case 1:
            return "rock";
            break;

        case 2: 
            return "paper";
            break;

        case 3:
            return "scissors";
            break;
    }
}

// Get the human choice for rock, paper, scissors.
function getUserchoice() {
    return prompt("Rock, Paper, or Scissors", "").toLowerCase()
}

// // Check human choice
// function userChoiceCheck() {
//     try {
//         if (getUserchoice() === 'rock' || getUserchoice() === 'paper' || getUserchoice() === 'scissors') {
//             return true;
//         } else {
//             return false
//         }
//     }
//     catch(err) {
//         console.log("Error: ", err);
//         return false;
//     }
// }

// Play a round of rock paper scissors
function playRound(userChoice, computerChoice) {

    // if the user chose rock
    if (userChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('Tie! No one wins');
            return "none"
        } else if (computerChoice === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return "computer"
        } else {
            console.log('You Win! Rock beats Scissors')
            return "user"
        }
    }

    // if the user chose paper
    if (userChoice === 'paper') {
        if (computerChoice === 'paper') {
            console.log('Tie! No one wins');
            return "none"
        } else if (computerChoice === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return "computer"
        } else {
            console.log('You Win! Paper beats Rock')
            return "user"
        }
    }

    // if the user chose scissors
    if (userChoice === 'scissors') {
        if (computerChoice === 'scissors') {
            console.log('Tie! No one wins');
            return "none"
        } else if (computerChoice === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return "computer"
        } else {
            console.log('You Win! Scissors beats Paper')
            return "user"
        }
    }

}

// Play a full game (5 rounds of the game)
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userSelection = getUserchoice()
        const computerSelection = getComputerChoice();
        let winner = playRound(userSelection, computerSelection);

        if (winner === 'computer') {
            computerScore += 1;
        } else if (winner === 'user') {
            humanScore += 1;
        }
    }

    console.log(`Your final score is ${humanScore} and the computer's final score is ${computerScore}`)

}