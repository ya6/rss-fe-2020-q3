import Card from "./card";

export default class PlayMode {
    constructor(appData) {
this.appData = appData;

Array.prototype.last = function() {
    return this[this.length - 1];
   }
    }


     play() {
        console.log('PlayMode @play');
        this.setShuffleCards();
        this.playLast();
        
    }
    //todo
    //gen rand sound
     setShuffleCards() {
       //  console.log(this.appData['cards']);
           this.appData['playCards'] =  this.appData['cards'].sort(() => Math.random() - 0.4);
    }


    //play last
    playLast() {
        
     const cards =  this.appData['playCards'];
       console.log(cards.last().audioSrc);
       Card.play(cards.last().audioSrc);
    }

   //handle sound & cards -> draw stars

   checkCard(){
    console.log('PlayMode @checkCard');
   }
   //handle repeat sound
        //button
   //gen win game

}