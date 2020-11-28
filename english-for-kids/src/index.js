  import _log from './../helpers/_log';

  import category_cards from './data/category_cards';
  import Card from './classes/card';
  
  // import './assets/favicon.ico';

 import './main.scss';

//start

 let container = document.querySelector('.container__inner');
 const _card = new Card;
 _card.getCards(container, category_cards);



