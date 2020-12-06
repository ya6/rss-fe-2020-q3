import Controller from './controller';
import Menu from './menu';
export default class Router {
    static route(appData) {
      //  console.log('Router @route', appData['page']);

        if (appData['page'] == 'Statistics') {


            return Controller.statistics(appData);
        } else

            return Controller.index(appData);
    }

}