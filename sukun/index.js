const words = [
    "حَمْدُ",
    "يَوْمِ",
    "غَيْرِ",
    "رَيْبَ",
    "غَيْبِ",
    "سَمْعِ",
    "عُمْىٌ",
    "مَوْتِ",
    "شَىْءٍ",
    "رَيْبٍ",
    "حَمْدِ",
    "غَيْبَ",
    "زَوْجُ",
    "خَوْفٌ",
    "أَوْفُ",
    "يَوْمًا",
    "أَنجَيْ",
    "عَفَوْ",
    "ءَاتَيْ",
    "قَوْمِ",
    "ظَلَمْ",
    "خَيْرٌ",
    "قَوْلًا",
    "غَيْرَ",
    "عَيْنًا",
    "عَلِمْ",
    "يَدَيْ",
    "لَوْنُ",
    "وَيْلٌ",
    "أَيْدي",
    "عَصَيْ",
    "مَوْتَ",
    "زَوْجِ",
    "خَيْرٍ",
    "أَمْرِ",
    "قَوْلِ",
    "أَمْرًا",
    "قَوْمٍ",
    "بَيْتَ",
    "أَمْنًا",
    "بَيْتِ",
    "مَوْتُ",
    "أَتَيْ",
    "حَيُْٰ",
    "خَوْفِ",
    "خَيْرًا",
    "يْلِ",
    "شَىْءٌ",
    "يَصُمْ",
    "خَيْطُ",
    "خَيْطِ",
    "لَيْسَ",
    "خَيْرَ",
    "قَضَيْ",
    "قَوْلُ",
    "أَمْرُ",
    "خَمْرِ",
    "زَوْجًا",
    "حَوْلِ",
    "عَسَيْ",
    "يَوْمٌ",
    "بَيْعٌ",
    "نَوْمٌ",
    "قَوْمَ",
    "يَوْمٍ",
    "عْلَمْ",
    "قَوْلٌ",
    "بَيْعُ",
    "بَيْعَ",
    "دَيْنٍ",
    "رْحَمْ",
    "زَيْغٌ",
    "هَدَيْ",
    "عَيْنِ",
    "خَيْلِ",
    "خَيْرُ",
    "يْلَ",
    "رَمْزًا",
    "أَوْلَى",
    "دُمْ",
    "طَوْعًا",
    "قَوْمًا",
    "بَيْتٍ",
    "خَيْرِ",
    "لَيْسُ",
    "غَيْظِ",
    "كَيْدُ",
    "غَدَوْ",
    "فَوْرِ",
    "غَيْظَ",
    "رَأَيْ",
    "قَوْلَ",
    "أَمْرَ",
    "عَزَمْ",
    "يَوْمَ",
    "نُمْلِى",
    "زَوْجَ",
    "فَوْزُ",
    "زَوْجٍ",
    "طَوْلًا",
    "مَيْلًا",
    "بَيْنِ",
    "مْسَحُ",
    "حَكَمْ",
    "فَوْزًا",
    "كَيْدَ",
    "أَمْرٌ",
    "أَمْنِ",
    "أَقَمْ",
    "تَقُمْ",
    "مَيْلِ",
    "قُمْ",
    "قَوْمٌ",
    "ْٰنَىْ",
    "بْنَىْ",
    "كَيْفَ",
    "عَيْنَ",
    "أَمْرٍ",
    "نَادَيْ",
    "فَوْقِ",
    "خَمْرُ",
    "صَيْدُ",
    "يَوْمُ",
    "رَءَيْ",
    "سَمْعَ",
    "غَيْرُ",
    "قَوْمُ",
    "يْلُ",
    "أَمْنُ",
    "خَوْضِ",
    "زَعَمْ",
    "مَيْتًا",
    "يَمْشِى",
    "جَزَيْ",
    "كَيْلَ",
    "جَمْعُ",
    "خَوْفًا",
    "يَدَىْ",
    "بَلَوْ",
    "أُمْلِى",
    "كَيْدِ",
    "حَمْلًا",
    "دَعَوْ",
    "يَمْشُ",
    "أَيْدٍ",
    "رَمَيْ",
    "غَنِمْ",
    "رَيْبِ",
    "حَوْلَ",
    "بَيْعِ",
    "تَلَوْ",
    "غَيْبُ",
    "جَرَيْ",
    "مَوْجُ",
    "لَيْلًا",
    "أَمْسِ",
    "عُمْىَ",
    "خَوْفٍ",
    "أَقِمْ",
    "مَوْجٍ",
    "ضَيْفِ",
    "رَجَمْ",
    "كَيْدًا",
    "هَيْتَ",
    "لُمْ",
    "خَمْرًا",
    "فَوْقَ",
    "كَيْلُ",
    "كَيْلٌ",
    "حِمْلُ",
    "عَيْنَا",
    "أَوْفِ",
    "ءَاذَيْ",
    "مْضُ",
    "عَمْرُ",
    "كَفَيْ",
    "خَيْلَ",
    "لَمْحِ",
    "ضَيْقٍ",
    "مَحَوْ",
    "تَمْشِ",
    "أَرَيْ",
    "صَوْتِ",
    "بَيْتٌ",
    "غَوْرًا",
    "أَوَيْ",
    "عَيْنٍ",
    "جَمْعًا",
    "سَمْعًا",
    "شَيْبًا",
    "صَوْمًا",
    "مْرَأَ",
    "سَوْءٍ",
    "أَوْصَ",
    "نَدَيْ",
    "مْكُُٰ",
    "ضْمُمْ",
    "عَيْنُ",
    "وَيْلَ",
    "حِمْلًا",
    "أَمْتًا",
    "هَمْسًا",
    "قَصَمْ",
    "وَيْلُ",
    "حَمْلٍ",
    "حَمْلَ",
    "كَسَوْ",
    "ءَاوَيْ",
    "رَحِمْ",
    "مْرٍِ",
    "زَيْتُ",
    "مَوْجٌ",
    "مَوْتًا",
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
    "بَيْتًا",
    "بَيْتُ",
    "تُمْسُ",
    "أَيْدِى",
    "صَوْتُ",
    "غَيَْٰ",
    "جَوْفِ",
    "خَوْفُ",
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
    "مْشُ",
    "أَيْدِ",
    "مْنُنْ",
    "فَوْجٌ",
    "سَمْعُ",
    "جَمْعِ",
    "يَمْحُ",
    "قَسَمْ",
    "مَوْلًى",
    "حَمْلُ",
    "مَوْلَى",
    "خَمْرٍ",
    "بَنَيْ",
    "قَوْلٍ",
    "مَوْرًا",
    "سَيْرًا",
    "خَوْضٍ",
    "لَمْحٍ",
    "طَيْرٍ",
    "تُمْنُ",
    "رَوْحٌ",
    "غَيٍْٰ",
    "تَمْشُ",
    "نَجَيْ",
    "خَيْلٍ",
    "عَادَيْ",
    "ذَوَىْ",
    "تَمْنُن",
    "جَمْعَ",
    "شَمْسًا",
    "كَيْدٌ",
    "نَوْمَ",
    "سَمْكَ",
    "لَيْلَ",
    "لَوْحٍ",
    "عَيْنٌ",
    "سَوْطَ",
    "طَيْرًا"
];

const means = [
    "praise, commendation",      // حَمْدُ
    "day",            // يَوْمِ
    "other than, different from", // غَيْرِ
    "doubt, suspicion", // رَيْبَ
    "unseen, hidden", // غَيْبِ
    "hearing",        // سَمْعِ
    "blindness",                 // عُمْىٌ
    "death",          // مَوْتِ
    "thing",          // شَىْءٍ
    "doubt, suspicion", // رَيْبٍ
    "praise, commendation", // حَمْدِ
    "unseen, hidden", // غَيْبَ
    "spouse, husband, pair", // زَوْجُ
    "fear",                      // خَوْفٌ
    "I fulfill",                 // أَوْفُ
    "day",          // يَوْمًا
    "I saved",                   // أَنجَيْ
    "I forgave",                 // عَفَوْ
    "meaning not found",         // ءَاتَيْ
    "people",         // قَوْمِ
    "I wronged",                 // ظَلَمْ
    "good",                      // خَيْرٌ
    "saying",       // قَوْلًا
    "other than, different from", // غَيْرَ
    "eye",          // عَيْنًا
    "I knew",                    // عَلِمْ
    "hands",              // يَدَيْ
    "color",        // لَوْنُ
    "woe",                       // وَيْلٌ
    "hands",                     // أَيْدي
    "I disobeyed",               // عَصَيْ
    "death",        // مَوْتَ
    "spouse, husband, pair", // زَوْجِ
    "good",           // خَيْرٍ
    "command",        // أَمْرِ
    "saying",         // قَوْلِ
    "command",      // أَمْرًا
    "people",         // قَوْمٍ
    "house",        // بَيْتَ
    "safety",       // أَمْنًا
    "house",          // بَيْتِ
    "death",        // مَوْتُ
    "I came",                    // أَتَيْ
    "meaning not found",         // حَيُْٰ
    "fear",           // خَوْفِ
    "good",         // خَيْرًا
    "night",          // يْلِ
    "thing",                     // شَىْءٌ
    "he fasts",                  // يَصُمْ
    "thread",       // خَيْطُ
    "thread",         // خَيْطِ
    "is not",                    // لَيْسَ
    "good",         // خَيْرَ
    "I decreed",                 // قَضَيْ
    "saying",       // قَوْلُ
    "command",      // أَمْرُ
    "wine",           // خَمْرِ
    "spouse, husband, pair", // زَوْجًا
    "around",         // حَوْلِ
    "perhaps",                   // عَسَيْ
    "day",                       // يَوْمٌ
    "selling",                   // بَيْعٌ
    "sleep",                     // نَوْمٌ
    "people",       // قَوْمَ
    "day",            // يَوْمٍ
    "I knew",    // عْلَمْ
    "saying",                    // قَوْلٌ
    "selling",      // بَيْعُ
    "selling",      // بَيْعَ
    "debt",           // دَيْنٍ
    "I had mercy", // رْحَمْ
    "deviation",                 // زَيْغٌ
    "I guided",                  // هَدَيْ
    "eye",            // عَيْنِ
    "horses",         // خَيْلِ
    "good",         // خَيْرُ
    "night",        // يْلَ
    "symbol",       // رَمْزًا
    "better, more deserving",    // أَوْلَى
    "last, continue",            // دُمْ
    "voluntarily",  // طَوْعًا
    "people",       // قَوْمًا
    "house",          // بَيْتٍ
    "good",           // خَيْرِ
    "is not",                    // لَيْسُ
    "rage",           // غَيْظِ
    "plotting",     // كَيْدُ
    "morning",                   // غَدَوْ
    "immediate",      // فَوْرِ
    "rage",         // غَيْظَ
    "I saw",                     // رَأَيْ
    "saying",       // قَوْلَ
    "command",      // أَمْرَ
    "I determined",              // عَزَمْ
    "day",          // يَوْمَ
    "we dictate",                // نُمْلِى
    "spouse, husband, pair", // زَوْجَ
    "success",      // فَوْزُ
    "spouse, husband, pair", // زَوْجٍ
    "length",       // طَوْلًا
    "mile",         // مَيْلًا
    "between",        // بَيْنِ
    "wiping",        // مْسَحُ
    "I judged",                  // حَكَمْ
    "success",      // فَوْزًا
    "plotting",     // كَيْدَ
    "command",                   // أَمْرٌ
    "safety",         // أَمْنِ
    "I established",             // أَقَمْ
    "you establish",             // تَقُمْ
    "mile",           // مَيْلِ
    "stand",        // قُمْ
    "people",                    // قَوْمٌ
    "meaning not found",         // ْٰنَىْ
    "sons",                      // بْنَىْ
    "how",                       // كَيْفَ
    "eye",          // عَيْنَ
    "command",        // أَمْرٍ
    "I called",                  // نَادَيْ
    "above",          // فَوْقِ
    "wine",         // خَمْرُ
    "hunting",      // صَيْدُ
    "day",          // يَوْمُ
    "I saw",                     // رَءَيْ
    "hearing",      // سَمْعَ
    "other than, different from", // غَيْرُ
    "people",       // قَوْمُ
    "night",        // يْلُ
    "safety",       // أَمْنُ
    "entering",       // خَوْضِ
    "I claimed",                 // زَعَمْ
    "dead",         // مَيْتًا
    "he walks",                  // يَمْشِى
    "I rewarded",                // جَزَيْ
    "measure",      // كَيْلَ
    "gathering",    // جَمْعُ
    "fear",         // خَوْفًا
    "hands",              // يَدَىْ
    "I tested",                  // بَلَوْ
    "I dictate",                 // أُمْلِى
    "plotting",       // كَيْدِ
    "carrying",     // حَمْلًا
    "I called",                  // دَعَوْ
    "he walks",                  // يَمْشُ
    "hands",          // أَيْدٍ
    "I threw",                   // رَمَيْ
    "I gained",                  // غَنِمْ
    "doubt, suspicion", // رَيْبِ
    "around",       // حَوْلَ
    "selling",        // بَيْعِ
    "I recited",                 // تَلَوْ
    "unseen, hidden", // غَيْبُ
    "I ran",                     // جَرَيْ
    "wave",         // مَوْجُ
    "night",        // لَيْلًا
    "yesterday",      // أَمْسِ
    "blindness",    // عُمْىَ
    "fear",           // خَوْفٍ
    "establish",    // أَقِمْ
    "wave",           // مَوْجٍ
    "guest",          // ضَيْفِ
    "I stoned",                  // رَجَمْ
    "plotting",     // كَيْدًا
    "come on",                   // هَيْتَ
    "blame",         // لُمْ
    "wine",         // خَمْرًا
    "above",        // فَوْقَ
    "measure",      // كَيْلُ
    "measure",                   // كَيْلٌ
    "load",         // حِمْلُ
    "two eyes",                  // عَيْنَا
    "fulfill",      // أَوْفِ
    "meaning not found",         // ءَاذَيْ
    "going",         // مْضُ
    "life",         // عَمْرُ
    "I sufficed",                // كَفَيْ
    "horses",       // خَيْلَ
    "glance",         // لَمْحِ
    "narrowness",     // ضَيْقٍ
    "I erased",                  // مَحَوْ
    "she walks",                 // تَمْشِ
    "I showed",                  // أَرَيْ
    "voice",          // صَوْتِ
    "house",                     // بَيْتٌ
    "depth",        // غَوْرًا
    "I took shelter",            // أَوَيْ
    "eye",            // عَيْنٍ
    "gathering",    // جَمْعًا
    "hearing",      // سَمْعًا
    "old age",      // شَيْبًا
    "fasting",      // صَوْمًا
    "woman",         // مْرَأَ
    "evil",           // سَوْءٍ
    "I recommended",             // أَوْصَ
    "I called",                  // نَدَيْ
    "meaning not found",         // مْكُُٰ
    "join",          // ضْمُمْ
    "eye",          // عَيْنُ
    "woe",          // وَيْلَ
    "load",         // حِمْلًا
    "death", // أَمْتًا
    "whisper",      // هَمْسًا
    "I broke",                   // قَصَمْ
    "woe",          // وَيْلُ
    "carrying",       // حَمْلٍ
    "carrying",     // حَمْلَ
    "I clothed",                 // كَسَوْ
    "meaning not found",         // ءَاوَيْ
    "I had mercy",               // رَحِمْ
    "meaning not found",         // مْرٍِ
    "oil",          // زَيْتُ
    "wave",                      // مَوْجٌ
    "death",        // مَوْتًا
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
    "house",        // بَيْتًا
    "house",        // بَيْتُ
    "you touch",                 // تُمْسُ
    "hands",                     // أَيْدِى
    "voice",        // صَوْتُ
    "meaning not found",         // غَيَْٰ
    "inside",         // جَوْفِ
    "fear",         // خَوْفُ
    "I tasted",                  // طَعِمْ
    "I refused",                 // أَبَيْ
    "flood",        // سَيْلَ
    "death",        // فَوْتَ
    "load",           // حِمْلِ
    "red",                       // حُمْرٌ
    "ghoul",                     // غَوْلٌ
    "white",                     // بَيْضٌ
    "mixing",       // شَوْبًا
    "I ransomed",                // فَدَيْ
    "walking",                   // مْشُ
    "hands",                     // أَيْدِ
    "favors",        // مْنُنْ
    "group",                     // فَوْجٌ
    "hearing",      // سَمْعُ
    "gathering",      // جَمْعِ
    "he erases",                 // يَمْحُ
    "I divided",                 // قَسَمْ
    "master",       // مَوْلًى
    "carrying",     // حَمْلُ
    "master",       // مَوْلَى
    "wine",           // خَمْرٍ
    "I built",                   // بَنَيْ
    "saying",         // قَوْلٍ
    "abundance",    // مَوْرًا
    "traveling",    // سَيْرًا
    "entering",       // خَوْضٍ
    "glance",         // لَمْحٍ
    "birds",          // طَيْرٍ
    "you favor",                 // تُمْنُ
    "spirit",                    // رَوْحٌ
    "meaning not found",         // غَيٍْٰ
    "she walks",                 // تَمْشُ
    "I saved",                   // نَجَيْ
    "horses",         // خَيْلٍ
    "I was hostile",             // عَادَيْ
    "it withered",               // ذَوَىْ
    "you favor",                 // تَمْنُن
    "gathering",    // جَمْعَ
    "sun",          // شَمْسًا
    "plotting",                  // كَيْدٌ
    "sleep",        // نَوْمَ
    "fish",         // سَمْكَ
    "night",        // لَيْلَ
    "tablet",         // لَوْحٍ
    "eye",                       // عَيْنٌ
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