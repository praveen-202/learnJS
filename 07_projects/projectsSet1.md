Solution code for 

Project1 Solution ----------------------------------------------------

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'purple'){
      body.style.backgroundColor = event.target.id;
    }
  });
});

Project2 Solution with Assignment completed-------------------------------------

const form = document.querySelector('form');

//this usecase, outside of eventListener will give you empty value, so get the value from after event, after event as user put any value your querySelector get it
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const expected = document.querySelector('#measurement')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span> BMI: ${bmi}</span>`;
    if(bmi <= 18.6){
      expected.innerHTML = `<span>You are Under Weight</span>`
    }else if(bmi >= 18.6 && bmi <= 24.9 ){
      expected.innerHTML = `<span>You are Normal Weight</span>`
    }else if(bmi > 24.9){
      expected.innerHTML = `<span>You are Over Weight</span>`

    }
  }
});


//Project 3: digital Clock -------------------------------------------------

const clock = document.getElementById('clock');
//or
// const clock = document.querySelector('#clock');


setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//Project 4: 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number...');
  } else if (guess < 1) {
    alert('Please enter a number number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number number smaller than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  if (numGuess >= 0) {
    remaining.innerHTML = `${11 - numGuess}`;
  }
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}
