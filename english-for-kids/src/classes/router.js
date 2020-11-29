
import Controller from './controller';
export default class Router {
   static route(e) {
      
        console.log('Router route', e.target);
        if ( e.target===cb) {
            console.log('input');
            Controller.index('main',  e.target.checked);


        }
        console.log(cb.checked);
        



    }

}