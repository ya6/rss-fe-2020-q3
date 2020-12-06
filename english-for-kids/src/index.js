import Dispatcher from './classes/dispatcher';
import TrainMode from './classes/train_mode';
import Router from './classes/router';

import './assets/favicon.ico';

import './main.scss';
import Statistics from './classes/statistics';


//init
const appData = {
  page: 'Main Page',
  statCards: Statistics.loadStatistics()
};

//add statistics

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
//footer
//Hacker scope
