import cards from './../data/cards'
export default  class MakeData {


      static makePage(appData) {
       
        // menu
        appData['menu'] = ['Main Page', ...cards[0]];
        appData['cards'] = [];
        if(appData['page'] === 'Main Page') {
  
          let ind = 1;
          for (let card of  cards[0]) {
            appData['cards'].push({
              name: card,
              src: cards[ind][0].image
            });
            ind+=1;
          }

        }       
         
            return appData;

    }
}