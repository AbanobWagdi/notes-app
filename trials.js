const person = {
    name: 'abanob',
    age: '24',
}

const person1 = JSON.stringify(person)
console.log(person1)
console.log(person1.age)

const personObject = JSON.parse(person1)
console.log(personObject)

const fs = require('fs')

fs.writeFileSync('persons.jason',person1)
console.log(fs.readFileSync('persons.jason').toString())