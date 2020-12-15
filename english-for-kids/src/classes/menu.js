export default class Menu {

    static render(container, pageData) {
     
        if (cb.checked) {

            container.classList.add('background--orange');
        } else {
            container.classList.remove('background--orange');
        };

        container.innerHTML = '';
        let ind = 1;
        for (let menu_item of pageData['menu']) {
            let li = document.createElement('li')
          
            if (menu_item === 'delimiter') {
                li.innerHTML = `<hr class="bg-light">`;
            } else {
                li.innerHTML = `<div class="d-flex">
                <div class="menu__icon mx-1" style="background-image: url(./assets/img/icon/icon_menu_${ind}.png)"></div>
                <a class="menu__item ${menu_item === pageData['page'] ? 'active' : ''}" href="#">${menu_item}</a>
                </div>`;
            }
         
            container.appendChild(li);
            ind += 1;
        }

    }

    static close() {

        menu__toggle.checked = false;

    }

}