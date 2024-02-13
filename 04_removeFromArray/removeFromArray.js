const removeFromArray = function(originalArray, ...itemsToRemove) {
    let newArray = [];

    for (let element of originalArray) {
        if (!(itemsToRemove.includes(element))) {
            newArray.push(element);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
