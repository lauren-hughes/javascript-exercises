const repeatString = function(string, num) {
    // This was required per repeatString.spec.js line 16
    if (num < 0) {
        return "ERROR";
    }
    
    let repeatedString = "";

    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
