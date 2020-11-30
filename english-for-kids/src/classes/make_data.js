import cards from './../data/cards'
export default  class MakeData {


      static makePage(appData) {
       
        // menu
        appData['menu'] = ['Main Page', ...cards[0]];// todo method
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

        }  else {
          let nun_of_category = cards[0].indexOf(appData['page'])+1;
          console.log('makePage', nun_of_category);

        
          for (let card of  cards[nun_of_category]) {
            appData['cards'].push({
              word: card.word,
              translation: card.translation,
              image: card.image,
              audioSrc: card.audioSrc
            });
           ;
          }

        }  
         
            return appData;

    }
}

