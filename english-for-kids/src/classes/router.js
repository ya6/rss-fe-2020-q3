import Controller from './controller';
export default class Router {
    static route(e, m) {

        let page = 'main';
        let mode;
        
        if (typeof m === 'undefined') {
            mode = cb.checked;
            console.log('mode', mode);
        }

        if (typeof e == 'string') {

            page = e;
            mode = cb.checked;

        }
        return Controller.index(page, mode);

    }

}