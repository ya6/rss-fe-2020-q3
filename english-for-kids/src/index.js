  import _log from './../helpers/_log';

  import category_cards from './data/category_cards';
  import Card from './classes/card';
  import Toggler from './classes/toggler';

  // import './assets/favicon.ico';

  import './main.scss';

  //start

  let container = document.querySelector('.container__inner');
  const card = new Card;
  card.getCards(container, category_cards);

  let cb = document.querySelector('#cb');
  const toggler = new Toggler;

  cb.addEventListener('change',{handleEvent: toggler.changeHandler, category_cards} );