let computerNumber = Math.floor(Math.random() * 10) + 1;
    
let tries = 1;

let gameWin = false;

function evaluateGuess() {
  let myNumber = Number(document.querySelector('.js-enter-number').value);


  if (((myNumber < 1) || (myNumber > 10)) && (gameWin === false)) {
    document.querySelector('.js-information').innerHTML = `Only use a number between 1 and 10. Please try again.`;
    resetValue();
  } else if ((computerNumber === myNumber) && (tries === 1) && (gameWin === false)) {
    document.querySelector('.js-information').innerHTML = `You've got it right on your first try !!! Congratulations !!! My number was ${computerNumber}. Please click New Game to play again.`;
    resetValue();
    gameWin = true;
  } else if ((computerNumber === myNumber) && (tries > 1) && (gameWin === false)) {
    document.querySelector('.js-information').innerHTML = `You've got it right, congratulations ! My number was ${computerNumber}. You needed ${tries} tries. Please click New Game to play again.`;
    resetValue();
    gameWin = true;
  } else if ((computerNumber > myNumber) && (gameWin === false)) {
    document.querySelector('.js-information').innerHTML = `Your guess is ${myNumber}. My number is higher. Try again.`;
    resetValue();
    tries += 1;
  } else if ((computerNumber < myNumber) && (gameWin === false)) {
    document.querySelector('.js-information').innerHTML = `Your guess is ${myNumber}. My number is lower. Try again.`;
    resetValue();
    tries +=1;
  }
}

function resetValue() {
  document.querySelector('.js-enter-number').value = "";
}

function pressEnter(event) {
  if (event.key === 'Enter') {
    evaluateGuess();
  }
}

function startNewGame() {
  gameWin = false;
  computerNumber = Math.floor(Math.random() * 10) + 1;
  tries = 1;
  resetValue();
  document.querySelector('.js-information').innerHTML = "You've started a new game. Have fun !";
}