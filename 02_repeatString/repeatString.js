const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR'
    }
    let out = ''
    for (i=0; i<n; i++) {
        out += string;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
