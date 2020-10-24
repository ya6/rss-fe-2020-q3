// menu

let a = document.querySelectorAll('.header__menu__list__link');

a.forEach(function (element) {

    element.addEventListener('mouseenter', function (event) {
        let targ = event.target;

        if (targ.dataset.status != undefined && targ.dataset.status == 'disabled') {

            targ.style.color = "#cdcdcd";
            targ.style.cursor = "default";
        }
    });
});


// slider

let pets_container = document.querySelector('.slider_way');
let start = 0;
let card;

let pets = [];
fetch('../../assets/pets.json')
    .then((response) => {
        return response.json();
    })
    .then((pets_array) => {

        pets = pets_array.slice();
        pets = shuffle(pets);

        set_cards(pets, 'start');

        prev.addEventListener('click', function () {
            set_cards(pets, 'prev')
        });

        next.addEventListener('click', function () {
            set_cards(pets, 'next')
        });

    });


function shuffle(array) {

    return array.sort(() => Math.random() - 0.4);
}


function create_card(index) {
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardHeaderImg = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardBodyTitle = document.createElement('h4');
    const cardButton = document.createElement('button');

    card.className = 'pets__slider__card';
    cardHeader.className = 'pets__card__header';
    cardBody.className = 'pets__card__body';
    cardBodyTitle.className = 'pets__card__title';
    cardButton.className = 'pets__card__button';

    cardBodyTitle.textContent = pets[index].name;
    cardButton.textContent = 'Learn more';

    cardHeaderImg.src = pets[index].img;
    cardHeaderImg.alt = pets[index].name;

    cardHeader.appendChild(cardHeaderImg);
    card.appendChild(cardHeader);
    cardBody.appendChild(cardBodyTitle);
    cardBody.appendChild(cardButton);
    card.appendChild(cardBody);

    card.setAttribute('data-id', index);


    card.addEventListener('click', (event) => {
        openPopup(event.currentTarget.getAttribute('data-id'));
    });

    return card;
}


function set_cards(pets, direction) {

    pets_container.innerHTML = "";

    if (direction == "prev") {
        pets_container.style.animation = 'none';
        setTimeout(function () {
            pets_container.style.animation = 'prev 1.0s';
        }, 20);
    }

    if (direction == "next") {
        pets_container.style.animation = 'none';
        setTimeout(function () {
            pets_container.style.animation = 'next 1.0s';
        }, 20);
    }

    for (let index = 0; index < 3; index++) {
        card = create_card(start);
        start = (start + 1) % 8;
        if (direction == "prev")
            pets_container.prepend(card);
        else pets_container.append(card);
    }
}


//popup

let petsPopup = document.querySelector('.pets__popup');
let petsClose = document.querySelector('.pets__close');
let petsBlackout = document.querySelector('.pets__blackout');

petsBlackout.addEventListener('click', () => {
    closePopup()
})

petsClose.addEventListener('click', () => {
    closePopup()
})


function openPopup(index) {
    console
    fillPopup(index);
    petsPopup.classList.add('active');
    petsBlackout.classList.add('active');
    document.body.classList.toggle('scroll');
}


function closePopup() {
    petsPopup.classList.remove('active')
    petsBlackout.classList.remove('active')
    document.body.classList.remove('scroll')
}


function fillPopup(index) {

    const popupImg = document.querySelector('.pets__popup__img img');
    const popupName = document.querySelector('.pets__popup__name')
    const popupType = document.querySelector('.pets__popup__type')
    const popupDescription = document.querySelector('.pets__popup__description')

    popupImg.src = pets[index].img;
    popupImg.alt = pets[index].name;

    popupName.textContent = pets[index].name;
    popupType.textContent = `${pets[index].type} - ${pets[index].breed}`;
    popupDescription.textContent = pets[index].description;

    age.textContent = pets[index].age;
    inoculations.textContent = pets[index].inoculations.join(', ');
    diseases.textContent = pets[index].diseases.join(', ');
    parasites.textContent = pets[index].parasites.join(', ');

}