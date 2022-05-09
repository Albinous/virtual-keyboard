const BODY = document.querySelector('body');
const TEXTAREA_INPUT = document.createElement('textarea');
const CONTAINER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const keyboardKeys = document.createElement('div');
let row;
let item;

let keysArr = [];

const createRow = () => {
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

let keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650', 'Shift2', 'Ctrl', 'Win', 'Alt', '', 'Alt2', 'Fn', '&#5130', '&#9660', '&#5125', 'Ctrl2'];

for (let i = 0; i < keys.length; i += 1) {
    item = document.createElement('div');
    let keyDetails = new KeyName(keys[i]);
    item.classList.add(keyDetails.className);
    item.innerHTML = keyDetails.key;
    item.setAttribute('keyName', item.innerHTML);
    item.setAttribute('lowerName', item.innerHTML.toLowerCase());
    keysArr.push(item);
    row.append(item);
    if (keys[i] === 'Backspace') {
        keyboardKeys.append(row);
        createRow();
    } else if (keys[i] === 'Del') {
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
    if (keys[i] === '') {
        item.classList.add('space-key');
    }

}

function longKey(key) {
    return item.classList.add(`${key}-key`)
}

const keyDownEvent = (e) => {
    for (let i = 0; i < keysArr.length; i++) {
        if (e.key == keysArr[i].getAttribute('keyName') || e.key == keysArr[i].getAttribute('lowerName')) {
            keysArr[i].classList.add('active');
            keysArr[i].classList.remove('remove');
        }

        console.log(e.code);

        if (e.code == 'Space' && keysArr[i].classList.contains('space-key')) {
            keysArr[i].classList.add('active');
            keysArr[i].classList.remove('remove');
        }

        if (e.code == 'ShiftLeft' && keysArr[i].classList.contains('shift-right')) {
            keysArr[i].classList.remove('active');
        }

        if (e.code == 'ShiftRight' && keysArr[i].classList.contains('shift-left')) {
            keysArr[i].classList.remove('active');
        }

        if (e.code == 'CapsLock' && keysArr[i].classList.contains('capslock-key')) {
            keysArr[i].classList.toggle('active');
        }
    }
}

const keyUpEvent = (e) => {
    for (let i = 0; i < keysArr.length; i++) {
        if (e.key == keysArr[i].getAttribute('keyName') || e.key == keysArr[i].getAttribute('lowerName')) {
            keysArr[i].classList.remove('active');
            keysArr[i].classList.add('remove');
        }
        
        if (e.code == 'Space' && keysArr[i].classList.contains('space-key')) {
            keysArr[i].classList.remove('active');
            keysArr[i].classList.add('remove');
        }
    }
}

window.addEventListener('keydown', keyDownEvent);
window.addEventListener('keyup', keyUpEvent);

console.log(keysArr);
    


CONTAINER.classList.add('container');
TEXTAREA_INPUT.cols = 100;
TEXTAREA_INPUT.rows = 10;
KEYBOARD.classList.add('keyboard-wrapper');
keyboardKeys.classList.add('keyboard-keys');

BODY.append(CONTAINER);
CONTAINER.append(TEXTAREA_INPUT);
CONTAINER.append(KEYBOARD);
KEYBOARD.append(keyboardKeys);