const words = [
];

const wordElm = document.querySelector('.word-text');
const progElm = document.querySelector('.prog-bar');
const addBtnElm = document.querySelector('.add-button');
const subBtnElm = document.querySelector('.sub-button');

const scrCount = 49;

let id = -1;
let wordIds = [];

let scr = 0;

// Do stuff
for (let i = 0; i < words.length; i++) { wordIds.push(i); }
Shuffle(wordIds);

// Next button listener
addBtnElm.addEventListener("click", function () {
    id++;
    if (id >= words.length) { id = 0; }

    scr++;
    if (scr > scrCount) {
        scr = scrCount;
        window.location.assign("../done/");
    }
    else { Update(); }
});

// Prev button listener
subBtnElm.addEventListener("click", function () {
    id++;
    if (id >= words.length) { id = 0; }

    scr--;
    if (scr < 0) { scr = 0; }
    else { Update(); }
});

function Update() {
    wordElm.textContent = words[wordIds[id]];
    progElm.style.width = (scr / (scrCount) * 100) + '%';
}

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}