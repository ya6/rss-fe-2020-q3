export default class Card {

  static  getCards(container, cards, target, mode) {

        for (let card of cards) {
            let div = document.createElement('div');
            div.innerHTML = `
            <div class="card border-0 rounded">
            <img src="${card.src}" alt="${card.name}">
            <a href="${card.link}" class="mx-auto">${card.name}</a>
        </div>
        `;
            container.append(div);
        }
    }

}