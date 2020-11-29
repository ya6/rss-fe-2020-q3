export default class RenderCard {

    renderCards(container, cards, mode) {
        console.log(mode);
        let orange_class = '';
        for (let card of cards) {
            let div = document.createElement('div');
            if (mode) {
                console.log('if');
                orange_class = 'card--orange'
            };

            div.innerHTML = `
            <div class="card border-0 rounded ${orange_class}">
            <img src="/src/assets/${card.src}" alt="${card.name}">
            <a href="#" class="mx-auto">${card.name}</a>
        </div>
        `;

            container.append(div);
        }
    }
}