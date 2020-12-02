import Card from './card';
import Menu from './menu';
import Router from './router';

export default class Dispatcher {
    static clickDispatcher(e) {
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
        if (e.target.classList.contains('front')) {

            Card.play(e.target.dataset.sound || e.target.parentElement.dataset.sound)
        }


        // handle toggler
        if (e.target == cb) {
            // console.log('toggler');
            Router.route(appData);
        }


        // handle rotate card
        if (e.target.classList.contains('rotate')) {
            //  console.log('rotate', e.target.parentElement.parentElement);

            e.target.parentElement.classList.add('card--rotate-180');
            e.target.parentElement.nextElementSibling.classList.add('card--rotate-360');
        

            //event for leave
            e.target.parentElement.parentElement.addEventListener('mouseleave', (e) => {
              //  console.log(e);
                e.target.children[0].classList.remove('card--rotate-180');
                e.target.children[1].classList.remove('card--rotate-360');
            })

        }
    }
}