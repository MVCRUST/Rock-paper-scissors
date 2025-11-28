//User number
const prompt = require('prompt-sync')();

const userSelection = prompt('Please Select Rock, Paper, or Scissors:    ');
console.log(`You chose ${userSelection}`);


// Computer number
const num = Math.floor((Math.random()*3));
switch (num) {
  case 0:
    console.log("Rock");
    break;
  case 1:
    console.log("Paper")
    break;
  case 2:
    console.log("Scissors")
    break;
  default:
    console.log("Please choose one of Rock, Paper, or Scissors");
}

if (userSelection == 'Rock' && num == 0) {
console.log("Draw")
} else if (userSelection == 'Rock' && num == 1) {
    console.log('You lose')
} else if (userSelection == 'Rock' && num == 2) {

    console.log('You win')
} else if (userSelection == 'Paper' && num ==0) {
    console.log('You win')
} else if (userSelection == 'Paper' && num == 1) {
    console.log('You draw')
} else if (userSelection == 'Paper' && num == 2) {
    console.log('You lose')
} else if (userSelection == 'Scissors' && num == 0) {
    console.log('You lose')
} else if (userSelection == 'Scissors' && num == 1) {
    console.log('You win')
} else if (userSelection == 'Scissors' && num == 2) {
    console.log('You draw')
}
