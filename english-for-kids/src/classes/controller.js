import MakeData from './make_data';
import RenderCard from './render_card';
import cards from '../data/cards';


export default class Controller {

    static index(page = 'main', toggle_button = false) {
console.log();

        switch (page) {
            case 'main':

                //model 
                const makeData = new MakeData(cards);
                const selectCards = makeData.makeMain();


                // view
                const container = document.querySelector('.container__inner');

                const render = new RenderCard();
                render.renderCards(container, selectCards, toggle_button);

                break;


            default:
                break;
        }
    }
}