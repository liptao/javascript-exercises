const sumAll = function(first, second) {
    if ((first < 0 || second < 0) || (!Number.isInteger(first) || !Number.isInteger(second))) {
        return 'ERROR'
    }
    const max = Math.max(first, second);
    const min = Math.min(first, second);
    let sum = 0;
    
    for (let i=min; i <= max; i++) {
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
