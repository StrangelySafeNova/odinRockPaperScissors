function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return 'paper';
    } else if (randNum == 1) {
        return 'rock';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `It's a Tie! Both the player and the computer played ${computerSelection}`;
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            return 'Player loses! Scissors loses against rock.';
        } else {
            return 'Player wins! Scissors wins against paper.';
        }
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'paper') {
            return 'Player loses! Rock loses against paper.';
        } else {
            return 'Player wins! Rock wins against scissors.';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'Player loses! Paper loses against scissors.';
        } else {
            return 'Player Wins! Paper wins against rock.';
        }
    } else {
        return 'Player made an illegal move!';
    }
}

function play() {
    let playerSelection = prompt('Play rock, paper, or scissors');
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

play();
play();
play();
play();
play();