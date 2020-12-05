export default class Menu {

    static render(container, pageData) {
        let active = '';

        if (cb.checked) {

            container.classList.add('background--orange');
        } else {
            container.classList.remove('background--orange');
        };

        container.innerHTML = '';
        for (let menu_item of pageData['menu']) {
            let li = document.createElement('li')
            if (menu_item === pageData['page']) {
                active = 'active'
            }
            if (menu_item === 'delimiter') {
                li.innerHTML = `<hr class="bg-light">`;
            } else{ li.innerHTML = `<a class="menu__item ${active}" href="#">${menu_item}</a>`;}
            active = '';
            container.appendChild(li);

        }

    }

    static close() {

        menu__toggle.checked = false;

    }

}