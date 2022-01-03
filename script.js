const choices = ['rock', 'paper', 'scissors'];
let winner = 0;
let humanScore = 0;
let computerScore = 0;

let computerPlay = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

let gameRound = (playerSelection, computerSelection) => {
    playerSelection = prompt('Enter your choice');
    computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('Computer selected paper.  You Lose');
        computerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        alert ('It is a tie.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert ('Computer selected scissors.  You Won!!!');
        humanScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        alert ('It is a tie,');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert ('Computer selected rock.  You Won!!!');
        humanScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert ('Computer selected scissors.  You Lose');
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert ('Computer selected paper.  You Won!!!');
        humanScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert ('Computer selected rock.  You Lose.');
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        alert ('It is a tie.');
    }
}

let game = () => {
    while (humanScore < 5 && computerScore < 5) {
        gameRound()
        alert(`You Score ${humanScore}`);
        alert(`Computer Score ${computerScore}`);
    }
    alert(winCondition());
}

let winCondition = () => {
    if (humanScore == 5) {
        alert('You Win!');
    } else if (computerScore == 5) {
        alert('Computer Wins!')
    }
}

game()