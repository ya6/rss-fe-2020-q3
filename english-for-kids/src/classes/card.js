export default class Card {

    static renderCards(container, appData) {
        //  console.log('renderCards ',pageData);

        container.innerHTML = '';

        if (appData['page'] === 'Main Page') {
            let orange_class = '';
            for (let card of appData['cards']) {
                let div = document.createElement('div');

                if (cb.checked) {
                    orange_class = 'card--orange';
                };

                div.innerHTML = `
            <a href="#" class="card border-0 rounded ${orange_class}" data-name="${card.name}">
            <img src="/src/assets/${card.src}" alt="${card.name}">
            ${card.name}
            </a>
        `;
                container.append(div);
            }

        } else if (!cb.checked) {


            // train
            for (let card of appData['cards']) {
                let div = document.createElement('div');

                div.innerHTML = `
                <div class="front card " style="background-image: url(./src/assets/${card.image });" data-sound = "${card.audioSrc}">
                <div class="" style="height:100%; margin-top: 12.4rem; padding-top: 1.5rem">${card.word}</div>
                
                <div><div class="rotate"></div></div>
                </div>
        `;
                container.append(div);
            }
        } else {
            //play

             // train
             for (let card of appData['cards']) {
                let div = document.createElement('div');

                div.innerHTML = `
                <div class="play card " style="background-image: url(./src/assets/${card.image });"  data-name = "${card.word}"  data-sound = "${card.audioSrc}">
                
        
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



// {
//     word: card.word,
//     translation: card.translation,
//     image: card.image,
//     audioSrc: card.audioSrc
//   }