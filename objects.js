const cato = {
    name: 'Cato',
    age: 5,
    breeds: ['terrier', 'german shepard'],
};
const rue = {
// Left side are keys, Right side are values 
    name: 'Rue',
    age: 6,
    breeds: ['labrador', 'Ridgeback'],
    // JS does not like dashes, use single quote to make a string
    'best-friend': cato,
    favoriteThings: {
        toy: null,
        walk: 'trails',
        activity: 'catch',
        food: 'Picky',
    }
};

cato['best-friend'] = rue;
let colors = ['red', 'white', 'blue'];
colors[0] = 'blue';
// asignn keys to the object

console.log(rue);
console.log(rue.name);
console.log(rue.age);
console.log(rue.breeds[1]);

const rueBreeds = rue.breeds;
console.log(rueBreeds);

const favoriteWalk = rue.favoriteThings.walk;
// console.log(rue.favoriteThings.walk);
console.log(favoriteWalk);

// Below is red because JS does not like minus sign
// console.log(rue.best-friend);
console.log(rue['best-friend']);
console.log(rue['name']);
// any key can be turned into a bracket with single quote

