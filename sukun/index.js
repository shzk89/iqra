const words = [
    "حَمْدُ",
    "غَيْرِ",
    "رَيْبَ",
    "غَيْبِ",
    "عُمْىٌ",
    "شَىْءٍ",
    "رَيْبٍ",
    "حَمْدِ",
    "غَيْبَ",
    "أَوْفُ",
    "عَفَوْ",
    "ظَلَمْ",
    "غَيْرَ",
    "عَلِمْ",
    "يَدَيْ",
    "لَوْنُ",
    "وَيْلٌ",
    "عَصَيْ",
    "زَوْجِ",
    "أَمْرِ",
    "أَمْنًا",
    "مَوْتُ",
    "أَتَيْ",
    "خَوْفِ",
    "شَىْءٌ",
    "يَصُمْ",
    "خَيْطُ",
    "خَيْطِ",
    "لَيْسَ",
    "خَيْرَ",
    "قَضَيْ",
    "قَوْلُ",
    "حَوْلِ",
    "عَسَيْ",
    "نَوْمٌ",
    "قَوْمَ",
    "بَيْعَ",
    "دَيْنٍ",
    "زَيْغٌ",
    "هَدَيْ",
    "خَيْلِ",
    "رَمْزًا",
    "أَوْلَى",
    "دُمْ",
    "طَوْعًا",
    "لَيْسُ",
    "غَيْظِ",
    "غَدَوْ",
    "فَوْرِ",
    "غَيْظَ",
    "رَأَيْ",
    "عَزَمْ",
    "يَوْمَ",
    "نُمْلِى",
    "فَوْزُ",
    "طَوْلًا",
    "مَيْلًا",
    "بَيْنِ",
    "حَكَمْ",
    "فَوْزًا",
    "كَيْدَ",
    "أَمْنِ",
    "أَقَمْ",
    "تَقُمْ",
    "مَيْلِ",
    "قُمْ",
    "كَيْفَ",
    "عَيْنَ",
    "نَادَيْ",
    "فَوْقِ",
    "صَيْدُ",
    "رَءَيْ",
    "سَمْعَ",
    "غَيْرُ",
    "أَمْنُ",
    "خَوْضِ",
    "زَعَمْ",
    "مَيْتًا",
    "يَمْشِى",
    "جَزَيْ",
    "كَيْلَ",
    "بَلَوْ",
    "أُمْلِى",
    "دَعَوْ",
    "يَمْشُ",
    "رَمَيْ",
    "غَنِمْ",
    "رَيْبِ",
    "حَوْلَ",
    "تَلَوْ",
    "غَيْبُ",
    "جَرَيْ",
    "مَوْجُ",
    "لَيْلًا",
    "أَمْسِ",
    "عُمْىَ",
    "أَقِمْ",
    "مَوْجٍ",
    "ضَيْفِ",
    "رَجَمْ",
    "هَيْتَ",
    "لُمْ",
    "خَمْرًا",
    "فَوْقَ",
    "كَيْلُ",
    "كَيْلٌ",
    "حِمْلُ",
    "عَيْنَا",
    "أَوْفِ",
    "عَمْرُ",
    "كَفَيْ",
    "خَيْلَ",
    "لَمْحِ",
    "ضَيْقٍ",
    "مَحَوْ",
    "تَمْشِ",
    "أَرَيْ",
    "صَوْتِ",
    "غَوْرًا",
    "أَوَيْ",
    "شَيْبًا",
    "صَوْمًا",
    "سَوْءٍ",
    "أَوْصَ",
    "نَدَيْ",
    "وَيْلَ",
    "حِمْلًا",
    "هَمْسًا",
    "قَصَمْ",
    "وَيْلُ",
    "حَمْلَ",
    "كَسَوْ",
    "رَحِمْ",
    "زَيْتُ",
    "مَوْجٌ",
    "قَدِمْ",
    "هَوْنًا",
    "ضَيْرَ",
    "جَيْبِ",
    "سَاقَيْ",
    "فَوْجًا",
    "تَمْشِى",
    "سَقَيْ",
    "نَجَوْ",
    "غَوَيْ",
    "لَيْلٍ",
    "بَيْتُ",
    "تُمْسُ",
    "صَوْتُ",
    "جَوْفِ",
    "طَعِمْ",
    "أَبَيْ",
    "سَيْلَ",
    "فَوْتَ",
    "حِمْلِ",
    "حُمْرٌ",
    "غَوْلٌ",
    "بَيْضٌ",
    "شَوْبًا",
    "فَدَيْ",
    "فَوْجٌ",
    "يَمْحُ",
    "قَسَمْ",
    "مَوْلًى",
    "مَوْلَى",
    "بَنَيْ",
    "مَوْرًا",
    "سَيْرًا",
    "خَوْضٍ",
    "لَمْحٍ",
    "طَيْرٍ",
    "تُمْنُ",
    "رَوْحٌ",
    "تَمْشُ",
    "نَجَيْ",
    "خَيْلٍ",
    "عَادَيْ",
    "ذَوَىْ",
    "جَمْعَ",
    "شَمْسًا",
    "نَوْمَ",
    "سَمْكَ",
    "لَيْلَ",
    "لَوْحٍ",
    "سَوْطَ",
    "طَيْرًا"
];

const means = [
    "praise",      // حَمْدُ
    "different from", // غَيْرِ
    "doubt", // رَيْبَ
    "unseen", // غَيْبِ
    "blindness",                 // عُمْىٌ
    "thing",          // شَىْءٍ
    "doubt", // رَيْبٍ
    "praise", // حَمْدِ
    "unseen", // غَيْبَ
    "I fulfill",                 // أَوْفُ
    "I forgave",                 // عَفَوْ
    "I wronged",                 // ظَلَمْ
    "different from", // غَيْرَ
    "I knew",                    // عَلِمْ
    "hands",              // يَدَيْ
    "color",        // لَوْنُ
    "woe",                       // وَيْلٌ
    "I disobeyed",               // عَصَيْ
    "husband", // زَوْجِ
    "command",        // أَمْرِ
    "safety",       // أَمْنًا
    "death",        // مَوْتُ
    "I came",                    // أَتَيْ
    "fear",           // خَوْفِ
    "thing",                     // شَىْءٌ
    "he fasts",                  // يَصُمْ
    "thread",       // خَيْطُ
    "thread",         // خَيْطِ
    "is not",                    // لَيْسَ
    "good",         // خَيْرَ
    "I decreed",                 // قَضَيْ
    "saying",       // قَوْلُ
    "around",         // حَوْلِ
    "perhaps",                   // عَسَيْ
    "sleep",                     // نَوْمٌ
    "people",       // قَوْمَ
    "selling",      // بَيْعَ
    "debt",           // دَيْنٍ
    "deviation",                 // زَيْغٌ
    "I guided",                  // هَدَيْ
    "horses",         // خَيْلِ
    "symbol",       // رَمْزًا
    "more deserving",    // أَوْلَى
    "continue",            // دُمْ
    "voluntarily",  // طَوْعًا
    "is not",                    // لَيْسُ
    "rage",           // غَيْظِ
    "morning",                   // غَدَوْ
    "immediate",      // فَوْرِ
    "rage",         // غَيْظَ
    "I saw",                     // رَأَيْ
    "I determined",              // عَزَمْ
    "day",          // يَوْمَ
    "we dictate",                // نُمْلِى
    "success",      // فَوْزُ
    "length",       // طَوْلًا
    "mile",         // مَيْلًا
    "between",        // بَيْنِ
    "I judged",                  // حَكَمْ
    "success",      // فَوْزًا
    "plotting",     // كَيْدَ
    "safety",         // أَمْنِ
    "I established",             // أَقَمْ
    "you establish",             // تَقُمْ
    "mile",           // مَيْلِ
    "stand",        // قُمْ
    "how",                       // كَيْفَ
    "eye",          // عَيْنَ
    "I called",                  // نَادَيْ
    "above",          // فَوْقِ
    "hunting",      // صَيْدُ
    "I saw",                     // رَءَيْ
    "hearing",      // سَمْعَ
    "different from", // غَيْرُ
    "safety",       // أَمْنُ
    "entering",       // خَوْضِ
    "I claimed",                 // زَعَمْ
    "dead",         // مَيْتًا
    "he walks",                  // يَمْشِى
    "I rewarded",                // جَزَيْ
    "measure",      // كَيْلَ
    "I tested",                  // بَلَوْ
    "I dictate",                 // أُمْلِى
    "I called",                  // دَعَوْ
    "he walks",                  // يَمْشُ
    "I threw",                   // رَمَيْ
    "I gained",                  // غَنِمْ
    "doubt", // رَيْبِ
    "around",       // حَوْلَ
    "I recited",                 // تَلَوْ
    "unseen", // غَيْبُ
    "I ran",                     // جَرَيْ
    "wave",         // مَوْجُ
    "night",        // لَيْلًا
    "yesterday",      // أَمْسِ
    "blindness",    // عُمْىَ
    "establish",    // أَقِمْ
    "wave",           // مَوْجٍ
    "guest",          // ضَيْفِ
    "I stoned",                  // رَجَمْ
    "come on",                   // هَيْتَ
    "blame",         // لُمْ
    "wine",         // خَمْرًا
    "above",        // فَوْقَ
    "measure",      // كَيْلُ
    "measure",                   // كَيْلٌ
    "load",         // حِمْلُ
    "two eyes",                  // عَيْنَا
    "fulfill",      // أَوْفِ
    "life",         // عَمْرُ
    "I sufficed",                // كَفَيْ
    "horses",       // خَيْلَ
    "glance",         // لَمْحِ
    "narrowness",     // ضَيْقٍ
    "I erased",                  // مَحَوْ
    "she walks",                 // تَمْشِ
    "I showed",                  // أَرَيْ
    "voice",          // صَوْتِ
    "depth",        // غَوْرًا
    "I took shelter",            // أَوَيْ
    "old age",      // شَيْبًا
    "fasting",      // صَوْمًا
    "evil",           // سَوْءٍ
    "I recommended",             // أَوْصَ
    "I called",                  // نَدَيْ
    "woe",          // وَيْلَ
    "load",         // حِمْلًا
    "whisper",      // هَمْسًا
    "I broke",                   // قَصَمْ
    "woe",          // وَيْلُ
    "carrying",     // حَمْلَ
    "I clothed",                 // كَسَوْ
    "I had mercy",               // رَحِمْ
    "oil",          // زَيْتُ
    "wave",                      // مَوْجٌ
    "I arrived",                 // قَدِمْ
    "ease",         // هَوْنًا
    "harm",         // ضَيْرَ
    "pocket",         // جَيْبِ
    "I gave to drink",           // سَاقَيْ
    "group",        // فَوْجًا
    "she walks",                 // تَمْشِى
    "I gave to drink",           // سَقَيْ
    "I saved",                   // نَجَوْ
    "I went astray",             // غَوَيْ
    "night",          // لَيْلٍ
    "house",        // بَيْتُ
    "you touch",                 // تُمْسُ
    "voice",        // صَوْتُ
    "inside",         // جَوْفِ
    "I tasted",                  // طَعِمْ
    "I refused",                 // أَبَيْ
    "flood",        // سَيْلَ
    "out of reach",        // فَوْتَ
    "load",           // حِمْلِ
    "red",                       // حُمْرٌ
    "ghoul",                     // غَوْلٌ
    "white",                     // بَيْضٌ
    "mixing",       // شَوْبًا
    "I ransomed",                // فَدَيْ
    "group",                     // فَوْجٌ
    "he erases",                 // يَمْحُ
    "I divided",                 // قَسَمْ
    "master",       // مَوْلًى
    "master",       // مَوْلَى
    "I built",                   // بَنَيْ
    "abundance",    // مَوْرًا
    "traveling",    // سَيْرًا
    "entering",       // خَوْضٍ
    "glance",         // لَمْحٍ
    "birds",          // طَيْرٍ
    "you favor",                 // تُمْنُ
    "spirit",                    // رَوْحٌ
    "she walks",                 // تَمْشُ
    "I saved",                   // نَجَيْ
    "horses",         // خَيْلٍ
    "I was hostile",             // عَادَيْ
    "it withered",               // ذَوَىْ
    "gathering",    // جَمْعَ
    "sun",          // شَمْسًا
    "sleep",        // نَوْمَ
    "fish",         // سَمْكَ
    "night",        // لَيْلَ
    "tablet",         // لَوْحٍ
    "whip",         // سَوْطَ
    "birds",        // طَيْرًا
];

const wordElm = document.querySelector('.word-text');
const meanElm = document.querySelector('.mean-text');
const progElm = document.querySelector('.prog-bar');
const addBtnElm = document.querySelector('.add-button');
const subBtnElm = document.querySelector('.sub-button');

const scrCount = 24;

let id = -1;
let ids = [];

let scr = 0;

// Do stuff
for (let i = 0; i < words.length; i++) { ids.push(i); }
Shuffle(ids);

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
    wordElm.textContent = words[ids[id]];
    meanElm.textContent = means[ids[id]];
    progElm.style.width = (scr / (scrCount) * 100) + '%';
}

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}