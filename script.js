const words = [
    "تَبَارَكَ",
    "بِيَدِهِ",
    "وَهُوَ",
    "عَلَىٰ",
    "قَدِيرٌ",
    "خَلَقَ",
    "عَمَلًا",
    "سَمَاوَاتٍ",
    "طِبَاقًا",
    "تَرَىٰ",
    "فِى",
    "مِن",
    "تَفَاوُتٍ",
    "فُطُورٍ",
    "خَاسِئًا",
    "حَسِيرٌ",
    "بِمَصَابِيحَ",
    "رُجُومًا",
    "عَذَابَ",
    "كَفَرُوا",
    "عَذَابُ",
    "إِذَا",
    "فِيهَا",
    "سَمِعُوا",
    "لَهَا",
    "شَهِيقًا",
    "وَهِيَ",
    "تَفُورُ",
    "تَكَادُ",
    "مِنَ",
    "خَزَنَتُهَا",
    "نَذِيرٌ",
    "قَالُوا",
    "بَلَىٰ",
    "جَاءَنَا",
    "مَا",
    "ضَلَالٍ",
    "كَبِيرٍ",
    "وَقَالُوا",
    "فِىٓ",
    "لَهُم",
    "كَبِيرٌ",
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
    "وَكُلُوا",
    "ءَأَمِنتُم",
    "أَن",
    "بِكُمُ",
    "فَإِذَا",
    "هِىَ",
    "تَمُورُ",
    "أَمِنتُم",
    "حَاصِبًا",
    "نَذِيرِ",
    "كَانَ",
    "نَكِيرِ",
    "إِلَى",
    "بَصِيرٌ",
    "هَذَا",
    "جُندٌ",
    "يَنصُرُكُم",
    "دُونِ",
    "إِنِ",
    "غُرُورٍ",
    "بَل",
    "وَنُفُورٍ",
    "أَفَمَن",
    "صِرَاطٍ",
    "قَلِيلًا",
    "وَيَقُولُونَ",
    "مَتَىٰ",
    "إِن",
    "صَادِقِينَ",
    "عِندَ",
    "أَنَا",
    "وُجُوهُ",
    "وَقِيلَ",
    "كُنتُم",
    "وَمَن",
    "رَحِمَنَا",
    "فَمَن",
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
    "over/on",
    "All-Powerful",
    "created",
    "deeds",
    "heavens",
    "layers",
    "you see",
    "in",
    "from",
    "discrepancy",
    "cracks",
    "returned",
    "exhausted",
    "with lamps",
    "missiles",
    "punishment",
    "disbelieved",
    "punishment",
    "when",
    "in it",
    "they hear",
    "for it",
    "roaring",
    "while it",
    "boiling up",
    "almost",
    "from",
    "its keepers",
    "warner",
    "they said",
    "yes",
    "came to us",
    "what",
    "error",
    "great",
    "and they said",
    "in",
    "for them",
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
    "and eat",
    "Do you feel secure",
    "that",
    "against you",
    "then when",
    "it is",
    "quaking",
    "Do you feel secure",
    "storm of stones",
    "warner",
    "was",
    "My warning",
    "to",
    "All-Seeing",
    "this",
    "army",
    "will help you",
    "besides",
    "if",
    "delusion",
    "nay",
    "and aversion",
    "Is then he",
    "path",
    "a little",
    "and they say",
    "when",
    "if",
    "truthful",
    "with",
    "I am",
    "faces",
    "and it will be said",
    "you were",
    "and whoever",
    "has mercy on us",
    "so who",
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
    progElm.style.width = (id / (words.length - 1) * 100) + '%';
}

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}