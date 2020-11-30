import MakeData from './make_data';
import Card from './card';
import Menu from './menu'
//import cards from '../data/cards';


export default class Controller {

    static index(appData) {


       

                //model 
                appData = MakeData.makePage(appData);


                // view
                const cards_container = document.querySelector('.container__inner');
                const menu_container = document.querySelector('.menu__box');

                Card.renderCards(cards_container, appData);
                Menu.render(menu_container, appData);


            


    }
}