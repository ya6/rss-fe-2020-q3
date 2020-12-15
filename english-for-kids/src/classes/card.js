export default class Card {

    static renderCards(container, appData) {
        //  console.log('Card @renderCards');

        const game = document.querySelector('.game');
        const empty_page = document.querySelector('.empty_page');
    

        container.innerHTML = '';
        if (typeof table !== 'undefined') {
            table.parentElement.removeChild(table);
        }

        if (empty_page !== null) {
            empty_page.parentElement.removeChild(empty_page);
        }


        if (appData['page'] === 'Main Page') {
           
            for (let card of appData['cards']) {
                let div = document.createElement('div');
                div.innerHTML = `
            <a href="#" class="card card__main border-0 rounded ${cb.checked ? 'card--orange' : ''}" data-name="${card.name}">
            <img src="./assets/${card.src}" alt="${card.name}">
            ${card.name}
            </a>`;

                container.append(div);
            }

        } else if (!cb.checked) {

            // train
            game.innerHTML = ``;


            for (let card of appData['cards']) {
                let div = document.createElement('div');

                div.innerHTML = `
                <div class="card card__train">
                <div class="front" data-sound = "${card.audioSrc}" data-name="${card.word}" style="background-image: url(./assets/${card.image });">
               ${card.word}
               <div class="rotate"></div>
                </div> 
                <div class="back"  style="background-image: url(./assets/${card.image });">
              ${card.translation}  
                </div>                             
                </div>`;
                container.append(div);
            }
        } else {

            //play  
            game.innerHTML = `<button type="button" class="game__button btn text-light mx-auto">Start Play</button>`;

            for (let card of appData['cards']) {
                let div = document.createElement('div');
                div.innerHTML = `
                <div class="card card__play" style="background-image: url(./assets/${card.image });" data-name = "${card.word}" data-sound = "${card.audioSrc}">
                </div>`;

                container.append(div);
            }
        }
    }

    static play(scr) {
       
            
            const audio = new Audio();
            audio.src = `./assets/${scr}`;
            audio.currentTime = 0;
            audio.play();
      

       
    }


    static renderEmptyPage(container) {

        if (typeof table !== 'undefined') {
            table.parentElement.removeChild(table);
        }
        if (typeof empty_page !== 'undefined') {
            empty_page.parentElement.removeChild(empty_page);
        }

        let div = document.createElement('div');

        div.innerHTML = `<div class="empty_page mx-5 d-flex p-5 justify-content-center align-items-center flex-wrap text-center"> <h1 class="text-success">You have no mistakes!!!<h1></div>`;

        container.parentElement.append(div);
    }

}