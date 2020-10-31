const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    //  keys: []
  },

  textarea: document.querySelector('.use-keyboard-input'),
  switcher: 0,

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
    ["backspace", "backspace", "backspace", "backspace"],
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
    ["enter", "enter", "enter", "enter"],
    ["shift", "shift", "shift", "shift"],
    ["z", "Z", "я", "Я"],
    ["x", "X", "ч", "Ч"],
    ["c", "C", "с", "С"],
    ["v", "V", "м", "М"],
    ["b", "B", "и", "и"],
    ["n", "N", "т", "Т"],
    ["m", "M", "ь", "Ь"],
    [",", "<", "б", "Б"],
    [".", ">", "ю", "Ю"],
    ["/", "?", ".", ","],
    ["done", "done", "done", "done"],
    ["space", "space", "space", "space"],
    ["EN", "EN", "RU", "RU"],
    ["arrow_left", "arrow_left", "arrow_left", "arrow_left", ],
    ["arrow_right", "arrow_right", "arrow_right", "arrow_right"]
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
    this.textarea.addEventListener('click', ()=>{ this.elements.main.classList.remove("keyboard--hidden");})

   
  },
  _createKeys() {

    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    this.keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "]", "enter", "/"].indexOf(key[this.switcher]) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key[this.switcher]) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          break;


        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          break;


        case "shift":

          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("arrow_upward");

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");
          // keyElement.addEventListener('click', () => {
          // //  this.properties.value = "";
          //   this.elements.main.classList.add("keyboard--hidden");
          // });

          break;

        case "arrow_left":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("arrow_left");

          break;

        case "arrow_right":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("arrow_right");

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
    console.log('#_keyPressHandler');

    Keyboard.textarea.focus();
    if (e.target.tagName == "DIV") {
      return;
    }

    const currentKey = e.target.tagName == "I" ? e.target.parentElement : e.target;
    const currentKeyContent = currentKey.textContent;
    const cursorPosition = Keyboard.textarea.selectionStart;
    console.log(cursorPosition);

    switch (currentKeyContent) {

      case "backspace":

        if (cursorPosition == 0 )  break;

        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition - 1)+Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition-1, cursorPosition-1);
       

        break;

      case "keyboard_return":
        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition)+'\r\n'+Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition+1, cursorPosition+1);
       

        break;

      case "keyboard_capslock":
        currentKey.classList.toggle("keyboard__key--active");
        Keyboard.properties.capsLock = !Keyboard.properties.capsLock;
        Keyboard._updateKeys()

        break;

      case "RU":
        Keyboard.switcher = Keyboard.switcher - 2;
        Keyboard._updateKeys()

        break;

      case "EN":
        Keyboard.switcher = Keyboard.switcher + 2;
        Keyboard._updateKeys()

        break;

      case "arrow_upward":
        currentKey.classList.toggle("keyboard__key--active");
        Keyboard.properties.shift = !Keyboard.properties.shift;

        if (Keyboard.properties.shift)
          Keyboard.switcher += 1;
        else Keyboard.switcher -= 1;

        Keyboard._updateKeys();

        break;

      case 'space_bar':
        Keyboard.textarea.value += ' ';
        break;

      case 'arrow_left':
        let prevPosition = Keyboard.textarea.selectionStart - 1;
        Keyboard.textarea.setSelectionRange(prevPosition, prevPosition);

        break;


      case 'arrow_right':
        let nextPosition = Keyboard.textarea.selectionStart + 1;
        Keyboard.textarea.setSelectionRange(nextPosition, nextPosition);

        break;

        case 'check_circle':
              Keyboard.elements.main.classList.add("keyboard--hidden");

          break;
        

      default:
        Keyboard.textarea.value = Keyboard.textarea.value.slice(0, cursorPosition)+currentKeyContent+Keyboard.textarea.value.slice(cursorPosition);
        Keyboard.textarea.setSelectionRange(cursorPosition+1, cursorPosition+1);
        break;
    }

  },

  _createIconHTML(icon_name) {
    return `<i class="material-icons">${icon_name}</i>`;
  },

  _updateKeys() {
    console.log('#_updateKeys');
    console.log(this.switcher);

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