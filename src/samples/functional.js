const animals = ['dog', 'cat', 'horse', 'rabbit', 'snake'];

animals.forEach(animal => {
    console.log(animal);
});
// is the same as
for (let animal in animals) {
    console.log(animal);
}

// get only animals with an a in their name
let animalsWithA = animals.filter(animal => animal.includes('a'));

// convert the animal names to uppercase
let bigAnimals = animals.map(animal => animal.toUpperCase());

// combine the two operations
let bigAnimalsWithA = animals
    .filter(animal => animal.includes('a'))
    .map(animal => animal.toUpperCase());

bigAnimalsWithA.forEach(animal => {
    console.log(animal);
});
