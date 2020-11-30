import Controller from './controller';
import Menu from './menu';
export default class Router {
    static route(e, m) {
      
    if(typeof e == 'object' && e.target.parentElement.tagName=='DIV'|| typeof e == 'object' && e.target.tagName=='IMG' )
 
     {       
        Menu.close();       
     }
    
    

        let page = 'main';
        let mode;

        if (typeof m === 'undefined') {

            mode = cb.checked;
          
        }

        if (typeof e == 'string') {

            page = e;
            mode = cb.checked;

        }
        return Controller.index(page, mode);

    }

}