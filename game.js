let playerScore = 0;
let computerScore = 0;

const playerScoreDiv = document.querySelector('div[data-set="player-score"]');
const computerScoreDiv = document.querySelector('div[data-set="computer-score"]');
const scoreBoardDiv = document.querySelector('div[data-set="scoreboard"]');
const resultDiv = document.querySelector('div[data-set="results"]');
const declareWinner = document.querySelector('div[data-set="winner"]');

const rockButtonDiv = document.querySelector('div[data-set="player-rock"]');
const paperButtonDiv = document.querySelector('div[data-set="player-paper"]');
const scissorButtonDiv = document.querySelector('div[data-set="player-scissors"]');

let cpuRockChoice = document.querySelector('div[data-set="cpu-rock"]');
let cpuPaperChoice = document.querySelector('div[data-set="cpu-paper"]');
let cpuScissorsChoice = document.querySelector('div[data-set="cpu-scissors"]');

const resetButton = document.querySelector('.reset-button');


let cpuChoice = () => {
    const choices = [cpuRockChoice, cpuPaperChoice, cpuScissorsChoice];
    return choices[Math.floor(Math.random() * choices.length)];
}

let resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = 0;
    computerScoreDiv.textContent = 0;
    scoreBoardDiv.textContent = '';
    resultDiv.textContent = '';
    declareWinner.textContent = '';
    rockButtonDiv.style.pointerEvents =  "auto";
    paperButtonDiv.style.pointerEvents = "auto";
    scissorButtonDiv.style.pointerEvents = "auto";
}


let win = (user, computer) => {
    playerScore++;
    playerScoreDiv.textContent = playerScore;
    scoreBoardDiv.textContent = 'You Won!';
    resultDiv.textContent = user.innerHTML + ' beats ' + computer.innerHTML + '. You win!';
    winCondition();
}

let lose = (user, computer) => {
    computerScore++;
    computerScoreDiv.textContent = computerScore;
    scoreBoardDiv.textContent = 'You Lost!';
    resultDiv.textContent = user.innerHTML + ' loses to ' + computer.innerHTML + '. You lose!';
    winCondition();
}

let draw = (user, computer) => {
    scoreBoardDiv.textContent = '';
    resultDiv.textContent = user.innerHTML + computer.innerHTML + ' Round Ends in Draw';
}

const winCondition = () => {
    if (playerScore == 5) {
        declareWinner.textContent = 'PLAYER WINS!';
        rockButtonDiv.style.pointerEvents =  "none";
        paperButtonDiv.style.pointerEvents = "none";
        scissorButtonDiv.style.pointerEvents = "none";
        
    } else if (computerScore == 5) {
        declareWinner.textContent = 'COMPUTER WINS!  YOU LOSE!';
        rockButtonDiv.style.pointerEvents =  "none";
        paperButtonDiv.style.pointerEvents = "none";
        scissorButtonDiv.style.pointerEvents = "none";
    }
}


let game = (myChoice) => {
    const computerSelection = cpuChoice();
    if (myChoice === rockButtonDiv && computerSelection === cpuPaperChoice) {
        lose(myChoice, computerSelection);

    } else if (myChoice === rockButtonDiv && computerSelection === cpuRockChoice) {
        draw(myChoice, computerSelection);

    } else if (myChoice === rockButtonDiv && computerSelection === cpuScissorsChoice) {
        win(myChoice, computerSelection);
        
    } else if (myChoice === paperButtonDiv && computerSelection === cpuPaperChoice) {
        draw(myChoice, computerSelection);

    } else if (myChoice === paperButtonDiv && computerSelection === cpuRockChoice) {
        win(myChoice, computerSelection);
        
    } else if (myChoice === paperButtonDiv && computerSelection === cpuScissorsChoice) {
        lose(myChoice, computerSelection);
        
    } else if (myChoice === scissorButtonDiv && computerSelection === cpuPaperChoice) {
        win(myChoice, computerSelection);
        
    } else if (myChoice === scissorButtonDiv && computerSelection === cpuRockChoice) {
        lose(myChoice, computerSelection);
        
    } else if (myChoice === scissorButtonDiv && computerSelection === cpuScissorsChoice) {
        draw(myChoice, computerSelection);
    }
}

let main = () => {
    rockButtonDiv.addEventListener('click', () => {
        game(rockButtonDiv);
    })

    paperButtonDiv.addEventListener('click', () => {
        game(paperButtonDiv);
    })

    scissorButtonDiv.addEventListener('click', () => {
        game(scissorButtonDiv);
    })

    resetButton.addEventListener('click', () => {
        resetGame();
    })
}

main();