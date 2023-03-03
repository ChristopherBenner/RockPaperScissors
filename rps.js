const choices = ['r','p','s'];
let playing = true;
let userChoice;
let computerChoice;
let userScore = 0;
let games = 0;
let computerScore = 0;
let ties = 0;
let roundWinner;
let playAgain;
let play;

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function getUserChoice(){
    let validChoice = false;
    while (validChoice === false){
        userChoice = prompt("Enter your weapon (r, p, s) (x to quit) ").toLowerCase();
        if (['r','p','s','x'].includes(userChoice)){
            validChoice = true;
        } else {
            alert("Choose a valid option");
        }
    }
    return userChoice;
}
function playRound(choice){
    userChoice = choice[0].toLowerCase();
    computerChoice = getComputerChoice();
    play = userChoice + computerChoice;
    if (userChoice === 'x'){
        playing = false;
    }else if (userChoice === computerChoice){
        ties++;
        roundWinner = 'tie';
    } else if (['rp','ps','sr'].includes(play)){
        computerScore++;
        roundWinner = 'computer';
    } else {
        userScore++;
        roundWinner = 'player';
    }
    games++;
    if (playing){
        displayMessage();
        playAgain = prompt("Do you want to play again (y/n)? ");
        if (playAgain.toLowerCase() === 'n'){
            playing = false;
        }
    }
}
function displayMessage(){
    alert(`Round ${games} results - Player: ${userChoice} vs Computer: ${computerChoice}\n
    ${roundWinner} wins!\n
    ------------\n
    Current scores - Player: ${userScore}, Computer: ${computerScore}, Ties: ${ties}`);
}
/*
while (playing){
    playRound();
}*/
//alert('Thank you for playing');



const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let choice = String(button.id);
        //console.log(choice);
        playRound(choice);
        // const container = document.querySelector('body');
        //const scores = document.querySelector('.scores');
        //scores.textContent = `Player Scores: ${userScore} Computer Score: ${computerScore} Games Played: ${games}`;
        //container.appendChild(scores)
        //alert(button.id);
        const playerScore = document.querySelector('#playerScore');
        playerScore.textContent = userScore;
        const compScore = document.querySelector('#computerScore');
        compScore.textContent = computerScore;
    });
});
/*
const container = document.querySelector('body');
const scores = document.createElement('h2');
scores.textContent = `Player Scores: ${userScore} Computer Score: ${computerScore} Games Played: ${games}`;
container.appendChild(scores)*/
