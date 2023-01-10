const repeatString = function(string, num) {
    if (num < 0)
        return "ERROR";

    let retval = '';

    for (let i = 0; i < num; i++) 
        retval += string;
        
    return retval
};

// Do not edit below this line
module.exports = repeatString;
