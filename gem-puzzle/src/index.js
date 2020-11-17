//define field width
let field_width;
if (document.body.clientWidth < 360) {
    field_width = 200;
} else if (document.body.clientWidth < 560) {
    field_width = 360;
} else field_width = 500;


// define vars
let field_size = 4;
const shuffle_factor = 10;
const block_place = field_width / field_size;
const block_margin = 5;
let tag_field;
let popup;
let image;
let image_ratio = 0;
let font_size = 90;
let history = [];
let final_position = 0;
let block_empty = {};
let is_start = false;
let background_img = 1;
let background_img_url = 'assets/img/default_4.jpg';
let solve = false;
let steps = 0;
let timer = false;
let time = {
    sec: 0,
    min: 0
};
let _load = false;
let dragSrc = null;
let dragTarget = null;
let sound = false;

//add basic elements to DOM 
setBasicHTML();

// define  tags
const game_field = document.querySelector('.game_field');
const rss_sticker = document.querySelector('.rss_sticker');
const menu__bottom = document.querySelector('.menu__bottom');
const menu__top = document.querySelector('.menu__top');


//add listeners
start_game.addEventListener('click', newGame);
reset_game.addEventListener('click', resetGame);
solve_game.addEventListener('click', solveGame);

size_game.addEventListener('click', setFieldSizeOnButton);

classic_game.addEventListener('click', setDefaultBackground);
image_game.addEventListener('click', setImageBackground);

save_game.addEventListener('click', saveGame);
load_game.addEventListener('click', loadGame);
score_game.addEventListener('click', loadScore);

sound_game.addEventListener('click', switchSound);



//define classes
class Block {
    constructor(num, name, id, x, y) {
        this.num = num;
        this.name = name;

        this.id = id;

        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x * (field_width / field_size) + block_margin / 2;
    }

    getY() {
        return this.y * (field_width / field_size) + block_margin / 2
    }

    getBlockSize() {
        return (field_width / field_size) - block_margin
    }
}

//functions


//functions game service
function saveGame() {

    let save_game_HTML = createSaveGameHTML();

    popup.classList.remove('hidden');

    popup.innerHTML = save_game_HTML;

    save_from_popup.addEventListener('click', saveFromPopup);
    cancel_from_popup.addEventListener('click', cancelFromPopup);
    buttonDisabled(start_game, reset_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game, sound_game);

}

function loadGame() {

    let load_game_HTML = createLoadGameHTML();

    popup.classList.remove('hidden');
    popup.innerHTML = load_game_HTML;

    load_from_popup.addEventListener('click', loadFromPopup);
    cancel_from_popup.addEventListener('click', cancelFromPopup);

    buttonDisabled(start_game, reset_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game, sound_game);

}

function loadScore() {

    let load_game_HTML = createScoreGameHTML();

    popup.classList.remove('hidden');
    popup.innerHTML = load_game_HTML;

    cancel_from_popup.addEventListener('click', cancelFromPopup);

    buttonDisabled(start_game, reset_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game, sound_game);

}

function loadFromPopup() {

    buttonEnabled(start_game, reset_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game, sound_game);

    let _history = localStorage.getItem('game_save');

    if (_history == null) {
        createMessage('No saved game!');
        return;

    }
    steps = Number(localStorage.getItem('steps'));
    time.sec = Number(localStorage.getItem('time_sec'));
    time.min = Number(localStorage.getItem('time_min'));
    field_size = Number(localStorage.getItem('_field_size'));
    background_img_url = localStorage.getItem('_background_img_url');

    _history = _history.split(",");

    image.src = background_img_url;

    removeFieldFromDom();

    image.addEventListener('load', () => {

        history = [];
        for (let index = 0; index < _history.length; index += 3) {

            history.push([_history[index], Number(_history[index + 1]), Number(_history[index + 2])]);
        }

        _load = true;
        newGame();
    })

}


function cancelFromPopup() {

    popup.innerHTML = '';

    popup.classList.add('hidden');
    buttonEnabled(start_game, reset_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game, sound_game);
}


function saveScoreFromPopup() {

    let name;
    let score_name = document.querySelector('input[name="score_name"]');
    _score = localStorage.getItem('game_score') || '';
    let score = _score.split(",");
    name = score_name.value.slice(0, 10);

    let current_entry = [(time.min * 60) + (time.sec - 1), steps, field_size, name];
    score.push(current_entry);
    localStorage.setItem('game_score', score);

    cancelFromPopup();

}


// Show Time
function showTime() {

    clearInterval(timer);

    time_game.textContent = `${addZero(time.min)}:${addZero(time.sec)}`;
    timer = setInterval(() => {

        time_game.textContent = `${addZero(time.min)}:${addZero(time.sec)}`;

        if (time.sec == 59) {
            time.sec = 0;
            time.min = (time.min + 1) % 60;

        }
        time.sec = time.sec + 1;

    }, 1000);

}

function showSteps() {

    steps_game.textContent = `${steps} moves`;
    steps++;
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//sticker
function setSticker() {
    let sticker = Math.floor(Math.random() * 11) + 1;
    rss_sticker.style.background = `url("./assets/img/rsschool/sticker_${sticker}.png") center no-repeat`;
    rss_sticker.style.backgroundSize = 'contain';
}


function moveSticker() {
    rss_sticker.classList.add('rss_sticker--move');
}


function backSticker() {
    rss_sticker.classList.remove('rss_sticker--move');
}


//functions serve buttons

function setFieldSizeOnButton(params) {

    resetGameInfo();
    backSticker()

    field_size = field_size >= 8 ? 3 : field_size += 1;
    history = [];

    removeFieldFromDom();

    init();
}


function buttonDisabled(...args) {

    for (let id of args) {
        id.disabled = true;
        id.style.opacity = '0.3';
    }
}

function buttonEnabled(...args) { //id list

    for (let id of args) {
        id.disabled = false;
        id.style.opacity = '1';
    }

}


function setDefaultBackground() {

    resetGameInfo();
    backSticker();
    removeFieldFromDom();
    background_img_url = 'assets/img/default_4.jpg';
    init();
}


function setImageBackground() {

    resetGameInfo();
    backSticker();

    is_start = false;

    removeFieldFromDom();
    background_img = (background_img + 1) % 10;
    background_img_url = 'assets/img/' + background_img + '.jpg';

    init();
}


// functions  make blocks

function setBlocks(field_size) {

    let count = 0;
    let _block = [];
    let _start = [];
    history = [];

    for (let y = 0; y < field_size; y++) {
        for (let x = 0; x < field_size; x++) {
            window['block_' + String(count + 1)] = new Block(count + 1, 'block_' + String(count + 1), 'id_' + String(count + 1), x, y);

            _block = ['block_' + String(count + 1), x, y];
            history.push(_block);
            count += 1;
        }
    }

    block_empty = window['block_' + (field_size * field_size)];

}


function drawBlocks() {

    for (let index = 0; index < history.length; index++) {

        let block = window[history[index][0]];

        block.x = history[index][1];
        block.y = history[index][2];

        block.id.style.left = block.getX(block.x) + 'px';
        block.id.style.top = block.getY(block.y) + 'px';
    }

}


function generateBlock(block) {

    block.id = document.createElement('canvas');
    block.id.setAttribute('id', "id_" + block.num);
    block.id.setAttribute('data-num', "block_" + block.num);

    block.id.setAttribute('draggable', "true");
    //click
    block.id.addEventListener('click', moveBlock, false);

    //drag-and-drop
    block.id.addEventListener('dragstart', handleDragStart, false);
    block.id.addEventListener('dragenter', handleDragEnter, false);
    block.id.addEventListener('dragover', handleDragOver, false);
    block.id.addEventListener('dragleave', handleDragLeave, false);
    block.id.addEventListener('drop', handleDrop, false);
    block.id.addEventListener('dragend', handleDragEnd, false);

    block.id.classList.add('block');
    block.id.style.width = block.getBlockSize() + 'px';
    block.id.style.height = block.getBlockSize() + 'px';
    block.id.style.left = block.getX() + 'px';
    block.id.style.top = block.getY() + 'px';
    tag_field.appendChild(block.id);

    context = block.id.getContext('2d');

    if (block.num !== field_size * field_size) {

        context.drawImage(image,
            block.getX() * image_ratio,
            block.getY() * image_ratio,
            (field_width / field_size) * image_ratio,
            (field_width / field_size) * image_ratio,
            0, 0, block.id.width, block.id.height);
        if (background_img_url == 'assets/img/default_4.jpg') {
            context.font = font_size + 'px Arial Black';
            context.textAlign = "center";
            context.textBaseline = 'middle';
            context.fillStyle = "#fff5f5";
            context.shadowBlur = 10;
            context.shadowColor = "black";
            context.fillText(block.num, block.id.width / 2, block.id.height / 2);
        }

    } else {
        //invisible block
        block.id.style.boxShadow = 'none';
        block.id.style.border = 'none';

    }
}


function moveBlock(e) {

    let block_current;

    if (e === undefined) {

        if (dragTarget.dataset.num !== 'block_' + String(field_size * field_size)) {
            return;
        }

        block_current = window[dragSrc.dataset.num];
        block_current.id.style.transition = '0s';

    } else {

        block_current = window[e.target.dataset.num];
        block_current.id.style.transition = '0.3s';

    }

    //change only next
    if ((block_current.x == block_empty.x && block_current.y == block_empty.y + 1) || (block_current.x == block_empty.x && block_current.y == block_empty.y - 1) ||
        (block_current.y == block_empty.y && block_current.x == block_empty.x + 1) || (block_current.y == block_empty.y && block_current.x == block_empty.x - 1)) {

        //  steps++;
        if (is_start) showSteps();

        // change blocks
        [block_current.x, block_empty.x] = [block_empty.x, block_current.x];
        [block_current.y, block_empty.y] = [block_empty.y, block_current.y];

        //sound
        if (sound) sound_1.play();

        block_current.id.style.top = block_current.getY() + 'px';
        block_current.id.style.left = block_current.getX() + 'px';

        block_empty.id.style.top = block_empty.getY() + 'px';
        block_empty.id.style.left = block_empty.getX() + 'px';

        //check for win
        if (is_start) winGame();

        //add to history
        let last_index = history.length - 1;

        if (block_empty.x == history[last_index - 1][1] && block_empty.y == history[last_index - 1][2]) {
            history.pop();
            history.pop();
        } else {
            history.push([block_current.name, block_current.x, block_current.y]);
            history.push([block_empty.name, block_empty.x, block_empty.y]);
        }
    }
}


function removeFieldFromDom() {
    let game_field = document.querySelector('.game_field');
    let field = document.querySelector('.field');
    game_field.removeChild(field);

}


function solveGame() {

    if (!is_start) return;

    is_start = false;
    steps = 0;
    if (timer) clearInterval(timer);

    //showTime();
    time_game.textContent = `--:--`;

    backSticker();

    let index = history.length - 1;

    solve = setInterval(() => {

        showSteps();

        buttonDisabled(start_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game);

        if (index <= field_size * field_size) {

            buttonEnabled(start_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game);
            clearInterval(solve);
        } else {
            let _block_empty = window[history[index][0]];
            let _block_current = window[history[index - 1][0]];
            _block_current.id.style.transition = '0.3s';

            [_block_current.x, _block_empty.x] = [_block_empty.x, _block_current.x];
            [_block_current.y, _block_empty.y] = [_block_empty.y, _block_current.y];

            _block_current.id.style.top = _block_current.getY() + 'px';
            _block_current.id.style.left = _block_current.getX() + 'px';

            _block_empty.id.style.top = _block_empty.getY() + 'px';
            _block_empty.id.style.left = _block_empty.getX() + 'px';
        }

        index -= 2;

    }, 500);

    if (timer) clearInterval(timer);

}


// make game_field

function makeGameField(params) {
    makeField(field_width);
    createPopup();
}

//make field
function makeField(field_width) {

    tag_field = document.querySelector('.field');
    if (tag_field === null) {

        tag_field = document.createElement('div');
        tag_field.classList.add('field');
        tag_field.style.width = field_width + 'px';
        tag_field.style.height = field_width + 'px';

        //  game_field.appendChild(tag_field);
        menu__bottom.parentNode.insertBefore(tag_field, menu__bottom);
        game_field.addEventListener('dragover', handleDragOver);
        game_field.addEventListener('dragenter', handleDragEnter);

    }

}

//drag-and-drop

function handleDragStart(e) {
    dragSrc = this;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

function handleDragEnter(e) {}

function handleDragLeave(e) {}


function handleDrop(e) {
    dragTarget = this;

    if (e.stopPropagation) {
        e.stopPropagation();
    }

    moveBlock();

    return false;
}

function handleDragEnd(e) {}


// Intit

function init() {

    setSticker();

    // get image
    image = new Image;
    image.src = background_img_url;
    image.addEventListener('load', () => {

        image_ratio = image.width / (field_width + 3);

        start();
    })

}


function switchSound() {
    sound = !sound;
    sound_game.classList.toggle('button--nightsky');
}


function setTransition() {

    for (let index = 1; index <= field_size * field_size; index++) {

        window['block_' + index].id.style.transition = '0.3s';
    }
}

function getRandomNewCoords() {

    const direction_table = [
        ['x', 'y'],
        [1, -1]
    ];
    let new_x;
    let new_y;

    if (direction_table[0][Math.round(Math.random())] === 'x') {

        new_x = Math.abs(block_empty.x + direction_table[1][Math.round(Math.random())]);
        new_y = block_empty.y;
        new_x = new_x === field_size ? field_size - 2 : new_x;

    } else {

        new_y = Math.abs(block_empty.y + direction_table[1][Math.round(Math.random())]);
        new_y = new_y === field_size ? field_size - 2 : new_y;
        new_x = block_empty.x;
    }

    return {
        new_x: new_x,
        new_y: new_y,
    };

}

function addBackMove() {

    let direction_object = getRandomNewCoords();

    let find = false;
    let index = history.length - 1;

    if (direction_object.new_x !== history[index - 2][1] && direction_object.new_y !== history[index - 2][2]) {
        while (!find) {

            if (direction_object.new_x == history[index][1] && direction_object.new_y == history[index][2]) {

                let block_current = window[history[index][0]];

                [block_current.x, block_empty.x] = [block_empty.x, block_current.x];
                [block_current.y, block_empty.y] = [block_empty.y, block_current.y];

                history.push([block_current.name, block_current.x, block_current.y]);
                history.push([block_empty.name, block_empty.x, block_empty.y]);

                find = true;
            }
            index--;
        }
    }
}

function shuffleBlocks(times) {
    for (let index = 0; index < times; index++) {

        addBackMove();
    }

}

function drawStartPosition() {

    setBlocks(field_size);

    for (let index = 1; index <= field_size * field_size; index++) {

        generateBlock(window['block_' + String(index)]);
    }
}

function resetGameInfo() {
    steps = 0;
    steps_game.textContent = `${steps} moves`;
    time.sec = 0,
        time.min = 0,
        time_game.textContent = `${addZero(0)}:${addZero(0)}`;
    if (timer) clearInterval(timer);
}


function resetGame() {

    backSticker();

    if (solve) clearInterval(solve);

    resetGameInfo();

    buttonEnabled(start_game, size_game, solve_game, classic_game, image_game, save_game, load_game, score_game);
    backSticker();

    is_start = false

    resetBlocks();
    setTransition();

    drawBlocks();
}

function resetBlocks() {

    let count = 0;
    let _block = [];
    history = [];

    for (let y = 0; y < field_size; y++) {
        for (let x = 0; x < field_size; x++) {

            _block = ['block_' + String(count + 1), x, y];
            window['block_' + String(count + 1)].x = x;
            window['block_' + String(count + 1)].y = y;

            history.push(_block);
            count += 1;
        }
    }
    block_empty = window['block_' + String((field_size * field_size))];
}


function createPopup() {
    popup = document.createElement('div');
    popup.className = 'popup hidden';
    popup.style.width = field_width + 'px';
    popup.style.height = field_width + 'px';

    tag_field.appendChild(popup);

}


function saveFromPopup() {

    steps = steps > 0 ? steps - 1 : 0;
    time.sec = time.sec > 0 ? time.sec - 1 : 0;

    localStorage.setItem('game_save', history);
    localStorage.setItem('steps', steps);
    localStorage.setItem('time_sec', time.sec);
    localStorage.setItem('time_min', time.min);
    localStorage.setItem('_field_size', field_size);
    localStorage.setItem('_background_img_url', background_img_url);

    cancelFromPopup();

}

//winGame
function winGame() {

    for (let index = 0; index < field_size * field_size; index++) {
        let block_current = window['block_' + String(index + 1)];
        if (block_current.x !== history[index][1] || block_current.y !== history[index][2]) {
            return;
        }

    }

    clearInterval(timer);
    console.log('pos 1');


    setTimeout(() => {
        console.log('pos 2');
        popup.classList.remove('hidden');

        let win_game_HTML = createWinGameHTML();
        popup.innerHTML = win_game_HTML;

        save_score_from_popup.addEventListener('click', saveScoreFromPopup);
        cancel_from_popup.addEventListener('click', cancelFromPopup);
    }, 1000);


}


//functions with Get HTML

function createSaveGameHTML() {
    return `
    <div>
    <div style="font-size:2rem; font-weight: bold">Save game</div>  
     <div><button  id = "save_from_popup"  type=" button" class="button button--green"><span>Save</span></button></div>
     <div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> 
     </div>
    `;
}

function createLoadGameHTML() {
    return `
    <div>
    <div style="font-size:2rem; font-weight: bold">Load game</div> 
     <div><button  id = "load_from_popup" type=" button" class="button button--green"><span>Load</span></button></div>
     <div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> 
     </div>
    `;
}

function createScoreGameHTML() {
    let rez;
    rez = `
     <div>
     <div style="font-size:2rem; font-weight: bold">Score</div>`;

    let _score = localStorage.getItem('game_score') || '';

    _score = _score.split(',');

    let name;
    let steps;
    let time;
    let time_min;
    let time_sec;
    let size;

    for (let index = 0; index < 10; index++) {

        name = _score.pop();
        size = _score.pop();
        size = `${size}x${size}`;

        steps = _score.pop();
        time = _score.pop();
        time_min = time ? addZero(Math.trunc(time / 60)) : '00';
        time_sec = time ? addZero(time % 60) : '00';

        rez += steps ? `<div  class ="popup__score" style = "background: #f4e9a1; margin:2px; padding: 1px 12px 1px 12px"> 
        ${name} ${size} moves: ${steps} time: ${time_min}:${time_sec}</div>` :
            `<div style = "background: #f4e9a1; margin:2px; padding: 1px 10px 1px 10px; color:#f4e9a1;">-</div>`;
    }
    rez += `<div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> 
    </div>
   `;
    return rez;
}


function createWinGameHTML() {
    return `
    <div>
     <div style="font-size:2rem; font-weight: bold; color: green; text-align: center">Hooray! You solved the puzzle in</div>
    
     <div style=" font-size:1.5rem; text-align: center"> ${steps-1} moves & time: ${time.min}:${time.sec-1} </div>
     <div> <input type="text" style="line-height:1rem; padding: 0.5rem; border:3px solid green"   name="score_name" autofocus> </div>
       
     <div>
        <button id ="save_score_from_popup" type=" button" class="button button--green"><span>Save yours result </span></button>
        <button id ="cancel_from_popup" type=" button" class="button button--red" style="margin-top:0.5rem"><span>Cancel </span></button>
     <div>
    
    </div>
    `;
}


function createMessage(message) {
    let message_HTML = `
    <div>
     <div style="font-size:2rem; font-weight: bold; text-align: center">${message}</div>   
     <div>
        <button id ="cancel_from_popup" type=" button" class="button button--red" style="margin-top:0.5rem"><span>Cancel </span></button>
     <div>   
    </div>
    `;

    popup.classList.remove('hidden');

    popup.innerHTML = message_HTML;

    cancel_from_popup.addEventListener('click', cancelFromPopup);
}


function setBasicHTML() {

    document.body.innerHTML = ` <div class="game_field">
    <div class="header">
        <div class="header__sticker">
            <div class="rss_sticker"></div>
        </div>
        <div class="header__gamedata">
            <div id="time_game" class=""></div>
            <div id="steps_game" class=""></div>
        </div>

    </div>
    <div class="menu__top">
        <div class="menu__top_inner">
            <button id="start_game" type="button" class="button button--green"> <span>Start</span></button>
            <button id="reset_game" type="button" class="button button--red"> <span>Reset</span></button>
            <button id="solve_game" type="button" class="button button--leaf"><span>Solve</span></button>
        </div>

        <div class="menu__top_inner">  <button id="size_game" type="button" class="button button--nightsky"><span>4х4</span></button>
        <button id="classic_game" type="button" class="button button--blue"><span>Classic</span></button>
            <button id="image_game" type="button" class="button button--water"><span>Image</span></button>
        </div>
    </div>

    <div class="menu__bottom">
        <div class="menu__top_inner">
            <button id="save_game" type="button" class="button button--nightsky"> <span>Save</span></button>
            <button id="load_game" type="button" class="button button--nightsky"> <span>Load</span></button>
            <button id="score_game" type="button" class="button button--nightsky"><span>Score</span></button>
        </div>
        <div class="menu__top_inner">
            <button id="sound_game" type="button" class="button "><span>Sound</span></button>
        </div>
       
    </div>
</div>

<audio id="sound_1" src="./assets/sounds/sound_1.mp3"></audio>
    `;
}


function start() {

    makeGameField();
    //set size
    size_game.children[0].textContent = field_size + 'x' + field_size;

    drawStartPosition();

}


function newGame() {

    if (!_load) {

        time.sec = 0;
        time.min = 0
    };

    showTime();

    is_start = true;
    if (!_load) steps = 0;

    moveSticker();

    if (!_load) {
        resetBlocks()
    };

    setTransition();

    showSteps();

    if (!_load) {
        shuffleBlocks(shuffle_factor * field_size);
    }

    _load = false;

    drawBlocks();

}



//start
init();