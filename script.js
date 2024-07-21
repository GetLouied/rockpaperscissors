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