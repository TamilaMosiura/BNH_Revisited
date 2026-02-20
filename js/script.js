let userWinsCount = 0;
let computerWinsCount = 0;

const gamePlayingBlock = document.getElementById("game-playing");
const userChoiceBlock = document.getElementById("user-choice");
const compChoiceBlock = document.getElementById("comp-choice");
const messageBlock = document.getElementById("message");
const userWinsBlock = document.getElementById("user-wins");
const compWinsBlock = document.getElementById("comp-wins");

function getComputerChoise() {
    const options = ['bear', 'ninja', 'hunter'];
    const computerOption = Math.floor(Math.random() * 3);
    const computerType = options[computerOption];
    return computerType
}

function userChoose (userChoice){
    const computerChoice = getComputerChoise();

    let message = ""

    if (userChoice === computerChoice) {
        message = "It is a Draw!"
    } else if (
        userChoice === 'bear' && computerChoice === 'ninja'
        ||
        userChoice === 'ninja' && computerChoice === 'hunter'
        ||
        userChoice === 'hunter' && computerChoice === 'bear'
    ) {
        message = "You Win!"
        userWinsCount += 1;
    } else {
        message = "The computer wins!"
        computerWinsCount += 1;
    }

    drawResults(userChoice, computerChoice, message);
}

// I found this solution very helpful
function makeFirstLetterCapital (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function drawResults(userChoice, computerChoice, message) {
    gamePlayingBlock.hidden = false;
    
    userChoiceBlock.innerText = makeFirstLetterCapital(userChoice);
    compChoiceBlock.innerText = makeFirstLetterCapital(computerChoice);
    messageBlock.innerText = message;

    userWinsBlock.innerText = userWinsCount;
    compWinsBlock.innerText = computerWinsCount;
}

function restart() {
    userWinsCount = 0;
    computerWinsCount = 0;
    gamePlayingBlock.hidden = true;
}
