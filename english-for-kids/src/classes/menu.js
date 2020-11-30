
export default class Menu {
     static render(container, pageData) {
        container.innerHTML = '';
         for (let menu_item of pageData['menu']) {
            let li =  document.createElement('li')
            li.innerHTML = `<li><a class="menu__item" href="#">${menu_item}</a></li>`;
            container.appendChild(li);
            console.log(menu_item);

         }
       

     }
}