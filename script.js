let humanScore = 0;
let computerScore = 0;



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

// Check human choice
function userChoiceCheck() {
    try {
        if (getUserchoice() === 'rock' || getUserchoice() === 'paper' || getUserchoice() === 'scissors') {
            return true;
        } else {
            console.log("please enter rock, paper, or scissors")
            return false
        }
    }
    catch(err) {
        console.log("Error: ", err);
        return false;
    }
}