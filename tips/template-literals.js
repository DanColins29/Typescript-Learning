const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

const {name, size, skills} = horse;

bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

console.log(bio);

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} yers`;
}

const bio2 = horseAge `This horse is ${horse.age}`;