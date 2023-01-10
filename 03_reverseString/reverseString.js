const reverseString = function(string) {
    // Reverse a string.

    // 1. Using functions
    // Split the string to return an array. 
    let split = string.split("");

    // Use reverse() to reverse the array. 
    let reverse = split.reverse();

    // Use Join to join the array as a string.
    let retval = reverse.join("");

    return retval;

    // 2. Using for loop (first idea)
    // let newString = "";
    // for (let i = string.length - 1; i >= 0; i--)
    //     newString += string[i];

    // return newString;
};

// Do not edit below this line
module.exports = reverseString;
