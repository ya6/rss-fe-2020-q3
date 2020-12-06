 import './../../helpers/_setArrayCustomMethods';
 //import _delay from './../../helpers/_delay';
 import Card from "./card";
 import Router from './router';
import Statistics from './statistics';
 import TrainMode from './train_mode';

 export default class PlayMode {

     static set appData(appData) {
         this._appData = appData;
     }
     static get appData() {
         return this._appData;
     }


     static setGame() {
       //  console.log('PlayMode @setGame');
         this.appData['errors'] = 0;

         this.setShuffleCards();
         this.changeForRepeatButton();
         this.playGame();
         //this.makePopup('win.png', 'Cool!');
         //this.makePopup('mis.png', 'Has to work');
     }

     static playGame() {
        // console.log('PlayMode @playGame');

         //win
         if (this.appData['playCards'].length == 0) {

             setTimeout(function () {
                 PlayMode.winGame()
             }, 1000);
         }

         setTimeout(function () {
             PlayMode.playLast()
         }, 500);
     }


     //gen rand sound
     static setShuffleCards() {
         this.appData['playCards'] = this.appData['cards'].sort(() => Math.random() - 0.5);
     }


     static playLast() {
        // console.log('PlayMode @playLast');
         if (this.appData['playCards'].length == 0) return;

         const cards = this.appData['playCards'];

         Card.play(cards.last().audioSrc);
     }

     //handle sound & cards -> draw stars
     static checkCard(clickedCard) {
        // console.log('PlayMode @checkCard');

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

            //statistic
            Statistics.addPointToStatistic(this.appData, clickedCard.dataset.name, 'hit');

             this.playGame();

             //error
         } else {
             this.appData['errors'] += 1;
             const div = document.createElement('div');
             div.className = 'star-grey';
             starContainer.appendChild(div);
             Card.play('audio/error.mp3');
               //statistic
            Statistics.addPointToStatistic(this.appData, clickedCard.dataset.name, 'mis');

         }
     }

     //handle change for repeat button
     static changeForRepeatButton() {
        // console.log('PlayMode @changeForRepeatButton');
         let btn = document.querySelector('.game__button');
         const btn_parent = btn.parentNode;
         //del
         btn_parent.removeChild(btn);
         //ins
         btn_parent.innerHTML = `<button type="button" class="repeat__button btn text-light mx-auto">Repeat</button>`;
     }

     static winGame() {

         if (this.appData['errors'] == 0) {
             Card.play('audio/success.mp3');

             this.makePopup('win.png', 'Cool!')
         } else {
             Card.play('audio/failure.mp3');

             this.makePopup('mis.png', 'Has to work!');
         }
     }

     static makePopup(src, mess) {
         const div = document.createElement('div');
         div.className = 'popup';
         div.innerHTML = `<div class="mx-auto">
         <img src="./assets/img/${src}" class="popup__img">
         </div>
         <div class=""><button  class="btn btn-warning" type="button">${mess}</button></div>`;

         document.body.appendChild(div);
         const btb_warning = document.querySelector('.btn-warning');

         btb_warning.addEventListener('click', PlayMode.goToMainPage);

     }

     static goToMainPage() {

         TrainMode.setTrainMode();
         TrainMode.clearGameAttributes();
         PlayMode.appData['page'] = "Main Page";
         PlayMode.appData['play'] = false;

         Router.route(PlayMode.appData);
     }
 }