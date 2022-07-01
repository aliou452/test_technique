const { faker } = require("@faker-js/faker");

let giveName = () => faker.name.findName();
let giveCountry = () => faker.address.country();
let randomNumber = maxNum => faker.datatype.number({
    min: 0,
    max: maxNum
});




let generatePerson = (maxNum = 10) => {
    
    let num = randomNumber(maxNum);
    let ans = [];

    for(let i = 0; i < num; i++){
        let person = {};
        person.name = giveName();
        person.country = giveCountry();

        ans.push(person);
    }

    

    return ans;
}

let persons = generatePerson(maxNum = 1000);
console.log(persons);


// Question 2

let getNameInsideCountry = (persons) => {

    let citizen = "Citizen of ";
    let map = new Map();
    let ans = [];

    for(let person of persons) {
        let key = citizen + person.country;
        let value = map.has(key) ? map.get(key) + ", " + person.name : person.name
      
        map.set(key, value);
    }

    for (const [key, value] of map.entries()) {
        ans.push(key + ": " + value);
    }

    return ans;
}

console.log(getNameInsideCountry(persons));


