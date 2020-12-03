import Card from './card';
import PlayMode from './play_mode';
import Menu from './menu';
import Router from './router';
import TrainMode from './train_mode';

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

        // handle  mode toggler
        if (e.target == cb) {

            Router.route(appData);
        }


        // handle sounds for train
        if (e.target.classList.contains('front')) {

            Card.play(e.target.dataset.sound || e.target.parentElement.dataset.sound)
        }

        // handle rotate card  for train
        if (e.target.classList.contains('rotate')) {
            const trainCart = e.target;
            TrainMode.rotateCard(trainCart);

        }

        // handle button  for play
        if (e.target.classList.contains('game__button')) {
           
            PlayMode.appData = appData;
            PlayMode.play();

        }

        //  handle check card for play
        if (e.target.classList.contains('card__play')) {

            PlayMode.checkCard(e.target);
        }
    }
}