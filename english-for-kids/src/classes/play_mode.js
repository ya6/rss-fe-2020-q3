 import './../../helpers/_setArrayCustomMethods'
 import Card from "./card";

 export default class PlayMode {

     static set appData(appData) {
         this._appData = appData;
     }
     static get appData() {
         return this._appData;
     }


     static play() {
         //   console.log('PlayMode @play');
         // console.log(PlayMode.appData);

         this.setShuffleCards();
         this.playLast();

     }
     //todo

     //gen rand sound
     static setShuffleCards() {
         //  console.log(this.appData['cards']);
         this.appData['playCards'] = this.appData['cards'].sort(() => Math.random() - 0.5);
     }


     static playLast() {

         const cards = this.appData['playCards'];
         //  console.log(cards.last().audioSrc);
         Card.play(cards.last().audioSrc);
     }

     //handle sound & cards -> draw stars

     static checkCard(clickedCard) {
         console.log('PlayMode @checkCard', clickedCard.dataset.name);
         //   const cardName = this.appData['playCards'].last().name;
         const cardName = this.appData['playCards'].last().word;

         console.log(cardName);

         if (clickedCard.dataset.name == cardName) {
             console.log('ok');

         } else {
             console.log('not');
         }
     }

     //handle repeat sound
     //button
     //set stars
     //gen win game


 }