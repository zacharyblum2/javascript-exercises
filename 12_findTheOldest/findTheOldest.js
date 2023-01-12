const findTheOldest = function(people) {
    // Given array of people with name, birth year, death year, find the oldest person. 
    let max = 0, index = 0, age = 0;
    let currYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath == undefined)
            age = currYear - people[i].yearOfBirth;
        else 
            age = people[i].yearOfDeath - people[i].yearOfBirth;

        if (max < age) {
            max = age;
            index = i;
        }        
    }

    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
