import MakeData from './make_data';
import Statistics from './statistics';
import Card from './card';
import Menu from './menu'


export default class Controller {

    static index(appData) {

        appData = MakeData.makePage(appData);

        const cards_container = document.querySelector('.container__inner');
        const menu_container = document.querySelector('.menu__box');

        Card.renderCards(cards_container, appData);
        Menu.render(menu_container, appData);
    }


    static statistics(appData) {
     
        const cards_container = document.querySelector('.container__inner');
        const menu_container = document.querySelector('.menu__box');

        Statistics.renderStatistics(cards_container, appData);
        Menu.render(menu_container, appData);
    }

    static difficult(appData) {
  
        appData = MakeData.makeDifficultPage(appData, 8);

        const cards_container = document.querySelector('.container__inner');
        const menu_container = document.querySelector('.menu__box');

        Menu.render(menu_container, appData);

        if (appData.cards.length > 0) {
            Card.renderCards(cards_container, appData);
        } else Card.renderEmptyPage(cards_container)

    }
}