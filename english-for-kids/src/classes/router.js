import Controller from './controller';

export default class Router {

    static route(appData) {

        if (appData['page'] == 'Statistics') {

            return Controller.statistics(appData);

        } else if (appData['page'] == 'Repeat difficult words') {

            return Controller.difficult(appData);

        } else

            return Controller.index(appData);
    }
}