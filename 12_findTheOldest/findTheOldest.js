const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        const person1Age = findAge(person1.yearOfBirth, person1.yearOfDeath);
        const person2Age = findAge(person2.yearOfBirth, person2.yearOfDeath);

        return person2Age - person1Age;
    });
    return people[0];
};

const findTheOldestReduce = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = findAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return (currentPersonAge > oldestAge) ? currentPerson : oldest;
    });
};

const findAge = function(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }

    return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
