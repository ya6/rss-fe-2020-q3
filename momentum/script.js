// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec)}`;

  // change back every hour  
  if (min == 0 && sec == 0) setBgGreet();
  //if (sec % 5 == 0 ) setBgGreet();


  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//YA Add date
name.addEventListener('click', (e) => {
  name.textContent = '!';
});

focus.addEventListener('click', (e) => {
  focus.textContent = '!';
});

name.addEventListener('blur', (e) => {

  if (name.textContent == '!' || name.textContent == '')
    getName();

  setName();
});

focus.addEventListener('blur', (e) => {
  if (focus.textContent == '!' || focus.textContent == '')
    getFocus();

  setFocus();
});

let backs = [];

function setBackgrounds() {

  for (let index = 0; index < 5; index++) {
    backs.push('./assets/images/night/' + addZero(random(1, 20)) + '.jpg');
  }
  for (let index = 5; index < 12; index++) {
    backs.push('./assets/images/morning/' + addZero(random(1, 20)) + '.jpg');
  }
  for (let index = 12; index < 18; index++) {
    backs.push('./assets/images/day/' + addZero(random(1, 20)) + '.jpg');
  }
  for (let index = 18; index < 24; index++) {
    backs.push('./assets/images/evening/' + addZero(random(1, 20)) + '.jpg');
  }

  // backs.forEach((el,ind)=>(console.log(ind+'---'+el)));
}

function getBackground(hour) {
  return backs[hour];
}


function showDate() {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let clock_date = document.querySelector('.current_date__self');
  let date = new Date();
  let format_date = days[date.getDay()] + '    ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  clock_date.innerHTML = format_date;
}

function random(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

 let backs_counter = new Date().getHours();


function slideBackgrounds() {
  backs_counter = backs_counter == 23 ? 0 : backs_counter+=1;
  document.body.style.backgroundImage =
 
  `url(${getBackground((backs_counter) )})`;
 

}

slide.addEventListener('click', slideBackgrounds );

change.addEventListener('click', changeBackground );

function changeBackground() {
  console.log('changeBackground');
  document.body.style.animation = 'none';
  setTimeout(function () {
  document.body.style.animation = 'next 3.0s'
  }, 50);

  let hour = new Date().getHours();
  
  backs[hour] = backs[hour].slice(0,backs[hour].length-6)+addZero(random(1, 20)) + '.jpg';

  
  
  document.body.style.backgroundImage =
  `url(${getBackground(hour)})`;


  
}


function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 0 && hour < 5) {
    // Night
    document.body.style.backgroundImage =
      `url(${getBackground(hour)})`;
    greeting.textContent = 'Good Night, ';
  } else if (hour >= 5 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
    `url(${getBackground(hour)})`;
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
    `url(${getBackground(hour)})`;
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage =
    `url(${getBackground(hour)})`;
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '' || localStorage.getItem('name') === '!') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '' || localStorage.getItem('focus') === '!') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
focus.addEventListener('keypress', setFocus);


//weather 
// fetch("http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=cc5e998123b73611c364f52344b6c422", {
// 	"method": "GET",

// })
// .then(response => {
//   return response.json()

// })
// .then(wheather=>{
//   console.log(wheather);
// })
// .catch(err => {
// 	console.log(err);
// });



// Run
setBackgrounds();
showTime();
showDate();
setBgGreet();
getName();
getFocus();