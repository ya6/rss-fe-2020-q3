import Card from './card';
import PlayMode from './play_mode';
import Menu from './menu';
import Router from './router';
import TrainMode from './train_mode';
import Statistics from './statistics';

export default class Dispatcher {
    static clickDispatcher(e) {
         console.log('dispatcher', e.target);

        const appData = this.appData;
        let page;

        // console.log('dispatcher', appData);



        // close menu
        if (typeof e == 'object' && e.target.parentElement.tagName == 'DIV' || e.target.tagName == 'DIV' || typeof e == 'object' && e.target.tagName == 'IMG' || e.target.tagName == 'A') {
            Menu.close();
        }


        //route pages
        if (e.target.tagName == 'A' || e.target.tagName == 'IMG') {
            page = e.target.dataset.name || e.target.alt || e.target.tagName == 'A' && e.target.innerText || appData['page'];

            TrainMode.clearPlayAttributes();
            appData['page'] = page;
            appData['play'] = false;
            Router.route(appData);
        }


        // handle  mode toggler
        if (e.target == cb && !appData['play']) {

            Router.route(appData);
        }

        //block toggler for play
        if (e.target == cb && appData['play']) {

            e.preventDefault();
        }


        // handle sounds for train
        if (e.target.classList.contains('front')) {

            Card.play(e.target.dataset.sound || e.target.parentElement.dataset.sound);

            // statistic+1 to train
            const word = e.target.dataset.name || e.target.parentElement.dataset.name;
            Statistics.addPointToStatistic(appData, word, 'train');
        }

        // handle rotate card  for train
        if (e.target.classList.contains('rotate')) {

            const trainCart = e.target;
            TrainMode.rotateCard(trainCart);

        }

        // handle button for play
        if (e.target.classList.contains('game__button')) {

            appData['play'] = true;
            PlayMode.appData = appData;
            PlayMode.setGame();

        }

        // handle button for play
        if (e.target.classList.contains('repeat__button')) {

            PlayMode.playGame();
        }

        //  handle check card for play
        if (e.target.classList.contains('card__play') && appData['play'] && !e.target.classList.contains('card__correct')) {

            PlayMode.checkCard(e.target);
        }

        // handle reset statistic button
        if (typeof reset !== 'undefined') {
            if (e.target == reset) {

                Statistics.makeStatisticsData(appData);
                Statistics.saveStatistics(appData);
                Router.route(appData);
            }
        }

        if (e.target.classList.contains('stateInput')) {

    
            Statistics.sortStatistics(appData, e.target);


        }

    }
}