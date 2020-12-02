  import _log from './../helpers/_log';
  import Dispatcher from './classes/dispatcher';
  import Router from './classes/router';

  //import Menu from './classes/menu';


  // import './assets/favicon.ico';

  import './main.scss';

  //init
  const appData = {
    page: 'Main Page'
  };
  const tracked_field = document.querySelector('.container-fluid');



  //start

  //routing

  // tracked_field.addEventListener('click', {
  //   handleEvent: Router.route,
  //   appData: appData
  // });

  tracked_field.addEventListener('click', {
    handleEvent: Dispatcher.clickDispatcher, appData
  });

  tracked_field.addEventListener('mouseover', {
    handleEvent: Dispatcher.mouseoutDispatcher, appData
  });

  //main page  
  Router.route(appData);