const caesar = function(string, num) {
    // Num tells you how far you should shift each letter. 
    // Non alphabetic shouldnt work. 

    for (let i = 0; i < string.length; i++) {
        string[i] = string.charCodeAt(i) + num
    }
};

// Do not edit below this line
module.exports = caesar;
