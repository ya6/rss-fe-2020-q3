  import _log from './../helpers/_log';

  import Controller from'./classes/controller';
  import Router from'./classes/router';


  // import './assets/favicon.ico';

  import './main.scss';

  //init

  const tracked_field = document.querySelector('.container-fluid');


  
//start

//routing
const router = new Router;
tracked_field.addEventListener('click', router.route);



  
  //mine page
  const controller = new Controller();
  //args: page, button 
  controller.index('main', false);
