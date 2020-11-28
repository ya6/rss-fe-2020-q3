export default class Toggler {

    constructor() {
        console.log('toggler constructor');
    }

    changeHandler(e) {
       // console.log(this.category_cards);
        // console.log(e.target.checked);
        let isPlay = e.target.checked;
        let cards = document.querySelectorAll('.card');
        if (isPlay) {

            cards.forEach((card) => {
             
                card.classList.add('card--orange');
            });

            // for (const card of this.category_cards) {
            //     let div = document.createElement('div');
            //     div.innerHTML = `

            //     <div class="card border-0 rounded card-orange">
            //     <img src="${card.src}" alt="${card.name}">
            //     <a href="${card.link}" class="mx-auto">${card.name}</a>
            // </div>
            // `;

        } else { cards.forEach((card) => {
           
            card.classList.remove('card--orange');
        });}

    }

}

