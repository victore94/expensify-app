// OBJECT DESTRUCTURING 
// const person = {
//     name: 'Victor',
//     age: 26,
//     location: {
//         city: 'Fairfield',
//         temp: 72
//     }
// }

// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'The Traitor Baru Cormorant ',
//     author: 'Seth Dickenson',
//     publisher: {
//         name: ' Tor Books'
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher
// console.log(publisherName)


//
//ARRAY DESTRUCTURING
//

const address = ['533 derby ct', 'Fairfield', 'California', 94533]
const [, city, state,] = address
console.log(`You are in ${city}, ${state}`)



const items = ['Coffee(hot)', '$2.00', '$2.50', '$3.00']
const [drink, , med] = items
console.log(`A ${drink} is ${med}`)