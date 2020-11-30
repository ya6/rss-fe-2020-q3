import Controller from './controller';
import Menu from './menu';
export default class Router {
    static route(appData) {
        // console.log(e);
        // console.log(this.appData);
      
    // if(typeof e == 'object' && e.target.parentElement.tagName=='DIV'|| typeof e == 'object' && e.target.tagName=='IMG' )
 
    //  {       
    //     Menu.close();       
    //  }
    
    

       // let page = appData['page'];
        // let mode;

        // if (typeof m === 'undefined') {

        //     mode = cb.checked;
          
        // }

        // if (typeof e == 'string') {

        //     page = e;
        //     mode = cb.checked;

        // }
        console.log(appData);
        return Controller.index(appData);

    }

}