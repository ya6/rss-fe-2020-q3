const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    //  keys: []
  },

  textarea: document.querySelector('.use-keyboard-input'),
  switcher: 0,


  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false
  },

  keyLayout: [
    ["`", "", "~"],
    ["1", "", "!"],
    ["2", "", "@"],
    ["3", "", "#"],
    ["4", "", "$"],
    ["5", "", "%"],
    ["6", "", "^"],
    ["7", "", "&"],
    ["8", "", "*"],
    ["9", "", "("],
    ["0", "", ")"],
    ["-", "", "_"],
    ["+", "", "+"],
    ["backspace", ""],
    ["q", "Q"],
    ["w", "W"],
    ["e", "E"],
    ["r", "R"],
    ["t", "T"],
    ["y", "Y"],
    ["u", "U"],
    ["i", "I"],
    ["o", "O"],
    ["p", "P"],
    ["[", ""],
    ["]", ""],
    ["keyboard_capslock", ""],
    ["a", "A"],
    ["s", "S"],
    ["d", "D"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    [";", ""],
    ["'", ""],
    ["\\", ""],
    ["enter", ""],
    ["shift", ""],
    ["z", "Z"],
    ["x", "X"],
    ["c", "C"],
    ["v", "V"],
    ["b", "B"],
    ["n", "N"],
    ["m", "M"],
    [",", ""],
    [".", ""],
    ["?", ""],
    ["done", ""],
    ["space", ""]
  ],

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "1keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.classList.add("brd");

    this.elements.keysContainer.appendChild(this._createKeys());


    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);


    this.elements.keysContainer.addEventListener('click', this._keyPressHandler);
  },
  _createKeys() {
    // console.log('#_createKeys');

    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    this.keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "]", "enter", "?"].indexOf(key[this.switcher]) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key[this.switcher]) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          break;


        case "keyboard_capslock":
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
  //  console.log(e.target);

    Keyboard.textarea.focus();

    const currentKey = e.target.tagName == "I" ? e.target.parentElement : e.target;
    const currentKeyContent = currentKey.textContent;

    switch (currentKeyContent) {

      case "backspace":
        Keyboard.textarea.value = Keyboard.textarea.value.substring(0, Keyboard.textarea.value.length - 1);

        break;

      case "keyboard_capslock":
        currentKey.classList.toggle("keyboard__key--active");
        Keyboard.properties.capsLock = !Keyboard.properties.capsLock;
        Keyboard.switcher = Keyboard.switcher === 1 ? 0 : 1;


        Keyboard._updateKeys()

        break;

      case 'space_bar':
        Keyboard.textarea.value += ' ';
        break;

      default:
        Keyboard.textarea.value += currentKeyContent;
        break;
    }


  },

   _createIconHTML(icon_name) {
    return `<i class="material-icons">${icon_name}</i>`;
  },

  _updateKeys() {
    console.log('#_updateKeys');

    let keysCount = 0;
    let test;
  //  console.log(this.elements.keysContainer.children);


    for (const key of this.elements.keysContainer.children) {

      if (key.textContent.length === 1) {
       // console.log(Keyboard.keyLayout[keysCount][Keyboard.switcher] !== "");
        key.textContent = (Keyboard.keyLayout[keysCount][Keyboard.switcher] !== "") ? this.keyLayout[keysCount++][Keyboard.switcher] : this.keyLayout[keysCount++][0];

      //  console.log(key.textContent + "---" + test);


      } else if (key.textContent.length > 1) {
       keysCount++;
      }




    }

  }


}

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});