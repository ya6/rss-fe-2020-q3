import MakeData from './make_data';
import Card from './card';
import Menu from './menu'
//import cards from '../data/cards';


export default class Controller {

    static index(page = 'main', toggle_button = false) {


        switch (page) {
            case 'main':

                //model 
                const pageData = MakeData.makePage();


                // view
                const cards_container = document.querySelector('.container__inner');
                const menu_container = document.querySelector('.menu__box');

                Card.renderCards(cards_container, pageData, toggle_button);
                Menu.render(menu_container, pageData);


                break;


            default:
                break;
        }
    }
}