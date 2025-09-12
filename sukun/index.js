const words = [
    "أَرَءَيْتَ",
    "فَأَبَوْا۟",
    "بَيْنَهُمْ",
    "عَلَيْكُمْ",
    "بَيْنَكُمْ",
    "وَبَيْنِكَ",
    "عَلَيْهِمْ",
    "وَخَيْرٌۭ",
    "وَلَوْلَآ",
    "عَلَيْكُم",
    "عَلَيْهَا",
    "مَوْئِلًا",
    "عَلَيْهِم",
    "عَيْنَاكَ",
    "قَوْمُنَا",
    "أَوَيْنَآ",
    "بَيْنَنَا",
    "بَيْنَهُم",
    "إِلَيْكَ",
    "قَوْمًۭا",
    "لَدَيْهِ",
    "عَلَيْهِ",
    "فَسَوْفَ",
    "عَلَيْكَ",
    "بِغَيْرِ",
    "خَيْرًۭا",
    "وَكَيْفَ",
    "وَيَوْمَ",
    "شَيْـًٔا",
    "وَخَيْرٌ",
    "غَوْرًۭا",
    "خَيْرٌۭ",
    "بَيْنِى",
    "قَوْمًا",
    "قَوْمٍۢ",
    "يَوْمٍۢ",
    "يَوْمًا",
    "قَوْلًا",
    "بَيْنَ",
    "خَيْرٌ",
    "يَوْمَ",
    "غَيْبُ",
    "عَيْنٍ",
    "وَلَوْ",
    "رَيْبَ",
    "أَوْ",
    "لَوْ"
];

const means = [
    "have you seen?",
    "but they refused",
    "between them",
    "upon you",
    "between you",
    "and between you",
    "upon them",
    "and it is better",
    "if not for",
    "upon you",
    "upon her",
    "any refuge",
    "upon them",
    "your two eyes",
    "our people",
    "we sought refuge",
    "between us",
    "between them",
    "to you",
    "a people",
    "with him",
    "upon him",
    "then soon",
    "upon you",
    "without",
    "good",
    "and how",
    "and the day",
    "a thing",
    "and better",
    "sunk",
    "better",
    "between me",
    "a people",
    "a people",
    "a day",
    "a day",
    "saying",
    "between",
    "good",
    "day",
    "the unseen",
    "a spring",
    "if only",
    "doubt",
    "or",
    "if"
];

const wordElm = document.querySelector('.word-text');
const progElm = document.querySelector('.prog-bar');
const addBtnElm = document.querySelector('.add-button');
const subBtnElm = document.querySelector('.sub-button');

const scrCount = 24;

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