const palindromes = function (string) {
    // Creates an array from the original string with any non-number and non-letter characters filtered out
    let noPunctuation = string.toLowerCase().split("").filter((character) => ((character >= "a" && character <= "z") || (character >= 0 && character <= 9)) && character != " ");
    // Reverses the filtered array and creates a string
    let reversedString = noPunctuation.slice().reverse().join("");
    let noPunctuationString = noPunctuation.join("");
    return noPunctuationString === reversedString;
};

const palindromesRegex = function (string) {
    let noPunctuation = string.toLowerCase().replaceAll(/[^a-z\d]/g, "");
    let reversedString = noPunctuation.split("").reverse().join("");
    return noPunctuation === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
