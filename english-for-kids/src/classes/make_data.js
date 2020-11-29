export default  class MakeData {
constructor (cards) {
    this.cards = cards;
}

    makeMain(cards = this.cards) {

        let data = [];
            let ind = 1;
            for (let card of cards[0]) {
              data.push({
                name: card,
                src:  cards[ind][0].image
              });
              ind+=1;
            }
         
            return data;

    }
}