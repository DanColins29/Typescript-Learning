const foo = {
    name: 'tom',
    age: 30,
    nervous: false
}

const bar = {
    name: 'dick',
    age: 40,
    nervous: false
}

const baz = {
    name: 'harry',
    age: 50,
    nervous: true
}


console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.log({foo,bar,baz});

console.table([foo, bar, baz]);

// Timer
console.time('looper');

let i = 0;
while(i<100000){i++}

console.timeEnd('looper');

// Stack Trace Logs
const deleteMe = () => console.trace('bye bye database');

// deleteMe();
// deleteMe();

// Destructing
const turtle = {
    name: 'bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

function feed(animal){
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} Kilos of ${diet}`;
}

feed();