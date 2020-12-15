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
              <input  type="checkbox" class="stateInput"   id="stateInput_1" name='sort' ${appData.cardFilter.category}  value='category' >
              <label  for="stateInput_1" class="arrows"></label>
              </div>
              </div>
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> Word </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_2" name='sort'  ${appData.cardFilter.word} value='word'>
                <label  for="stateInput_2" class="arrows"></label>
                </div>
                </div>
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> Translation </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_3" name='sort' ${appData.cardFilter.translation} value='translation' ">
                <label  for="stateInput_3" class="arrows"></label>
                </div>
                </div>
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> Hit </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_4" name='sort' ${appData.cardFilter.hit} value='hit' >
                <label  for="stateInput_4" class="arrows"></label>
                </div>
                
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> Miss </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_5" name='sort' ${appData.cardFilter.miss} value='miss'>
                <label  for="stateInput_5" class="arrows"></label>
                </div>
                </div>
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> % of Hits </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_6" name='sort' ${appData.cardFilter.percent} value='percent'>
                <label  for="stateInput_6" class="arrows"></label>
                </div>
                </div>
                </th>
                <th class="th-sm">
                <div class="d-flex justify-content-between align-items-center p-1"> 
                <div class=""> Train </div >
                <div  class="" style="width: 30px; height:30px">
                <input  type="checkbox" class="stateInput" id="stateInput_7" name='sort' ${appData.cardFilter.train} value='train'>
                <label  for="stateInput_7" class="arrows"></label>
                </div>
                </div>
                </th>
              </tr>
            </thead>
            <tbody>`;

    content.push(part_1);

      for (let card of statCards) {

       // let hitPercent = card.hit == 0 ? 0 : Math.round(card.hit / (card.hit + card.miss) * 100);
        let part_2_2 = `
        <tr>
        <td>${card.category}</td>
        <td>${card.word}</td>
        <td>${card.translation}</td>
        <td>${card.hit}</td>
        <td>${card.miss}</td>
        <td>${card.percent}</td>
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
     // console.log('Statistic @makeStatisticsData', appData);
const _statCards = [];
    for (let index = 0; index < statCards[0].length; index++) {

      for (let card of statCards[index + 1]) {

        card.hit = 0;
        card.miss = 0;
        card.train = 0;
        card.percent = 0;
        card.category = statCards[0][index];
        _statCards.push(card);
      }
    }
appData.statCards = _statCards;

const cardFilter = {'category': 'checked',
'word': '',
'translation': '',
'hit': '',
'miss':'',
'percent': '',
'train': ''

}
appData.cardFilter = cardFilter;

    return appData;
  }


  static addPointToStatistic(appData, word, type) {
   // console.log('Statistic @addPointToStatistic', appData);
    
    
    for (const card of appData.statCards) {
      if (card.word === word) {
        card[type] += 1;
        card.percent = card.hit == 0 ? 0 : Math.round(card.hit / (card.hit + card.miss) * 100);
        
      }
    }
    
    this.saveStatistics(appData);

  }

  static saveStatistics(appData) {
    // console.log('Statistics @saveStatistics', appData);

    localStorage.setItem('statistics', JSON.stringify(appData.statCards));
    localStorage.setItem('filter', JSON.stringify(appData.cardFilter));

  }

  static loadStatistics(appData) {
   // console.log('Statistics @loadStatistics', appData);


    const statCards = JSON.parse(localStorage.getItem('statistics'));
    const cardFilter = JSON.parse(localStorage.getItem('filter'));
    //  console.log('Statistics @loadStatistics statCards', statCards);

    if (statCards !== null) {

      appData.statCards = statCards;
      appData.cardFilter = cardFilter;

      return appData;
    }
    else {

      return this.makeStatisticsData(appData);
    }
   
  }

  static sortStatistics(appData, el) {
   // console.log('Statistics @sortStatistics statCards',  el);
  
    const param = el.value;
  
    appData.cardFilter = {'category': '',
    'word': '',
    'translation': '',
    'hit': '',
    'miss':'',
    'percent': '',
    'train': ''
    
    }

    if ( el.checked) {
      appData.cardFilter[param] = 'checked';
      
    } else  appData.cardFilter[param] = '';


    if( el.checked) {appData.statCards= appData.statCards.sort(function(a,b){

      return a[param]>b[param];

    })} else {
    appData.statCards= appData.statCards.sort(function(a,b){

      return a[param]<b[param];
          
    })};

    

Router.route(appData);
  }

}