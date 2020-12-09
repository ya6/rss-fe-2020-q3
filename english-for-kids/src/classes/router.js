import Controller from './controller';
import Menu from './menu';
export default class Router {

    static route(appData) {
       // console.log('Router @route', appData);

        if (appData['page'] == 'Statistics') {

            return Controller.statistics(appData);

        }else if(appData['page'] == 'Repeat difficult words') {

            return Controller.difficult(appData);

        } else

            return Controller.index(appData);
    }
}