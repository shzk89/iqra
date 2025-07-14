const words = [
    "تَبَارَكَ",
    "بِيَدِهِ",
    "وَهُوَ",
    "قَدِيرٌ",
    "خَلَقَ",
    "عَمَلًا",
    "سَمَاوَاتٍ",
    "طِبَاقًا",
    "تَرَىٰ",
    "فِى",
    "تَفَاوُتٍ",
    "فُطُورٍ",
    "خَاسِئًا",
    "حَسِيرٌ",
    "بِمَصَابِيحَ",
    "رُجُومًا",
    "عَذَابَ",
    "إِذَا",
    "فِيهَا",
    "لَهَا",
    "شَهِيقًا",
    "وَهِيَ",
    "تَفُورُ",
    "تَكَادُ",
    "مِنَ",
    "خَزَنَتُهَا",
    "نَذِيرٌ",
    "جَاءَنَا",
    "مَا",
    "ضَلَالٍ",
    "كَبِيرٍ",
    "أَوِ",
    "بِهِ",
    "عَلِيمٌ",
    "بِذَاتِ",
    "أَلَا",
    "هُوَ",
    "جَعَلَ",
    "لَكُمُ",
    "ذَلُولًا",
    "مَنَاكِبِهَا",
    "بِكُمُ",
    "فَإِذَا",
    "هِىَ",
    "تَمُورُ",
    "حَاصِبًا",
    "نَذِيرِ",
    "كَانَ",
    "نَكِيرِ",
    "بَصِيرٌ",
    "هَذَا",
    "دُونِ",
    "إِنِ",
    "غُرُورٍ",
    "وَنُفُورٍ",
    "صِرَاطٍ",
    "قَلِيلًا",
    "وَيَقُولُونَ",
    "صَادِقِينَ",
    "أَنَا",
    "وُجُوهُ",
    "وَقِيلَ",
    "رَحِمَنَا",
    "يُجِيرُ",
    "عَذَابٍ",
    "أَلِيمٍ",
    "ضَلَالٍ",
    "بِمَاءٍ"
];
const means = [
    "Blessed",
    "in His hand",
    "and He",
    "All-Powerful",
    "created",
    "deeds",
    "heavens",
    "layers",
    "you see",
    "in",
    "discrepancy",
    "cracks",
    "returned",
    "exhausted",
    "with lamps",
    "missiles",
    "punishment",
    "when",
    "in it",
    "for it",
    "roaring",
    "while it",
    "boiling up",
    "almost",
    "from",
    "its keepers",
    "warner",
    "came to us",
    "what",
    "error",
    "great",
    "or",
    "with it",
    "All-Knowing",
    "of what",
    "is it not",
    "He",
    "made",
    "for you",
    "subdued",
    "its pathways",
    "against you",
    "then when",
    "it is",
    "quaking",
    "storm of stones",
    "warner",
    "was",
    "My warning",
    "All-Seeing",
    "this",
    "besides",
    "if",
    "delusion",
    "and aversion",
    "path",
    "a little",
    "and they say",
    "truthful",
    "I am",
    "faces",
    "and it will be said",
    "has mercy on us",
    "will protect",
    "torment",
    "painful",
    "error",
    "water"
];

const wordElm = document.querySelector('.word-text');
const meanElm = document.querySelector('.mean-text');
const progElm = document.querySelector('.prog-bar');
const arrowElms = document.querySelectorAll('.arrow-button');

let id = -1;
let ids = [];

// Do stuff
for (let i = 0; i < words.length; i++) { ids.push(i);}
Shuffle(ids);

// Next button listener
arrowElms[0].addEventListener("click", function () {
    id++;
    if (id >= 25) { id = 24; }
    Update();
});

// Prev button listener
arrowElms[1].addEventListener("click", function () {
    id--;
    if (id < 0) { id = 0; }
    Update();
})

function Update() {
    wordElm.textContent = words[ids[id]];
    meanElm.textContent = means[ids[id]];
    progElm.style.width = (id / (24) * 100) + '%';
}

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}