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

//Base scores
let userScore = 0;
let computerScore = 0;
//Caching the DOM - scoring variables for future use
const userScore_span = document.getElementById("user-score"); //DOM Variables in a span tag
const compScore_span = document.getElementById("comp-score"); //DOM Variables in a span tag
const scoreBoard_div = document.querySelector(".score-board"); //DOM Variable in the div tag
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const end_game_p = document.querySelector(".end_game > p");

//function which computer choose a choice at random from an array
function getComputerChoice() {
    //Array of choices for computer to choose from
    let choices = ["rock", "paper", "scissors"]; 
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function that takes in user selection and compares with computer choice
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("player chose " + userChoice);
    console.log("comp chose " + computerChoice);
    //game logic
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

//Function to display player as winner and add score
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; //DOM updates users core
    compScore_span.innerHTML = computerScore; 
    result_p.innerHTML = userChoice + " beats " + compChoice + ". You Win! 🔥"
    //When user wins, add a green glow to the div the user clicked
    document.getElementById(userChoice).classList.add('green-glow');
    //Animates the green glow 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

//Function to display computer as winner and add score
function lose(userChoice, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore; //DOM updates users core
    compScore_span.innerHTML = computerScore; 
    result_p.innerHTML = compChoice + " beats " + userChoice + ". You Lose! 😭"
    //When user loses, add a red glow to the div the user clicked
     document.getElementById(userChoice).classList.add('red-glow');
    //Animates the green glow 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

//Function to display draw message
function draw(userChoice, compChoice) {
    result_p.innerHTML = "You both picked " + compChoice + "! It's a Draw! 🥶"
    //If draw, add a yellow glow to the div the user clicked
    document.getElementById(userChoice).classList.add('yellow-glow');
    //Animates the yellow glow 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('yellow-glow')}, 300);
}

//function which selects r,p,s based on player selection
function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();

//5 score limit
function endGame(userScore, computerScore) {
    if (userScore === 5) {
        end_game_p.innerHTML = "You reached 5 points! You win!";
    } else (computerScore === 5); {
        end_game_p.innerHTML = "Computer reached 5 points! You lost!";
    }
}



// end_game_p.innerHTML = "YOU WIN"

