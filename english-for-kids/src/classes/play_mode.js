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
         this.changeForRepeatButton()
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
         const starContainer = document.querySelector('.stars')

         console.log(cardName);

         if (clickedCard.dataset.name == cardName) {
             console.log('ok');
             const div = document.createElement('div');
             div.className = 'star--gold';
             starContainer.appendChild(div);
             Card.play('audio/correct.mp3');
             this.appData['playCards'].pop();
             clickedCard.classList.add('card__correct');




         } else {
             console.log('not');
             const div = document.createElement('div');
             div.className = 'star-grey';
             starContainer.appendChild(div);
             Card.play('audio/error.mp3')
         }
     }

     //handle repeat sound
     //    button
     static  changeForRepeatButton() {
         console.log('PlayMode @changeForRepeatButton');
         const btn = document.querySelector('.game__button');
         btn.classList.remove('game__button');
         btn.classList.add('repeat__button');

         btn.textContent = 'Repeat';
     }
     //    play again
     //set stars
     //gen win game


 }