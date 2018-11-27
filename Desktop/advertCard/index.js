

function palindromChecker(word) {
    // declaration d'une variable qui va contenir l'inverse du mot 'word'
    var wordReverse = '';

    // boucle inversé afin de construire l'inverse du mot 'word'
    for (var i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
    }

    // on retourne la comparaison du mot d'origin et son inverse
    return wordReverse === word;
}



function palindromChecker2(word) {
    var i = 0;
    while (i < word.length) {
        if (word[i] != word[word.length - 1 - i]) {
            return false
        }
        i++
    }
    return true;
}

console.log(palindromChecker2('wow'))