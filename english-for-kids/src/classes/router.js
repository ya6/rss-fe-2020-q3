import Controller from './controller';
import Menu from './menu';
export default class Router {
    static route(appData) {
       
        return Controller.index(appData);

    }

}