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