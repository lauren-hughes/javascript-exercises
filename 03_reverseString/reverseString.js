const reverseString = function(word) {
    let wordArray = word.split("");
    wordArray.reverse();

    let reversedWord = "";
    for (let character of wordArray) {
        reversedWord += character;
    }
    
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
