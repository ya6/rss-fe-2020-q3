import Dispatcher from './classes/dispatcher';
import Statistics from './classes/statistics';
import TrainMode from './classes/train_mode';
import Router from './classes/router';

import './main.scss';


//init
const appData = {
  page: 'Main Page',
  statCards: Statistics.loadStatistics()
};

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
//Hacker scope: 50 ok
