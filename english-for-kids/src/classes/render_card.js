export default class RenderCard {

    renderCards(container, cards, mode) {

       container.innerHTML = '';
        let orange_class = '';
        for (let card of cards) {
            let div = document.createElement('div');
            if (mode) {
             
                orange_class = 'card--orange'
            };

            div.innerHTML = `

            <a href="#" class="card border-0 rounded ${orange_class}" data-name="${card.name}">
            <img src="/src/assets/${card.src}" alt="${card.name}">
            ${card.name}
            </a>


          
        `;

            container.append(div);
        }
    }
}


// div.innerHTML = `
// <div class="card border-0 rounded ${orange_class}">
// <img src="/src/assets/${card.src}" alt="${card.name}">
// <a href="#" class="mx-auto">${card.name}</a>
// </div>
// `;