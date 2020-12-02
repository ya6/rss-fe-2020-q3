import Card from './card';
import Menu from './menu';
import Router from './router';

export default class Dispatcher {
    static clickDispatcher(e) {
        console.log('dispatcher', e);

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
        if (e.target.dataset.sound || e.target.parentElement.dataset.sound) {
            Card.play(e.target.dataset.sound || e.target.parentElement.dataset.sound)
        }


        // handle toggler
        if (e.target == cb) {
            console.log('toggler');
            Router.route(appData);
        }

        // handle rotate card
        if (e.target.classList.contains('rotate')) {
            console.log(e.target.parentElement.children);
            console.log(e.target.parentElement.children[0]);
            e.target.parentElement.children[0].classList.add('card--rotate-180');
           e.target.parentElement.children[1].classList.add('card--rotate-360');

        }
    }

    static mouseoutDispatcher(e) {
        console.log('mouseoutDispatcher ', e.target);

        let cards = document.querySelectorAll('.card');
        // console.log('mouseoutDispatcher  hover ', e.target.querySelector(":hover").classList);


        // console.log('mouseoutDispatcher ', e.previousElement);

        // if (e.target.classList.contains('card__train')) {
        //  //   console.log('mouseoutDispatcher ', e.target);  
        //     e.target.children[0].classList.remove('card--rotate-180');
        //     e.target.children[1].classList.remove('card--rotate-360');

        //     // e.target.previousElementSibling.remove('card--rotate-360');
        // }

        // document.querySelectorAll(".card").forEach(function (el) {
        //         if (!el.querySelector(":hover") && el.classList.contains("card--rotate-360")) {
        //             el.classList.remove("card--rotate-360")
        //         }
        //     })

        if (!e.target.classList.contains('card') || !e.target.classList.contains('back')) {
            cards.forEach((el) => {
                console.log(el);
                el.children[0].classList.remove('card--rotate-180');
                el.children[1].classList.remove('card--rotate-360');
            })

        }







    }

}