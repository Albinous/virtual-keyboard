const BODY = document.querySelector('body');
const TEXTAREA_INPUT = document.createElement('textarea');
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');

TEXTAREA_INPUT.cols = 100;
TEXTAREA_INPUT.rows = 10;
BODY.append(CONTAINER);
CONTAINER.append(TEXTAREA_INPUT);
