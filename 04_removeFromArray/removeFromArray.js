const removeFromArray = function(inputArray, ...removeItems) {
    removeItemsArray = Array.from(arguments).slice(1)
    return inputArray.filter(item => !removeItemsArray.includes(item))
    
};

console.log(removeFromArray([1, 2, 3], 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
