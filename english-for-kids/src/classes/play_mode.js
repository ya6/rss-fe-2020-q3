 import './../../helpers/_setArrayCustomMethods';
 //import _delay from './../../helpers/_delay';
 import Card from "./card";

 export default class PlayMode {

     static set appData(appData) {
         this._appData = appData;
     }
     static get appData() {
         return this._appData;
     }


     static setGame() {
         console.log('PlayMode @setGame');

         this.setShuffleCards();
         this.changeForRepeatButton();
         this.playGame();


     }

     static playGame() {
         console.log('PlayMode @playGame');

         if (this.appData['playCards'].length == 0) {
             // this.winGame();
             setTimeout(function () {
                 PlayMode.winGame()
             }, 1000);

         }
         //  this.playLast();
         setTimeout(function () {
             PlayMode.playLast()
         }, 500);

     }
     //todo

     //gen rand sound
     static setShuffleCards() {

         this.appData['playCards'] = this.appData['cards'].sort(() => Math.random() - 0.5);
     }

     static playLast() {
         console.log('PlayMode @playLast');
         if (this.appData['playCards'].length == 0) {
             return

         }
         const cards = this.appData['playCards'];

         Card.play(cards.last().audioSrc);
     }

     //handle sound & cards -> draw stars
     static checkCard(clickedCard) {
         console.log('PlayMode @checkCard');

         const cardName = this.appData['playCards'].last().word;
         const starContainer = document.querySelector('.stars');

         //correct
         if (clickedCard.dataset.name == cardName) {

             const div = document.createElement('div');
             div.className = 'star--gold';
             starContainer.appendChild(div);
             Card.play('audio/correct.mp3');
             this.appData['playCards'].pop();
             clickedCard.classList.add('card__correct');
             this.playGame();


             //error
         } else {
             const div = document.createElement('div');
             div.className = 'star-grey';
             starContainer.appendChild(div);
             Card.play('audio/error.mp3')
         }
     }

     //handle repeat sound
     //    button

     static changeForRepeatButton() {
         console.log('PlayMode @changeForRepeatButton');
         let btn = document.querySelector('.game__button');
         const btn_parent = btn.parentNode;
         //del
         btn_parent.removeChild(btn);
         //ins
         btn_parent.innerHTML = `<button type="button" class="repeat__button btn text-light mx-auto">Repeat</button>`;
     }
     static winGame() {
         alert('win');
     }

     //    play again
     //set stars
     //gen win game

 }