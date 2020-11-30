import cards from './../data/cards'
export default  class MakeData {


      static makePage(page) {
       

        let data = {cards:[],
        menu:[]};
            let ind = 1;
            for (let card of  cards[0]) {
              data['cards'].push({
                name: card,
                src: cards[ind][0].image
              });
              data['menu'].push(card)
              ind+=1;
            }
         
            return data;

    }
}