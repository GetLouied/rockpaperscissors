
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