import Card from './card';
import Menu from './menu';
import Router from './router';

export default class Dispatcher {
    static dispatcher(e) {
        // console.log('dispatcher', e);

        const appData = this.appData;
        let page;


        // close menu
        if (typeof e == 'object' && e.target.parentElement.tagName == 'DIV' || typeof e == 'object' && e.target.tagName == 'IMG' || e.target.tagName == 'A') {
            Menu.close();
        }


        //route pages
        if (e.target.tagName == 'A' || e.target.tagName == 'IMG') {
            page = e.target.dataset.name || e.target.alt || e.target.tagName == 'A' && e.target.innerText || appData['page'];

            appData['page'] = page;

            Router.route(appData);
        }


        // handle sounds for train
        if (!cb.checked && appData['page'] !== 'Main Page') {


            //sound
            if (e.target.classList.contains('front') || e.target.parentElement.classList.contains('front')) {
                // console.log('front');

                // play 
                Card.play(e.target.dataset.sound || e.target.parentElement.dataset.sound)

            }
        }
        // handle toggler
        if (e.target == cb) {
            console.log('toggler');
            Router.route(appData);
        }
    }
}