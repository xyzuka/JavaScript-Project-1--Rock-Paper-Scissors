//Rock Paper Scissors - JavaScript

//Game will be playing against a computer - this is based off a function called computerPlay
//computerPlay will randomly return either 'Rock', 'Paper', 'Scissors'

/* Algorithm
    1. Computer generates RPS at random
    2. Console displays selection
    3. Player enters selection
    4. Console displays selection
    5. Compare - decide winner of the round
*/

//function which prompts player to choose either rock, paper, or scissors.
function playerPick() {
    let playerChoice = prompt("Pick one of the following: Rock, Paper, Scissors");
    //return "Player chose: " + playerChoice;
    console.log("You picked: ", playerChoice);
    return playerChoice;
}

//function which computer choose a choice at random from an array.
function computerPlay() {
    //Array of choices for computer to choose from
    let choices = ["Rock", "Paper", "Scissors"]; 
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    //return "Computer chose: " + compChoice;
    console.log("Computer picked: ", compChoice);
    return compChoice;
}

//Variables that specify win/loss/draw messages
let playerWinRound = "You won this round!";
let computerWinRound = "You lost! Computer won this round!";
let noWinner = "No one wins! It was a draw!";
let playerFinalWinner = "YES! YOU WON THE GAME! CONGRATULATIONS!";
let computerFinalWinner = "SORRY! COMPUTER WINS THIS TIME! TRY AGAIN NEXT TIME!";

//Base scores
let playerScore = 0;
let computerScore = 0;

//Function to display player as winner and add score
function winGame() {
    playerScore++;
    console.log(playerWinRound);
    console.log("Total Player Points: " + playerScore);
}

//Function to display computer as winner and add score
function loseGame() {
    computerScore++;
    console.log(computerWinRound);
    console.log("Total Computer Points: " + computerScore);
}

//Function to display draw message
function drawGame() {
    console.log(noWinner);
}

//function for game logic
function playRound(playerSelection, computerSelection) {
    //Player winning statements
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Rock")) {
            winGame();
    //Computer winning statements
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Rock")) {
            loseGame();
    //Draw statements
    } else {
            drawGame();
    }
}

