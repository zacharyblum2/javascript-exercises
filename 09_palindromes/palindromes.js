const palindromes = function (string) {
    // Idea: Create a copy of the string but reverse it. Then compare directly to original. 

    // Convert string to all lowercase and replace all non alphabetic characters with ""
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (processedString.split("").reverse().join("") == processedString);
};

// Do not edit below this line
module.exports = palindromes;
