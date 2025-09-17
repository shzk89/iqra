const words = [
    "أَوْ",
    "لَوْ",
    "دُونِ",
    "بَيْنَ",
    "كَيْفَ",
    "أَيْنَ",
    "حَيْثُ",
    "لَيْسَ",
    "رَيْبَ",
    "يَقِينَ",
    "غَيْبِ",
    "خَيْرٖ",
    "خَيْرٌ",
    "لَيْلَةٗ",
    "لَيْلَةً",
    "صَوْتٖ",
    "شَيْءٖ",
    "شَيْءٍ",
    "خَوْفٌ",
    "رَشِيدٖ",
    "نَصِيرٖ",
    "مَجِيدٖ",
    "حَكِيمٖ",
    "عَلِيمٖ",
    "خَبِيرٖ",
    "بَصِيرٖ",
    "سَمِيعٖ",
    "قَدِيرٖ",
    "رَحِيمٖ",
    "كَرِيمٖ",
    "عَظِيمٖ",
    "أَلِيمٖ",
    "مُقِيمٖ",
    "مُبِينٖ",
    "حَمِيدٖ",
    "يَوْمَ",
    "يَوْمٖ",
    "يَوْمِ",
    "شَهِيدٖ",
    "صَدِيقٖ",
    "جَيْئًا",
    "خَبِيثَ",
    "غَيْرِ",
    "خَيْرٗا",
    "طَيْرِ",
    "بَيْتِ",
    "زَيْتُونٖ",
    "مَيْسِرٖ",
    "طَيِّبَٰتِ",
    "أَيْدِيكُمْ",
    "أَيْدِيهِمْ",
    "بَيْتِيَ",
    "مَيْتَةً",
    "أَمَيْنٖ",
    "أُولَـٰئِكَ",
    "عَيْنٗا",
    "صَيْبٖ",
    "حَيَاةٖ",
    "هَوَادَ",
    "بَيْنَهُمْ",
    "عِيسَى",
];

const means = [
    "or",                  // أَوْ
    "if",                  // لَوْ
    "without",             // دُونِ
    "between",             // بَيْنَ
    "how",                 // كَيْفَ
    "where",               // أَيْنَ
    "wherever",            // حَيْثُ
    "is not",              // لَيْسَ
    "doubt",               // رَيْبَ
    "certainty",           // يَقِينَ
    "hidden",              // غَيْبِ
    "better",              // خَيْرٖ
    "better",              // خَيْرٌ
    "night",               // لَيْلَةٗ
    "night",               // لَيْلَةً
    "sound",               // صَوْتٖ
    "thing",               // شَيْءٖ
    "thing",               // شَيْءٍ
    "fear",                // خَوْفٌ
    "rightly guided",      // رَشِيدٖ
    "supporter",           // نَصِيرٖ
    "majestic",            // مَجِيدٖ
    "wise",                // حَكِيمٖ
    "all-knowing",         // عَلِيمٖ
    "well-aware",          // خَبِيرٖ
    "all-seeing",          // بَصِيرٖ
    "all-hearing",         // سَمِيعٖ
    "all-powerful",        // قَدِيرٖ
    "merciful",            // رَحِيمٖ
    "generous",            // كَرِيمٖ
    "mighty",              // عَظِيمٖ
    "painful",             // أَلِيمٖ
    "establishing",        // مُقِيمٖ
    "manifest",            // مُبِينٖ
    "praiseworthy",        // حَمِيدٖ
    "day",                 // يَوْمَ
    "day",                 // يَوْمٖ
    "day",                 // يَوْمِ
    "witness",             // شَهِيدٖ
    "sincere",             // صَدِيقٖ
    "thing brought",       // جَيْئًا
    "impure",              // خَبِيثَ
    "different",           // غَيْرِ
    "good",                // خَيْرٗا
    "bird",                // طَيْرِ
    "house",               // بَيْتِ
    "olive",               // زَيْتُونٖ
    "gambling",            // مَيْسِرٖ
    "pure things",         // طَيِّبَٰتِ
    "your hands",          // أَيْدِيكُمْ
    "their hands",         // أَيْدِيهِمْ
    "my house",            // بَيْتِيَ
    "carrion",             // مَيْتَةً
    "trustworthy",         // أَمَيْنٖ
    "those",               // أُولَـٰئِكَ
    "fountain",            // عَيْنٗا
    "rain shower",         // صَيْبٖ
    "life",                // حَيَاةٖ
    "ease",                // هَوَادَ
    "between them",        // بَيْنَهُمْ
    "Isa",                 // عِيسَى
];

const wordElm = document.querySelector('.word-text');
const meanElm = document.querySelector('.mean-text');
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