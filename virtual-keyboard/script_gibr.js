const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false
  },

   keyLayout : [
    ["`", "~"],
    ["1","!"],
    ["2","@"],
    ["3","#"],
    ["4","$"],
    ["5","%"],
    ["6","^"],
    ["7","&"],
    ["8","*"],
    ["9","("],
    ["0",")"],
    ["-","_"],
    ["+","+"],
    ["backspace"],
    ["q"],
    ["w"],
    ["e"],
    ["r"],
    ["t"],
    ["y"],
    ["u"],
    ["i"],
    ["o"],
    ["p"],
    ["["],
    ["]"],
    ["caps"],
    ["a"],
    ["s"],
    ["d"],
    ["f"],
    ["g"],
    ["h"],
    ["j"],
    ["k"],
    ["l"],
    [";"],
    ["'"],
    ["\\"],
    ["enter"],
    ["shift"],
    ["z"],
    ["x"],
    ["c"],
    ["v"],
    ["b"],
    ["n"],
    ["m"],
    [","],
    ["."],
    ["?"],
    ["done"],
    ["space"]
  ],

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
  //   document.querySelectorAll(".use-keyboard-input").forEach(element => {
  //     element.addEventListener("focus", () => {
  //       this.open(element.value, currentValue => {
  //         element.value = currentValue;
  //       });
  //     });
  //   });
  // },

  this.elements.keysContainer.addEventListener('click' , this._printChars);
  },
  _printChars(e) {
console.log(e)
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
      const insertLineBreak = ["backspace", "]", "enter", "?"].indexOf(key[0]) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key[0]) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });

          break;

        case "shift":

          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("arrow_upward");

          keyElement.addEventListener("click", () => {
           // console.log('shift-> press');
            this._toggleShift();
            keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
          });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });

          break;


        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        default:
          //console.log('default');
              
          if (this.properties.shift == true) {
          //  console.log('if ' + this.properties.shift);
          //  console.log('key[1] '+key[1] );
            keyElement.textContent = (typeof key[1] !== "undefined") ? key[1].toLowerCase() :' key[0].toLowerCase()';
          } else{
          //  console.log('else ' + this.properties.shift)
            keyElement.textContent = key[0].toLowerCase();
          }

          keyElement.addEventListener("click", () => {

            //Ya
           // console.log('press def key');
           // console.log(keyElement.textContent.charCodeAt(0));


            this.properties.value += this.properties.capsLock ? key[0].toUpperCase() : key[0].toLowerCase();
            this._triggerEvent("oninput");
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {

    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  _toggleShift() {
   // console.log('#_toggleShift');
    this.properties.shift = !this.properties.shift;

     let keysCount = 0;

    for (const key of this.elements.keys) {

      if (this.properties.shift) {
      
        key.textContent = (typeof this.keyLayout[keysCount][1] !== "undefined") 
        ? this.keyLayout[keysCount][1].toLowerCase() : this.keyLayout[keysCount][0].toLowerCase();
      } else{
       
        key.textContent = this.keyLayout[keysCount][0].toLowerCase();
      }
      keysCount++;
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});