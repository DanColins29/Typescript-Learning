const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, atack: 60, defense: 45};

const lv10 = {...pikachu, ...stats};
const lv11 = {...pikachu, hp:45};

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];
// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Shift
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle',]