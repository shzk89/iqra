const alphs = [
    '\u0627', // ا (Alef)
    '\u0628', // ب (Beh)
    '\u062A', // ت (Teh)
    '\u062B', // ث (Theh)
    '\u062C', // ج (Jeem)
    '\u062D', // ح (Hah)
    '\u062E', // خ (Khah)
    '\u062F', // د (Dal)
    '\u0630', // ذ (Thal)
    '\u0631', // ر (Reh)
    '\u0632', // ز (Zain)
    '\u0633', // س (Seen)
    '\u0634', // ش (Sheen)
    '\u0635', // ص (Sad)
    '\u0636', // ض (Dad)
    '\u0637', // ط (Tah)
    '\u0638', // ظ (Zah)
    '\u0639', // ع (Ain)
    '\u063A', // غ (Ghain)
    '\u0641', // ف (Feh)
    '\u0642', // ق (Qaf)
    '\u0643', // ك (Kaf)
    '\u0644', // ل (Lam)
    '\u0645', // م (Meem)
    '\u0646', // ن (Noon)
    '\u0647', // ه (Heh)
    '\u0648', // و (Waw)
    '\u064A'  // ي (Yeh)
];

const ahs = [
    '\u064E', // َ (Fathah)
    '\u0650', // ِ (Kasrah)
    '\u064F'  // ُ (Dammah)
];

const ains = [
    
]

const wordElm = document.querySelector('.word-text');
const progElm = document.querySelector('.prog-bar');
const arrowNextElm = document.getElementById('next-arrow');
const arrowPrevElm = document.getElementById('prev-arrow');

const progCount = 24;

let id = -1;
let ids = [];

// Do stuff
for (let i = 0; i < alphs.length; i++) { ids.push(i);}
Shuffle(ids);

// Next button listener
arrowNextElm.addEventListener("click", function () {
    id++;
    Update();
    if (id > progCount) { 
        id = progCount;
        window.location.assign("done/");
    }
});

// Prev button listener
arrowPrevElm.addEventListener("click", function () {
    id--;
    Update();
    if (id < 0) { id = 0; }
})

function Update() {
    wordElm.textContent = alphs[ids[id]] + ahs[0];
    progElm.style.width = (id / (progCount) * 100) + '%';
}

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}