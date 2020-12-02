import Card from './card';
import PlayMode from './play_mode';
import Menu from './menu';
import Router from './router';

export default class Dispatcher {
    static clickDispatcher(e) {
         console.log('dispatcher', e.target);

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

            e.target.parentElement.classList.add('card--rotate-180');
            e.target.parentElement.nextElementSibling.classList.add('card--rotate-360');


            //event for leave
            e.target.parentElement.parentElement.addEventListener('mouseleave', (e) => {

                e.target.children[0].classList.remove('card--rotate-180');
                e.target.children[1].classList.remove('card--rotate-360');
            })

        }

        // handle button play
        if (e.target.classList.contains('game__button')) {
            console.log('dispatcher button play');
            PlayMode.play(appData);
        }
    }
}