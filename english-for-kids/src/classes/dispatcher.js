import Menu from './menu';
import Router from './router';
export default class Dispatcher {
    static dispatcher(e) {
        console.log('dispatcher', e);
        // console.log('dispatcher',this.appData);
        const appData = this.appData;


        // close menu
        if (typeof e == 'object' && e.target.parentElement.tagName == 'DIV' || typeof e == 'object' && e.target.tagName == 'IMG') {
            Menu.close();
        }

        let page = e.target.dataset.name || e.target.alt || appData['page'];
        appData['page'] = page;

        Router.route(appData);
    }


}