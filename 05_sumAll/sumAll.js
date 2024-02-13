const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    if (typeof numOne != "number" || typeof numTwo != "number") {
        return "ERROR";
    }
    
    if (numTwo > numOne) {
        startNum = numOne;
        endNum = numTwo;
    }
    else {
        startNum = numTwo;
        endNum = numOne;
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
