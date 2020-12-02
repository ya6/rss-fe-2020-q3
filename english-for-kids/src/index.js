  import _log from './../helpers/_log';
  import Dispatcher from './classes/dispatcher';
  import Router from './classes/router';


  // import './assets/favicon.ico';

  import './main.scss';

  //init
  const appData = {
    page: 'Main Page'
  };
  const tracked_field = document.querySelector('.container-fluid');


  //start

  //dispatch 

  tracked_field.addEventListener('click', {
    handleEvent: Dispatcher.clickDispatcher,
    appData
  });



  //main page  
  Router.route(appData);