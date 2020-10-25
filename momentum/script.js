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
   if (min == 0 && sec == 0 ) setBgGreet();
   //if (sec % 5 == 0 ) setBgGreet();


  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//YA Add date

function showDate() {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let clock_date = document.querySelector('.current_date__self');
  let date = new Date(); 
  let format_date = days[date.getDay()]+'    '+date.getDate() +'-'+(date.getMonth() + 1)+'-'+date.getFullYear();
  clock_date.innerHTML = format_date;
}

function random(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

    if (hour >= 0 && hour < 5 ) {
      // Night
      document.body.style.backgroundImage =
      "url('./assets/images/night/"+ addZero(random(1,20)) +".jpg')";
      greeting.textContent = 'Good Night, ';
    } else if (hour >= 5 && hour < 12 ) {
    // Morning
    document.body.style.backgroundImage =
    "url('./assets/images/morning/"+ addZero(random(1,20)) +".jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 12 &&  hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
    "url('./assets/images/day/"+ addZero(random(1,20)) +".jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('./assets/images/evening/"+ addZero(random(1,20)) +".jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
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
  if (localStorage.getItem('focus') === null) {
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
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
showDate();
setBgGreet();
getName();
getFocus();