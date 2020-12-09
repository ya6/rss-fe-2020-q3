import Dispatcher from './classes/dispatcher';
import Statistics from './classes/statistics';
import TrainMode from './classes/train_mode';
import Router from './classes/router';

import './main.scss';



const appData = {
  page: 'Main Page',
  //page: 'Statistics'
 };
 Statistics.loadStatistics(appData);

 

const tracked_field = document.querySelector('.container-fluid');


//start

//dispatch 
tracked_field.addEventListener('click', {
  handleEvent: Dispatcher.clickDispatcher,
  appData
});


//main page  
TrainMode.setTrainMode();
Router.route(appData);


//todo 
//icons on menu
//Hacker scope: 75 ok
