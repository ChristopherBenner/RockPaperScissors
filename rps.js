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
    // Add the ability to have the choice pop out
    // Add the ability to see who wins each round
    // Show the new score
    // Add the option to reset or play again
    // On exit, update the scoreboard

    // Step one -> remove everything start with just removing the images
    removeItems();
    let chosen = document.querySelector('h1');
    let playerWeapon = document.createElement('img');
    playerWeapon.src = `images/${userChoice}.jpg`;
    let computerWeapon = document.createElement('img');
    computerWeapon.src = `images/${computerChoice}.jpg`;
    
    chosen.insertAdjacentElement('afterend',playerWeapon);
    chosen.insertAdjacentElement('afterend',computerWeapon);
    // chosen.appendChild(playerWeapon);
    // Step two -> display the current choices
    // Step three -> Add a scoreboard
    // Step four -> Add buttons

}
function removeItems(){
    let imgs = document.querySelectorAll("img");
    for (img of imgs) {
        img.parentNode.remove();
    }
    let scoreboard = document.querySelector(".scoreboard");
    scoreboard.remove();
}


const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let choice = String(button.id);
        playRound(choice);
        //console.log(choice);
        //console.log(computerChoice);
        // Add the rest of this to another function
        // Have this update following the set_stage function
        
        /*const playerScore = document.querySelector('#playerScore');
        playerScore.textContent = userScore;
        const compScore = document.querySelector('#computerScore');
        compScore.textContent = computerScore;*/
    });
});