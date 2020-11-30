  import _log from './../helpers/_log';

  import Router from './classes/router';
  //import Menu from './classes/menu';


  // import './assets/favicon.ico';

  import './main.scss';

  //init

  const tracked_field = document.querySelector('.container-fluid');


  //start

  //routing

  tracked_field.addEventListener('click', Router.route);

  //main page  
  Router.route('main');

 