export default class TrainMode {

    static setTrainMode() {
        cb.checked = false;
           
     }

     static clearGameAttributes() {
        const game = document.querySelector('.game');
        const stars = document.querySelector('.stars');
        game.innerHTML = ``;
        stars.innerHTML = ``;  
     }
    

    static rotateCard(target) {
        const card =  target.parentElement.parentElement;
        console.log('TrainMode @rotateCard',  card.parentElement.parentElement);

        card.children[0].classList.add('card--rotate-180');
        card.children[1].classList.add('card--rotate-360');


        //event for leave
        card.addEventListener('mouseleave', (e) => {

            card.children[0].classList.remove('card--rotate-180');
            card.children[1].classList.remove('card--rotate-360');
        })
    }

}