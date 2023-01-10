const sumAll = function(n1, n2) {

    // If we are not adding numbers return an error. 
    if (typeof(n1) != "number" || typeof(n2) != "number")
        return 'ERROR';

    let sum = 0, start = 0, end = 0;

    if (n1 < n2) {
        start = n1; 
        end = n2; 
    }
    else {
        start = n2; 
        end = n1;
    }
    
    for (let i = start; i <= end; i++) {
        sum += i; 
    }

    if (sum < 0)
        return 'ERROR';
    else
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
