const animals = ['dog', 'cat', 'horse', 'rabbit', 'snake'];

// Select a random animal from the array
let selectedAnimal = animals[Math.floor(Math.random() * animals.length)];

switch (selectedAnimal) {
    case 'dog':
        console.log('woof!');
        break;
    case 'cat':
        console.log('meow!');
        break;
    case 'horse':
        console.log('neigh!');
        break;
    case 'rabbit':
        console.log('squeak!');
        break;
    case 'snake':
        console.log('hiss!');
        break;
    default:
        console.log("I don't know the sound!");
        break;
}