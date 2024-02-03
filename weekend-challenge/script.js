// Initialize variables
let userWins = 0;
let computerWins = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner of a round
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        userWins++;
        return 'You win!';
    } else {
        computerWins++;
        return 'Computer wins!';
    }
}

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById('userWins').innerText = userWins;
    document.getElementById('computerWins').innerText = computerWins;
}

// Function to handle user's choice
function userChoice(choice) {
    const computerChoice = getComputerChoice();

    // Display choices
    document.getElementById('userChoiceDisplay').innerText = choice;
    document.getElementById('computerChoiceDisplay').innerText = computerChoice;

    // Determine the winner
    const roundResult = determineWinner(choice, computerChoice);
    document.getElementById('roundResult').innerText = roundResult;

    // Update the scoreboard
    updateScoreboard();
}

// Function to reset the game
function resetGame() {
    userWins = 0;
    computerWins = 0;
    updateScoreboard();
    document.getElementById('userChoiceDisplay').innerText = '';
    document.getElementById('computerChoiceDisplay').innerText = '';
    document.getElementById('roundResult').innerText = '';
}
