function isPalindrome(word) {
    word = word.toLowerCase();
    let endingIndex = word.length - 1;
    // console.log(`${word} - letters remaining: ${word.length}`)
    if (word.length <= 1) return true;
    if (word[0] === word[endingIndex]) {
        return isPalindrome(word.slice(1, endingIndex))
    }
    return false;
}


isPalindrome('Sarah'); // return false;
isPalindrome('tacocat'); // return true
isPalindrome('Hannah'); // return true
isPalindrome('bottle'); // return false;
isPalindrome('PALINdROme'); // return false;
