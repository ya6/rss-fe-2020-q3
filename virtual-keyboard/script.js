const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,

  },

  textarea: document.querySelector('.use-keyboard-input'),
  switcher: 0,
  shiftPress: false,
  volume: false,
  speech: false,

  properties: {
    value: "",
    capsLock: false,
    shift: false,

  },

  keyLayout: [
    ["`", "~", "`", "~"],
    ["1", "!", "1", "!"],
    ["2", "@", "2", "@"],
    ["3", "#", "3", "#"],
    ["4", "$", "4", "$"],
    ["5", "%", "5", "%"],
    ["6", "^", "6", "^"],
    ["7", "&", "7", "&"],
    ["8", "*", "8", "*"],
    ["9", "(", "9", "("],
    ["0", ")", "0", ")"],
    ["-", "_", "-", "_"],
    ["=", "+", "=", "+"],
    ["Backspace", "Backspace", "Backspace", "Backspace"],
    ["q", "Q", "й", "Й"],
    ["w", "W", "ц", "Ц"],
    ["e", "E", "у", "У"],
    ["r", "R", "к", "К"],
    ["t", "T", "е", "Е"],
    ["y", "Y", "н", "Н"],
    ["u", "U", "г", "Г"],
    ["i", "I", "ш", "Ш"],
    ["o", "O", "щ", "Щ"],
    ["p", "P", "з", "З"],
    ["[", "{", "х", "Х"],
    ["]", "}", "ъ", "Ъ"],
    ["caps", "caps", "caps", "caps"],
    ["a", "A", "ф", "Ф"],
    ["s", "S", "ы", "Ы"],
    ["d", "D", "в", "В"],
    ["f", "F", "а", "А"],
    ["g", "G", "п", "П"],
    ["h", "H", "р", "Р"],
    ["j", "J", "о", "О"],
    ["k", "K", "л", "Л"],
    ["l", "L", "д", "Д"],
    [";", ":", ";", ":"],
    ["'", '"', ";", ":"],
    ["\\", "|", ";", ":"],
    ["Enter", "Enter", "Enter", "Enter"],
    ["shift", "shift", "shift", "shift"],
    ["z", "Z", "я", "Я"],
    ["x", "X", "ч", "Ч"],
    ["c", "C", "с", "С"],
    ["v", "V", "м", "М"],
    ["b", "B", "и", "И"],
    ["n", "N", "т", "Т"],
    ["m", "M", "ь", "Ь"],
    [",", "<", "б", "Б"],
    [".", ">", "ю", "Ю"],
    ["/", "?", ".", ","],
    ["done", "done", "done", "done"],
    [" ", " ", " ", " "],
    ["EN", "EN", "RU", "RU"],
    ["ArrowLeft", "ArrowLeft", "ArrowLeft", "ArrowLeft", ],
    ["ArrowRight", "ArrowRight", "ArrowRight", "ArrowRight"],
    ["volume_mute", "volume_mute", "volume_mute", "volume_mute"],
    ["mic", "mic", "mic", "mic"]
  ],

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");

    this.elements.keysContainer.appendChild(this._createKeys());


    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);


    this.elements.keysContainer.addEventListener('click', this._keyPressHandler);
    this.textarea.addEventListener('click', () => {
      this.elements.main.classList.remove("keyboard--hidden");
    })
    document.addEventListener('keydown', this._keydown);
    document.addEventListener('keyup', this._keyup);




  },

  _keyup(e) {

    if (e.key == "Shift" && !Keyboard.properties.shift) {
      Keyboard.switcher -= 1;
      Keyboard.shiftPress = false;
      Keyboard._updateKeys();
    }
  },

  _keydown(e) {


    if (e.key == 'CapsLock') {
      Keyboard._pressCapslock()
    };

    if (e.key == "Shift" && !e.altKey && !Keyboard.properties.shift) {


      if (!Keyboard.shiftPress) Keyboard.switcher += 1;
      Keyboard.shiftPress = true;
      Keyboard._updateKeys();
    }

    // if (e.shiftKey && e.altKey) { 


    //   if (lang.dataset.name == 'en') {
    //     lang.dataset.name = 'ru';
    //     lang.textContent = "RU";
    //   } else {
    //     lang.dataset.name = 'en';
    //     lang.textContent = "EN"
    //   };

    //   Keyboard.switcher = lang.dataset.name == 'en' ? Keyboard.switcher - 2 : Keyboard.switcher + 2;

    //   Keyboard._updateKeys();

    // };


    //keyboards deep integration! has bug 
    Keyboard.keyLayout.forEach((element, index) => {
      for (let i = 0; i < 4; i++) {
        if (element[i] == e.key) {


          if (Keyboard.switcher !== i) {

            if (lang.dataset.name == 'en') {
              lang.dataset.name = 'ru';
              lang.textContent = "RU";
            } else {
              lang.dataset.name = 'en';
              lang.textContent = "EN"
            };

            Keyboard.switcher = lang.dataset.name == 'en' ? i : i;
            if (Keyboard.properties.shift == true) Keyboard.switcher = Keyboard.switcher + 1;

            Keyboard._updateKeys();

          }

        }
      }
    })

    let curr;




    Keyboard.keyLayout.forEach((element, index) => {
      for (let i = 0; i < 4; i++) {
        if (element[i] == e.key) {

          curr = element[i];

          for (const key of Keyboard.elements.keysContainer.children) {

            if (key.textContent == curr || key.dataset.name == curr) {

              key.style.animation = 'none';
              setTimeout(function () {
                key.style.animation = 'changeColor 1.0s';
              }, 20);
            }
          }

          break;
        }
      }
    });

  },

  _createKeys() {

    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    this.keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["Backspace", "]", "Enter", "/"].indexOf(key[this.switcher]) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key[this.switcher]) {
        case "Backspace":
          keyElement.setAttribute('data-name', 'Backspace');
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          break;


        case "caps":
          keyElement.setAttribute('id', 'caps');
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          break;


        case "shift":
          keyElement.setAttribute('id', 'shift');
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("arrow_upward");

          break;

        case "Enter":
          keyElement.setAttribute('data-name', 'Enter');
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          break;

        case " ":
          keyElement.setAttribute('data-name', ' ');
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");


          break;

        case "ArrowLeft":
          keyElement.setAttribute('data-name', 'ArrowLeft');
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("arrow_left");

          break;

        case "ArrowRight":
          keyElement.setAttribute('data-name', 'ArrowLeft');
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("arrow_right");

          break;

        case "RU":
          keyElement.setAttribute('id', 'lang');
          keyElement.setAttribute('data-name', 'ru');
          keyElement.textContent = key[this.switcher];

          break;

        case "EN":
          keyElement.setAttribute('id', 'lang');
          keyElement.setAttribute('data-name', 'en');
          keyElement.textContent = key[this.switcher];

          break;

        case "volume_mute":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("volume_mute");
          break;

        case "mic":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("mic");
          keyElement.setAttribute('id', 'mic');


          break;


        default:
          keyElement.textContent = key[this.switcher];

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _keyPressHandler(e) {


    Keyboard.textarea.focus();
    if (e.target.tagName == "DIV") {
      return;
    }

    const currentKey = e.target.tagName == "I" ? e.target.parentElement : e.target;
    const currentKeyContent = currentKey.textContent;
    const cursorPosition = Keyboard.textarea.selectionStart;


    switch (currentKeyContent) {

      case "backspace":
        if (Keyboard.volume) _sound_1.play();

        if (cursorPosition == 0) break;

        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition - 1) + Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);

        break;

      case "keyboard_return":
        if (Keyboard.volume) _sound_2.play();
        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition) + '\r\n' + Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);

        break;

      case "keyboard_capslock":
        if (Keyboard.volume) _sound_3.play();
        Keyboard._pressCapslock(currentKey);

        break;


      case "RU":
        if (Keyboard.volume) _sound_3.play();
        Keyboard.switcher = Keyboard.switcher - 2;
        Keyboard._updateKeys();

        break;

      case "EN":
        if (Keyboard.volume) _sound_3.play();
        Keyboard.switcher = Keyboard.switcher + 2;

        Keyboard._updateKeys();

        break;

      case "arrow_upward":
        if (Keyboard.volume) _sound_4.play();
        Keyboard._pressShift(currentKey);

        break;

      case 'space_bar':
        if (Keyboard.volume) _sound_2.play();
        Keyboard.textarea.value += ' ';
        break;

      case 'arrow_left':
        if (Keyboard.volume) _sound_1.play();
        let prevPosition = Keyboard.textarea.selectionStart - 1;
        Keyboard.textarea.setSelectionRange(prevPosition, prevPosition);

        break;


      case 'arrow_right':
        if (Keyboard.volume) _sound_1.play();
        let nextPosition = Keyboard.textarea.selectionStart + 1;
        Keyboard.textarea.setSelectionRange(nextPosition, nextPosition);

        break;

      case 'check_circle':
        Keyboard.elements.main.classList.add("keyboard--hidden");

        break;

      case "volume_mute":
        _sound_3.play();
        Keyboard._pressSound(currentKey);

        break;

      case "mic":
        if (Keyboard.volume) _sound_3.play();
        Keyboard._pressSpeech();

        break;




      default:
        if (Keyboard.volume) {
          if (Keyboard.switcher == 0 || Keyboard.switcher == 1) _sound_1.play();
          else _sound_5.play();
        }


        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition) + currentKeyContent + Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        break;
    }

  },

  _pressSpeech() {
    

    mic.classList.toggle("keyboard__key--active");
    Keyboard.speech = !Keyboard.speech;


    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    if (Keyboard.speech)  recognition.start();

      recognition.onend = function () {
        if (Keyboard.speech) recognition.start();
        else recognition.stop();
      }

      recognition.onresult = function (e) {
        var transcript = e.results[0][0].transcript;
        if(Keyboard.speech) Keyboard.textarea.value += transcript;

    }

  },

  _pressSound(currentKey) {
    currentKey.classList.toggle("keyboard__key--active");
    Keyboard.volume = !Keyboard.volume;
    Keyboard._updateKeys()
  },


  _pressCapslock(currentKey) {

    currentKey = currentKey ? currentKey : caps //id
    currentKey.classList.toggle("keyboard__key--active");
    Keyboard.properties.capsLock = !Keyboard.properties.capsLock;
    Keyboard._updateKeys()
  },

  _pressShift(currentKey) {
    currentKey = currentKey ? currentKey : shift //id
    currentKey.classList.toggle("keyboard__key--active");
    Keyboard.properties.shift = !Keyboard.properties.shift;

    if (Keyboard.properties.shift)
      Keyboard.switcher += 1;
    else Keyboard.switcher -= 1;

    Keyboard._updateKeys();
  },

  _createIconHTML(icon_name) {
    return `<i class="material-icons">${icon_name}</i>`;
  },

  _updateKeys() {

    let keysCount = 0;


    for (const key of this.elements.keysContainer.children) {

      if (key.textContent.length > 0 && key.textContent.length < 3) {
        key.textContent = (Keyboard.keyLayout[keysCount][Keyboard.switcher] !== "") ?
          this.keyLayout[keysCount++][Keyboard.switcher] : this.keyLayout[keysCount++][0];

        if (this.properties.capsLock) {
          key.textContent = key.textContent.toUpperCase();
        }

      } else if (key.textContent.length > 2) {
        keysCount++;
      }
    }




  }



}

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});