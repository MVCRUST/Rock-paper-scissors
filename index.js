const startBtn = document.querySelector("#startGame");
const startPlay = document.querySelector("#startPlay");
const gameCard = document.querySelector("#gameCard");
const form = document.querySelector('form');

gameCard.style.display = "none";
startBtn.addEventListener("click", hideStartBtn);

function hideStartBtn() {
  startPlay.style.display = "none";
  gameCard.style.display = "block";
}

let computerScore = 0;
let userScore = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const selection = document.querySelector('input[name="rps"]:checked')

  if (!selection) {
    alert("Please choose rock, paper or scissors.");
    return;
  }

  const userChoice = selection.value.toLowerCase();

  const num = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"][num];
  // switch (num) {
  //   case 0:
  //     console.log("Rock");
  //     break;
  //   case 1:
  //     console.log("Paper");
  //     break;
  //   case 2:
  //     console.log("Scissors");
  //     break;
  //   default:
  //     console.log("Please choose one of Rock, Paper, or Scissors");
  // }

  console.log("User chose:", userChoice);
  console.log("Computer chose:", computerChoice);

  if (userChoice == "rock" && num == 0) {
    console.log("Draw");
  } else if (userChoice == "rock" && num == 1) {
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "rock" && num == 2) {
    userScore++;
    console.log("You win");
  } else if (userChoice == "paper" && num == 0) {
    userScore++;
    console.log("You win");
  } else if (userChoice == "paper" && num == 1) {
    console.log("You draw");
  } else if (userChoice == "paper" && num == 2) {
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "scissors" && num == 0) {
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "scissors" && num == 1) {
    userScore++;
    console.log("You win");
  } else if (userChoice == "scissors" && num == 2) {
    userScore++;
    console.log("You draw");
  }

  console.log(`You have: ${userScore} points, the computer has: ${computerScore} points.`);

  if (userScore === 3 || computerScore === 3) {
    console.log("GAME OVER");
    console.log(userScore === 3 ? "You won the game!" : "Computer won the game!");
  }
})





