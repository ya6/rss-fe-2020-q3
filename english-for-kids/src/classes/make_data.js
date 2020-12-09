import cards from './../data/cards'
export default class MakeData {


  static makePage(appData) {

    // menu
    appData['menu'] = ['Main Page', ...cards[0], 'delimiter', 'Statistics'];

    appData['cards'] = [];

    //main page
    if (appData['page'] === 'Main Page') {

      let ind = 1;
      for (let card of cards[0]) {
        appData['cards'].push({
          name: card,
          src: cards[ind][0].image
        });
        ind += 1;
      }

    } else { //cards page
      let nun_of_category = cards[0].indexOf(appData['page']) + 1;
      for (let card of cards[nun_of_category]) {
        appData['cards'].push({
          word: card.word,
          translation: card.translation,
          image: card.image,
          audioSrc: card.audioSrc
        });
      }
    }
    return appData;
  }

  static makeDifficultPage(appData, col = 8) {

    // menu
    appData['menu'] = ['Main Page', ...cards[0], 'delimiter', 'Repeat difficult words', 'delimiter', 'Statistics'];
    appData['cards'] = [];

    appData.statCards = appData.statCards.sort(function (a, b) {
      if (a.miss < b.miss) return 1;
      if (a.miss == b.miss) return 0;
      if (a.miss > b.miss) return -1;

    });

    //console.log('statCards --', appData.statCards);
    for (let index = 0; index < 8; index++) {
     if (appData.statCards[index].miss>0) {
      appData['cards'].push(appData.statCards[index]);
     }
      
    }

    return  appData;

  }
}