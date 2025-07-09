const words = [
    'كَتَبَ',
    'جَلَسَ',
    'فَتَحَ',
    'ذَهَبَ',
    'قَرَأَ',
    'شَرِبَ',
    'نَزَلَ',
    'سَمِعَ',
    'حَفِظَ',
    'لَعِبَ',
    'عَلِمَ',
    'فَهِمَ',
    'حَزِنَ',
    'فَرِحَ',
    'كَبِرَ',
    'صَغِرَ',
    'طَوِلَ',
    'قَصِرَ',
    'كَرُمَ',
    'شَرُفَ',
    'حَسُنَ',
    'قَبُحَ',
    'عَظُمَ',
    'صَغُرَ',
    'كَثُرَ',
    'قَلُّ',
    'بَعُدَ',
    'قَرُبَ'
];

const means = [
    'he wrote',
    'he sat',
    'he opened',
    'he went',
    'he read',
    'he drank',
    'he descended',
    'he heard',
    'he memorized',
    'he played',
    'he knew',
    'he understood',
    'he was sad',
    'he was happy',
    'he grew old',
    'he became small',
    'it became long',
    'it became short',
    'he was generous',
    'he was noble',
    'he was good/beautiful',
    'he was ugly',
    'he was great',
    'he was small',
    'it was many',
    'it was few',
    'it was far',
    'it was near'
];

let id = 0;

const wordElm = document.querySelector('.word-text');
const meanElm = document.querySelector('.mean-text');
const nextElm = document.querySelector('.next-button');

// Fisher-Yates
function Shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomId]] = [array[randomId], array[i]];
    }
}

// Next button listener
nextElm.addEventListener("click", function(){
    id++;
    if (id >= words.length) { id = 0; }

    wordElm.textContent = words[id];
    meanElm.textContent = means[id];
});