const BODY = document.querySelector('body');
const TEXTAREA_INPUT = document.createElement('textarea');
const CONTAINER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const keyboardKeys = document.createElement('div');
let row;
let item;

function createRow() {
    row = document.createElement('div');
    row.classList.add('row');
}

createRow();

class KeyName {
    constructor(key) {
        this.key = key;
        this.className = 'keys';
    }
}

let keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift2', 'Ctrl', 'Win', 'Alt', '', 'Alt2', 'Fn', 'Ctrl2'];

for (let i = 0; i < keys.length; i += 1) {
    item = document.createElement('div');
    let keyDetails = new KeyName(keys[i]);
    item.innerHTML = keyDetails.key;
    item.classList.add(keyDetails.className);
    row.append(item);
    if (keys[i] === 'Backspace') {
        keyboardKeys.append(row);
        createRow();
    } else if (keys[i] === '\\') {
        keyboardKeys.append(row);
        createRow();
    } else if (keys[i] === 'Enter') {
        keyboardKeys.append(row);
        createRow();
    } else if (keys[i] === 'Shift2') {
        item.classList.add('shift-key');
        item.classList.add('shift-right');
        item.innerHTML = 'Shift';
        keyboardKeys.append(row);
        createRow();
    }  else if (keys[i] === 'Ctrl2') {
        item.classList.add('ctrl-key');
        item.classList.add('ctrl-right');
        item.innerHTML = 'Ctrl';
        keyboardKeys.append(row);
        createRow();
    }

    if (keys[i] === 'Shift') {
        item.classList.add('shift-key');
        item.classList.add('shift-left');
    }
    if (keys[i] === 'Ctrl') {
        item.classList.add('ctrl-key');
        item.classList.add('ctrl-left');
    }
    if (keys[i] === 'Alt') {
        item.classList.add('alt-left')
    }
    if (keys[i] === 'Alt2') {
        item.innerHTML = 'Alt';
        item.classList.add('alt-key');
        item.classList.add('alt-right');
    }

    if (keys[i].length > 1) {
        longKey(keys[i].toLowerCase().replace(/\s/g, ''));
    }

    if (keys[i] === '\\') {
        item.classList.add('slash-key');
    }

}

function longKey(key) {
    return item.classList.add(`${key}-key`)
}
    


CONTAINER.classList.add('container');
TEXTAREA_INPUT.cols = 100;
TEXTAREA_INPUT.rows = 10;
KEYBOARD.classList.add('keyboard_wrapper');
keyboardKeys.classList.add('keyboard_keys');

BODY.append(CONTAINER);
CONTAINER.append(TEXTAREA_INPUT);
CONTAINER.append(KEYBOARD);
KEYBOARD.append(keyboardKeys);