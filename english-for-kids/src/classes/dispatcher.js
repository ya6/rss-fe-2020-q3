import Menu from './menu';
export default class Dispatcher {
    static dispatcher(e) {
        console.log('dispatcher',e);
        if (typeof e == 'object' && e.target.parentElement.tagName == 'DIV' || typeof e == 'object' && e.target.tagName == 'IMG')

        {
            Menu.close();
        }

    }
}