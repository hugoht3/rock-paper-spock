// script.js
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const messagePara = document.getElementById("message");
const buttons = document.querySelectorAll(".choices button");

// Get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Generate Big Bang Theory-inspired messages
function bigBangMessage(winner, loser) {
  const quotes = {
    rock: {
      scissors: "Rock crushes scissors!",
      lizard: "Rock crushes lizard!",
    },
    paper: {
      rock: "Paper covers rock!",
      spock: "Paper disproves Spock!",
    },
    scissors: {
      paper: "Scissors cuts paper!",
      lizard: "Scissors decapitates lizard!",
    },
    lizard: {
      paper: "Lizard eats paper!",
      spock: "Lizard poisons Spock!",
    },
    spock: {
      rock: "Spock vaporizes rock!",
      scissors: "Spock smashes scissors!",
    },
  };

  return `${quotes[winner][loser]} Classic Sheldon logic!`;
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Bazinga! It's a tie!";
  } else if (rules[playerChoice].includes(computerChoice)) {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    return `You win! ${bigBangMessage(playerChoice, computerChoice)}`;
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    return `You lose! ${bigBangMessage(computerChoice, playerChoice)}`;
  }
}

// Handle user choice
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(playerChoice, computerChoice);
    messagePara.textContent = resultMessage;
  });
});
