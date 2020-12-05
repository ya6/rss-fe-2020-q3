
import cards from './../data/cards';


export default class Statistics {
    static renderStatistics(container){
         
          //  appData['is_statistics'] = true;

          container.innerHTML = '';

            let content = [];
            let div = document.createElement('div');


            const part1 = `<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
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
            </thead>
            <tbody>`;

            const part2 = `<tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>`;


          //inner content
           

            const part3 = ` </tbody>
  <tfoot>
    <tr>
      <th>Name
      </th>
      <th>Position
      </th>
      <th>Office
      </th>
      <th>Age
      </th>
      <th>Start date
      </th>
      <th>Salary
      </th>
    </tr>
  </tfoot>
</table>`

             content.push(part1, part2, part3);
            div.innerHTML = `${content.join('')}`;

            container.append(div);
    }
} 