const choices = ['rock','paper','scissors'];
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

function playRound(choice){
    //userChoice = choice[0].toLowerCase();
    userChoice = choice;
    computerChoice = getComputerChoice();
    play = userChoice + computerChoice;
    
    if (userChoice === computerChoice){
        ties++;
        roundWinner = 'tie';
    } else if (['rockpaper','paperscissors','scissorsrock'].includes(play)){
        computerScore++;
        roundWinner = 'computer';
    } else {
        userScore++;
        roundWinner = 'player';
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

}


function showChoices(){
    document.getElementById('home').style.display = 'flex';
    document.getElementById('battle').style.display = 'none';
    document.getElementById('playerScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}


const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let choice = String(button.id);
        playRound(choice);
        console.log(choice);
        //console.log(computerChoice);
        // Add the rest of this to another function
        // Have this update following the set_stage function

        /*const playerScore = document.querySelector('#playerScore');
        playerScore.textContent = userScore;
        const compScore = document.querySelector('#computerScore');
        compScore.textContent = computerScore;*/
    });
});