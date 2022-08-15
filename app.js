function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win, human. Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lost, human. Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win, human. Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lost, human. Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win, human. Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lost, human. Rock beats scissors";
  } else {
    return "No one wins. Draw!";
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(checkWinner());
}

function checkWinner() {
  return playerScore === 5
    ? `You won the game, human. Score is ${playerScore} vs ${computerScore}`
    : `Computer won the game. Score is ${computerScore} vs ${playerScore}`;
}

game();
