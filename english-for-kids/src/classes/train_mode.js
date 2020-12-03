export default class TrainMode {

    static setTrainMode() {
        cb.checked = false;
    }
    static rotateCard(card) {

        card.parentElement.classList.add('card--rotate-180');
        card.parentElement.nextElementSibling.classList.add('card--rotate-360');


        //event for leave
        card.parentElement.parentElement.addEventListener('mouseleave', (e) => {

            card.children[0].classList.remove('card--rotate-180');
            card.children[1].classList.remove('card--rotate-360');
        })
    }

}