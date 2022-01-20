//Rock Paper Scissors - JavaScript

/* Algorithm
    1. Computer generates RPS at random
    2. Player selects RPS 
    3. Game logic will compare who wins
    4. Winner will gain a point
    5. Whoever reaches 5 points first, wins
*/

//Base scores
let userScore = 0;
let computerScore = 0;
//Caching the DOM - storing IDs and classes into variables for DOM manipulation
const userScore_span = document.getElementById("user-score"); //DOM Variables in a span tag
const compScore_span = document.getElementById("comp-score"); //DOM Variables in a span tag
const scoreBoard_div = document.querySelector(".score-board"); //DOM Variable in the div tag
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const end_game_p = document.querySelector(".end_game > p");
const restart_button = document.getElementById("restart_button");

//function that takes in userChoice and compares with computer choice to determine if win, loss, or draw
function game(userChoice) {
    const computerChoice = getComputerChoice();
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

//function which computer chooses either RPS at random from an array
function getComputerChoice() {
    //Array of choices for computer to choose from
    let choices = ["rock", "paper", "scissors"]; 
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function to run when player wins
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; //DOM updates users score
    compScore_span.innerHTML = computerScore; 
    
    //When user wins, add a green glow to the div the user clicked
    document.getElementById(userChoice).classList.add('green-glow');
    //Animates the green glow 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    
    //If statement for when either player or comp reaches 5 points
    if (userScore < 5) {
        result_p.innerHTML = userChoice + " beats " + compChoice + ". You Win! 🔥";
    } else if (userScore === 5) {
        end_game_p.innerHTML = "Game over, you win! You reached 5 points!"
        document.body.style.backgroundColor = "#2f9154";
    }
}

//function to run when computer wins
function lose(userChoice, compChoice) {
    computerScore++;
    compScore_span.innerHTML = computerScore; //DOM updates comps core
    userScore_span.innerHTML = userScore;

    //When user loses, add a red glow to the div the user clicked
     document.getElementById(userChoice).classList.add('red-glow');
    //Animates the green glow 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    
    //If statement for when either player or comp reaches 5 points
    if (computerScore < 5) {
        result_p.innerHTML = compChoice + " beats " + userChoice + ". You Lose! 😭"
    } else if (computerScore === 5) {
        end_game_p.innerHTML = "Game over, you lost! Computer reached 5 points!"
        document.body.style.backgroundColor = "#9c2f27";
    }
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

//function to run when the game is over - resetting everything
function finishGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore; //DOM updates users score
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = " ";
}

//function to run when the replay button is clicked
function restartButton() {
    restart_button.addEventListener('click', function() {
        finishGame("restart");
        end_game_p.innerHTML = " ";
        document.body.style.backgroundColor = "#24272E";
    })
}

restartButton();
