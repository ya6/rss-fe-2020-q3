export default class Card {

     static renderCards( container, appData) {
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
       }
       
    }
}
