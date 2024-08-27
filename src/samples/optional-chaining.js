const person = {
    name: 'Marc',
    cat: {
        name: 'Lilly',
    }
};

let dogName;

if (person.dog) { // check if person has a dog (the dog property is not null or undefined)
    dogName = person.dog.name;
}

dogName = person.dog?.name; // same thing with chaining. 
// the dog? indicates that dog property might be missing 
// and resolves the entire expression to undefined if it's missing

console.log(`{person.name}'s dog is called ${dogName}`);