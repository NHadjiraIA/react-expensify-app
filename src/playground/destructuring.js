const person = {
    name:'hadjira',
    age:41,
    location: {
        city:'Cornwall',
        temp:92
    }
}
// we check if the person.name exist if yes we put the value in first/name if not we put Anonymous
const {name:firstName ='Anonymous', age} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: tr} = person.location;

if(city && tr) {
    console.log(`it is ${tr} in ${city}`);
}
const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};
const { name:PublisherName  = 'Anonymous'} = book.publisher;

console.log(PublisherName)

//
// Arry destructuring
//

const address = ['1299 Juniper Street', 'Philadelphia', 'PennsyIvania', '19147'];

const [ ,Ville, state= 'New york',]= address;
console.log(`you are in ${state}`)


const item = ['Cofee (hot)', '$2.44', '$2.85', '$4.33']
const [ cofee, , price,] = item;
console.log(`a meduim ${cofee} costs ${price}`)