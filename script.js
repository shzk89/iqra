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

function Randomize() {
    const randomId = Math.floor(Math.random() * words.length);
    document.getElementById('quest-text').textContent = words[randomId];
    document.getElementById('mean-text').textContent = means[randomId];
}

Randomize();