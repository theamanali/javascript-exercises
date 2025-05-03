function getAge(person) {
    let death = person.yearOfDeath;

    if (!death) {
        death = new Date().getFullYear();
    }
    return death - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);

        if (oldestAge < currentAge) {
            return current;
        }
        else return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
