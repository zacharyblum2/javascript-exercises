const removeFromArray = function(...args) {
    // Loop through args
    //    1. Check if valid argument (is integer)
    //    2. Check if in array
    //          a. If so, remove
    //          b. If not, do nothing

    // Pull the array.
    const array = args[0];

    // Create a new array to place unique values.
    const newArray = [];

    // For each item in the array.
    array.forEach((item) => {

        // Check if there is an argument to remove it. 
        if (!args.includes(item)) {
            // If not, add it to the newArray.
            newArray.push(item);
        }
    });

    // Return the newArray.
   return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
