export default class TrainMode {

    static setTrainMode() {
        cb.checked = false;

    }

    static clearPlayAttributes() {
        const game = document.querySelector('.game');
        const stars = document.querySelector('.stars');


        if (document.querySelector('.popup') !== null) {
            const popup = document.querySelector('.popup');
            popup.parentElement.removeChild(popup);
        }

        game.innerHTML = '';
        stars.innerHTML = '';
    }


    static rotateCard(target) {
        const card = target.parentElement.parentElement;

        card.children[0].classList.add('card--rotate-180');
        card.children[1].classList.add('card--rotate-360');


        //event for leave card
        card.addEventListener('mouseleave', () => {

            card.children[0].classList.remove('card--rotate-180');
            card.children[1].classList.remove('card--rotate-360');
        });
    }
}