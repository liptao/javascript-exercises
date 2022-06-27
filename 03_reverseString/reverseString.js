const reverseString = function(string) {
    const stringAsArray = string.split('');
    stringAsArray.reverse();
    return stringAsArray.join('');
}

// Do not edit below this line
module.exports = reverseString;
