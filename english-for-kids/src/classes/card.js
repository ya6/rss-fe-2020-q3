export default class Card {

    static renderCards(container, appData) {
        //  console.log('Card @renderCards');

        const game = document.querySelector('.game');

        container.innerHTML = '';

        if (appData['page'] === 'Main Page') {
            let orange_class = '';
            for (let card of appData['cards']) {
                let div = document.createElement('div');

                if (cb.checked) {
                    orange_class = 'card--orange';
                };

                div.innerHTML = `
            <a href="#" class="card card__main border-0 rounded ${orange_class}" data-name="${card.name}">
            <img src="/src/assets/${card.src}" alt="${card.name}">
            ${card.name}
            </a>
        `;
                container.append(div);
            }

        } else if (!cb.checked) {

            // train
            game.innerHTML = ``;

            for (let card of appData['cards']) {
                let div = document.createElement('div');

                div.innerHTML = `
                <div class="card card__train">
                <div class="front" data-sound = "${card.audioSrc}" style="background-image: url(./src/assets/${card.image });">
               ${card.word}
               <div class="rotate"></div>
                </div> 
                <div class="back"  style="background-image: url(./src/assets/${card.image });">
              ${card.translation}  
                </div>                             
                </div>
        `;
                container.append(div);
            }
        } else {

            //play  
            game.innerHTML = `<button type="button" class="game__button btn text-light mx-auto">Start Play</button>`;


            for (let card of appData['cards']) {
                let div = document.createElement('div');
                div.innerHTML = `
                <div class="card card__play" style="background-image: url(./src/assets/${card.image });" data-name = "${card.word}" data-sound = "${card.audioSrc}">
                </div>
        `;
                container.append(div);
            }
        }
    }

    static play(scr) {

        const audio = new Audio();
        audio.src = `./src/assets/${scr}`;
        audio.currentTime = 0;
        audio.play();
    }
}