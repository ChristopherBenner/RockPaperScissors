const choices = ['rock','paper','scissors'];
let playing = true;
let userChoice;
let computerChoice;
let userScore = 0;
let games = 0;
let computerScore = 0;
let ties = 0;
let playerOutcome;
let computerOutcome;
let playAgain;
let play;

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(choice){
    //userChoice = choice[0].toLowerCase();
    userChoice = choice;
    computerChoice = getComputerChoice();
    play = userChoice + computerChoice;
    
    if (userChoice === computerChoice){
        ties++;
        playerOutcome = 'Tie';
        computerOutcome = 'Tie';
    } else if (['rockpaper','paperscissors','scissorsrock'].includes(play)){
        computerScore++;
        playerOutcome = 'Lose';
        computerOutcome = 'Win';
    } else {
        userScore++;
        playerOutcome = 'Win';
        computerOutcome = 'Lose';
    }
    games++;  
    set_stage(userChoice, computerChoice);
}
function set_stage(userChoice, computerChoice){
    let playerWeapon = document.getElementById('playerWeapon');
    playerWeapon.src = `images/${userChoice}.jpg`;
    let computerWeapon = document.getElementById('computerWeapon');
    computerWeapon.src = `images/${computerChoice}.jpg`;

    document.getElementById('home').style.display = 'none';
    document.getElementById('battle').style.display = 'flex';

    document.getElementById('battlePlayerScore').textContent = userScore;
    document.getElementById('battleComputerScore').textContent = computerScore;   
    document.getElementById('playerResult').textContent = playerOutcome;
    document.getElementById('computerResult').textContent = computerOutcome;

    if (userScore >= 5 || computerScore >= 5){
        document.getElementById('showChoices').style.display = 'none';
        document.getElementById('gameOver').style.display = 'flex';
    }
}


function showChoices(){
    document.getElementById('home').style.display = 'flex';
    document.getElementById('battle').style.display = 'none';
    document.getElementById('playerScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function gameOver(){
    document.getElementById('battle').style.display = 'none';
    document.getElementById('final').style.display = 'flex';
    document.getElementById('finalResults').textContent = `You ${playerOutcome}`;
}

function restart(){
    userScore = 0;
    computerScore = 0;

    showChoices();
    document.getElementById('final').style.display = 'none';
    document.getElementById('showChoices').style.display = 'flex';
        document.getElementById('gameOver').style.display = 'none';
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let choice = String(button.id);
        playRound(choice);
    });
});