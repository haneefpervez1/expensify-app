//
// Object destructuring
//

// const person = {
//     name: "Haneef",
//     age: 19,
//     location: {
//         city: "South Brunswick",
//         temp: 93
//     }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It is ${temperature} degrees in ${city}.`);
// }

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher : {
//        name: "Penguin"
//     }
// };

// const { name:publisherName = "Self-published" } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ["1299 S Juniper St", "Philadelphia", "Pennsylvania", "19147"];
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [product, ,medPrice] = item;
console.log(`A ${product} is ${medPrice}.`);