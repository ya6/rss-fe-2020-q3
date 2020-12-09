import statCards from './../data/cards';
import Router from './router';


export default class Statistics {

  static renderStatistics(container, appData) {
   // console.log('Statistics @renderStatistics', appData);

   const statCards = appData.statCards;


    container.innerHTML = '';
    if (typeof table !== 'undefined') {
      table.parentElement.removeChild(table);
    }
    let content = [];
    let div = document.createElement('div');
    div.setAttribute('id', 'table');





    const part_1 = ` 
    
    <div class="d-flex justify-content-end mb-2">
    <button id ="difficult" class="btn btn-warning m-2" type="button">Repeat difficult words</button>
    <button  id= "reset" class="btn btn-danger m-2" type="button">Reset</button>
    </div> 
    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
          <thead>
          <tr>    
              <th class="th-sm "><div class="d-flex justify-content-between align-items-center p-1">
              <div class=""> Category </div >
              <div  class="" style="width: 30px; height:30px">
              <input  type="radio" id="stateInput">
              <label  for="stateInput" class="arrows"></label>
              </div>
              </div>
                </th>
                <th class="th-sm"> Word
                </th>
                <th class="th-sm">Transl
                </th>
                <th class="th-sm">Hit
                </th>
                <th class="th-sm">Miss
                </th>
                <th class="th-sm">% of Hits
                </th>
                <th class="th-sm">Train
                </th>
              </tr>
            </thead>
            <tbody>`;

    content.push(part_1);

    //inner content
    // for (let index = 0; index < statCards[0].length; index++) {
    
    //   for (let card of statCards[index + 1]) {

    //     let hitPercent = card.hit == 0 ? 0 : Math.round(card.hit / (card.hit + card.mis) * 100);
    //     let part_2_2 = `
    //     <tr>
    //     <td>${card.category}</td>
    //     <td>${card.word}</td>
    //     <td>${card.translation}</td>
    //     <td>${card.hit}</td>
    //     <td>${card.mis}</td>
    //     <td>${hitPercent}</td>
    //     <td>${card.train}</td>
    //     </tr>
    //      `

    
    
      for (let card of statCards) {

        let hitPercent = card.hit == 0 ? 0 : Math.round(card.hit / (card.hit + card.mis) * 100);
        let part_2_2 = `
        <tr>
        <td>${card.category}</td>
        <td>${card.word}</td>
        <td>${card.translation}</td>
        <td>${card.hit}</td>
        <td>${card.mis}</td>
        <td>${hitPercent}</td>
        <td>${card.train}</td>
        </tr>
         `

        content.push(part_2_2);
      }
    

    const part_3 = ` </tbody>
  <tfoot>
  <tr>
  <th class="th-sm" data-sort="name" data-order="desc">Category
                </th>
  <th class="th-sm" data-sort="name" data-order="desc">Word
  </th>
  <th class="th-sm">Translation
  </th>
  <th class="th-sm">Hit
  </th>
  <th class="th-sm">Miss
  </th>
  <th class="th-sm">% of Hits
  </th>
  <th class="th-sm">Train
  </th>
</tr>
  </tfoot>
</table>`

    content.push(part_3);

    div.innerHTML = `${content.join('')}`;

    container.parentElement.append(div);
  }


  static makeStatisticsData(appData) {
   //   console.log('Statistic @makeStatisticsData -> statCards ', appData);
const _statCards = [];
    for (let index = 0; index < statCards[0].length; index++) {

      for (let card of statCards[index + 1]) {

        card.hit = 0;
        card.mis = 0;
        card.train = 0;
        card.category = statCards[0][index];
        _statCards.push(card);
      }
    }
appData.statCards = _statCards;

const cardFilter = {'category': false,
'word': false,
'Translate': false,
'Hit': false,
'Miss': false,
'percent': false,
'train': false

}
appData.cardFilter = cardFilter;

    return appData;
  }


  static addPointToStatistic(appData, word, type) {
    
    for (const card of appData.statCards) {
      if (card.word === word) {
        card[type] += 1;
      }
    }
    this.saveStatistics(appData);

  }

  static saveStatistics(appData) {
    // console.log('Statistics @saveStatistics', appData.statCards);

    localStorage.setItem('statistics', JSON.stringify(appData.statCards));

  }

  static loadStatistics(appData) {
  //  console.log('Statistics @loadStatistics', appData);


    const statCards = JSON.parse(localStorage.getItem('statistics'));
    //  console.log('Statistics @loadStatistics statCards', statCards);

    if (statCards !== null) {

      appData.statCards = statCards;

     // console.log('Statistics @loadStatistics -1-');

      return appData;
    }
    else {
     // console.log('Statistics @loadStatistics ');
      return this.makeStatisticsData(appData);
    }
   
  }

  static sortStatistics(appData,asc) {
   // console.log('Statistics @sortStatistics statCards',  asc);

    if(asc) {appData.statCards= appData.statCards.sort(function(a,b){
      if ( a.word>b.word) return 1;
      if ( a.word==b.word) return 0;
      if ( a.word<b.word) return -1;
      // a.category>b.category
    })} else {
    appData.statCards= appData.statCards.sort(function(a,b){
      if ( a.word<b.word) return 1;
      if ( a.word==b.word) return 0;
      if ( a.word>b.word) return -1;
      // a.category>b.category
    })};
    // console.log('Statistics @sortStatistics statCards', appData.statCards);
     this.saveStatistics(appData);

Router.route(appData);
  }

}