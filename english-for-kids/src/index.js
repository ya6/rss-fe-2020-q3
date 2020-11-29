  import _log from './../helpers/_log';

  import Controller from'./classes/controller';
  import Router from'./classes/router';


  // import './assets/favicon.ico';

  import './main.scss';

  //init

  const tracked_field = document.querySelector('.container-fluid');


  
//start

//routing

tracked_field.addEventListener('click', Router.route);

  
  //main page

  //args: page, button 
Controller.index('main', false);
