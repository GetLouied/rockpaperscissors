document.addEventListener('DOMContentLoaded', (event) => {
    /* 
    To Do:
    - Style Header
    - Style Buttons to play game
    - Style Display Stats
    - Style Reset Button
    - Style Footer


    */
    
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;
    let gameOver = false;

    // Get the computer's choice
    function getComputerChoice() {
        const randomChoice = Math.floor(Math.random() * 3) + 1;
    
        switch (randomChoice) {
            case 1: 
                console.log("The computer chose rock.");
                return "rock";
            case 2: 
                console.log("The computer chose paper.");
                return "paper";
            case 3: 
                console.log("The computer chose scissors.");
                return "scissors";
            default:
                console.log(`Unexepected result: ${randomChoice}`)
        }
    }

    // Play round and return winner
    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "none";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "user";
        } else if (
            (computerChoice === 'rock' && userChoice === 'scissors') ||
            (computerChoice === 'paper' && userChoice === 'rock') ||
            (computerChoice === 'scissors' && userChoice === 'paper')
        ) {
            return "computer";
        }
    }

    // Update Game Statistics
    function updateStats(winner) {
        if (gameOver) return; 

        switch(winner) {

            case "user":
                userWins++;
                break;

            case "computer":
                computerWins++;
                break;

            case "none":
                ties++;
                break;
        }

        updateDisplay(userWins, computerWins, ties);
    }

    // Updating statistical display
    function updateDisplay(userWins, computerWins, ties) {
        document.getElementById("userStat").textContent = userWins;
        document.getElementById("computerStat").textContent = computerWins;
        document.getElementById("tiesStat").textContent = ties;

        if (userWins === 0 && computerWins === 0 && ties === 0) {
            document.getElementById("resultDisplay").textContent = "No Games Played!";
        } else if (ties > userWins && ties > computerWins) {
            document.getElementById("resultDisplay").textContent = "No one is winning yet!";
        } else if (computerWins === 5) {
            document.getElementById("resultDisplay").textContent = "Game over! The Computer Wins!";
            gameOver = true;
            showResetButton();
        } else if (userWins === 5) {
            document.getElementById("resultDisplay").textContent = "Game over! You Win!";
            gameOver = true;
            showResetButton();
        } else if (userWins > computerWins) {
            document.getElementById("resultDisplay").textContent = "You are currently winning!";
        } else if (computerWins > userWins) {
            document.getElementById("resultDisplay").textContent = "The computer is currently winning!";
        } else if (computerWins === userWins && computerWins !== 0 && userWins !== 0) {
            document.getElementById("resultDisplay").textContent = "The game is currently tied";
        } 
    }

    // Operated the reset button
    function showResetButton() {
        let reset = document.getElementById("reset");
        reset.removeAttribute("hidden");
    }

    // Reset the game
    function resetGame() {
        userWins = 0;
        computerWins = 0;
        ties = 0;
        gameOver = false;
        updateDisplay(userWins, computerWins, ties);
        document.getElementById("reset").setAttribute("hidden", "true");
    }

    // Event Listener for reset button
    document.getElementById("reset").addEventListener('click', (event) => {
        resetGame();
    });

    // Event Listener for User Selection to play a round. 
    document.querySelector("#game-buttons").addEventListener('click', (event) => {
        let target = event.target;

        if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
            let userChoice = target.id;
            let computerChoice = getComputerChoice();

            let winner = playRound(userChoice, computerChoice);
            console.log(`The user chose ${userChoice}`);
            console.log(`Results: ${winner}`);

            updateStats(winner);
        }
    })

});