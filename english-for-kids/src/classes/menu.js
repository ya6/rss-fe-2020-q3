
export default class Menu {

     static render(container, pageData, mode) {
      
      if (mode) {
       
             
         container.classList.add('background--orange');
     } else {  container.classList.remove('background--orange');};

        container.innerHTML = '';
         for (let menu_item of pageData['menu']) {
            let li =  document.createElement('li')
            li.innerHTML = `<li><a class="menu__item" href="#">${menu_item}</a></li>`;
            container.appendChild(li);
         
         }
       
     }

     static close() {
     
          menu__toggle.checked = false;

        }
    
     }
