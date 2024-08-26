const animals = ['dog', 'cat', 'horse', 'rabbit', 'snake'];

for (let i = 0; i < animals.length; ++i) {
    console.log(animals[i]);
}

for (let animal of animals) {
    console.log(animal);
}

let j = 0;
while (++j < animals.length) {
    console.log(animals[j]);
}

let k = 0;
do { // will error if there are no animals in the array
    console.log(animals[k]);
} while (++k < animals.length);