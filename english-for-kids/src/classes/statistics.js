import statCards from './../data/cards';


export default class Statistics {
  static renderStatistics(container, addData) {


    const statCards = this.loadStatistics();
    // console.log('Statistics @renderStatistics', statCards);

    container.innerHTML = '';
    if (typeof table !== 'undefined') {
      table.parentElement.removeChild(table);
    }
    let content = [];
    let div = document.createElement('div');
    div.setAttribute('id', 'table');





    const part_1 = `<div class="d-flex justify-content-end m-2">
    <button id ="difficult" class="btn btn-warning m-2" type="button">Repeat difficult words</button>
    <button  id= "reset" class="btn btn-danger m-2" type="button">Reset</button>
    </div> 
    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
          <thead>
          <tr>    
              <th class="th-sm"> Category
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

    for (let index = 0; index < statCards[0].length; index++) {
      //  let part_2_1 = `<tr><td bgcolor="#d9fcf7" colspan="6">${statCards[0][index]}</td></tr>`
      // content.push(part_2_1);

      for (let card of statCards[index + 1]) {

        let hitPercent = card.hit == 0 ? 0 : Math.round(card.hit / (card.hit + card.mis) * 100);
        let part_2_2 = `
        <tr>
        <td>${statCards[0][index]}</td>
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


  static makeStatisticsData() {
    //  console.log('Statistic @makeStatisticsData -> statCards ', statCards);

    for (let index = 0; index < statCards[0].length; index++) {

      for (let card of statCards[index + 1]) {

        card.hit = 0;
        card.mis = 0;
        card.train = 0;

      }
    }

    return statCards;
  }


  static addPointToStatistic(appData, word, type) {
    // console.log('Statistic @PlusPointToStatistic', appData, word, type);

    const category = appData.statCards[0].indexOf(appData.page) + 1;
    for (const card of appData.statCards[category]) {
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

  static loadStatistics() {

    const statCards = JSON.parse(localStorage.getItem('statistics'));
    //  console.log('Statistics @loadStatistics statCards', statCards);

    if (statCards !== null) {

      return (statCards);

    } else {

      return this.makeStatisticsData();
    }
  }
}