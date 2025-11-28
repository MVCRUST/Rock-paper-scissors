const startBtn = document.querySelector("#startGame");
const startPlay = document.querySelector("#startPlay");
const gameCard = document.querySelector("#gameCard");
const form = document.querySelector('form');
const userOption = document.querySelector('#userSelection');
const compOption = document.querySelector('#computerSelection');
const userScoreEl = document.querySelector('#userScore');
const compScoreEl = document.querySelector('#computerScore');
const endGame = document.querySelector('#endGame');
const playAgain = document.querySelector('#playAgain');
const gameResult = document.querySelector('#result');
const showResult = document.querySelector('#showResult');

gameCard.style.display = "none";
endGame.style.display = "none";
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

  const userChoice = selection.value;
  userOption.textContent = userChoice;

  const num = Math.floor(Math.random() * 3);
  const computerChoice = ["Rock", "Paper", "Scissors"][num];
  compOption.textContent = computerChoice;
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

  if (userChoice == "Rock" && num == 0) {
    showResult.textContent = "It's a draw";
    console.log("Draw");
  } else if (userChoice == "Rock" && num == 1) {
    showResult.textContent = "You lose";
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "Rock" && num == 2) {
    showResult.textContent = "You win";
    userScore++;
    console.log("You win");
  } else if (userChoice == "Paper" && num == 0) {
    showResult.textContent = "You win";
    userScore++;
    console.log("You win");
  } else if (userChoice == "Paper" && num == 1) {
    showResult.textContent = "It's a draw";
    console.log("You draw");
  } else if (userChoice == "Paper" && num == 2) {
    showResult.textContent = "You lose";
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "Scissors" && num == 0) {
    showResult.textContent = "You lose";
    computerScore++;
    console.log("You lose");
  } else if (userChoice == "Scissors" && num == 1) {
    showResult.textContent = "You win";
    userScore++;
    console.log("You win");
  } else if (userChoice == "Scissors" && num == 2) {
    showResult.textContent = "It's a draw";
    console.log("You draw");
  }

  compScoreEl.textContent = computerScore;
  userScoreEl.textContent = userScore;

  console.log(`You have: ${userScore} points, the computer has: ${computerScore} points.`);

  if (userScore === 3 || computerScore === 3) {
    gameCard.style.display = "none";
    endGame.style.display = "block";
    playAgain.addEventListener('click', function() {
      location.reload();
      endGame.style.display = "none";
    })
    console.log("GAME OVER");
    let result = userScore === 3 ? "You won the game!" : "Computer won the game!";
    gameResult.textContent = result;
  }
})





