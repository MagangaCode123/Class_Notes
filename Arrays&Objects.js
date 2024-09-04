// let q = 2
// let i = 8

// if (i * q === 10){
//     console.log('i')
// }
// else{
//     console.log(i)
// }

//to concatenate a string - simply joining two string together
/**
 * 1.using a + sign
 * 2.using concatenation property--->
 * 
 * objects - help us more real word variable
 * 
 * 
 */
let firstname = 'First'
let lastname = 'last'

let person;

console.log(firstname + " " + lastname)


//objects
//object variables are called keys


let abductee = {
    name: 'Murife Junior',
    age: 20,
    date: '26/07/2024',
    gender: 'Male'
}

//Object.entries ---> creates a new array for every key-value pair

let user ={
    firstname: '',
    lastname: '',
    address: '',

}

//accessing object
/**
 * 1.using brackets notation
 * 2.using dot notation
 * 
 * some few properties or functions
 * 1.Object.keys() -> allows u to access the keys -> returns an array
 * 2.Object.values()
 * 3.Object.entries()
 */

console.log(abductee.name)
console.log(abductee['name'])

console.log(Object.keys(abductee))
console.log(Object.values(abductee))
console.log(Object.entries(abductee))
console.log(abductee)


//Arrays
//two ways of initializiang arrays
/**
 * 1.Using new Array
 * 2.using an empty bracket
 * 
 * properties of arrays that will copme in handy 
 * 1.length -> checks the lemgth of the array
 * 2.pop -> it removes the last element
 * 3.push -> it adds a value at the end of the array
 * 4.shift -> it removes the first element
 * 5.unshift -> it adds to the first index/add to the first element
 * 6.splice ->
 * 
 * //there is destructive && non destructive methods of arrays
 * destructive -> manipulate the original array and give you a new one
 * non-destructive -> they dont give you a new array
 * 7.
 */

const newArray = new Array()

const newArray2 = ['Val1', 'val2', 'val3', 'val4']

console.log(newArray2.length)

//a website that keeps track of stray dogs
//
let userPets = [] //keeps track of all pets that they have adopted

userPets.push()


    //let them adopt a dog
    userPets.push('dog 1')
    userPets.push('dog 2')
    // userPets.push('dog 3')
    // userPets.push('dog 4')
    // userPets.push('dog 5')

    userPets.splice(2, 1)//while removing
    // userPets.pop()

    const array1 = ['a', 'b', 'c', 'd', "e"];

    const results = array1.entries()

    console.log(typeof(results))

    for (let i of results){
        console.log(i)
    }

//for of is in objects 
//for in in arrays

let anotherArray = array1.filter(letter => letter === 'e')

console.log(anotherArray)

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result)



/**
 * 0: e
 * 1: x
 * 2: u
 * 3: b
 * 4: e
 * 5: r
 */

