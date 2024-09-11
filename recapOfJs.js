//Arrow Functions - const newFunction = () =>{}

/**
 * Arrays are lists - u use square brackets [] or new Array
 * 
 */

const array2 = new Array
const anotherArray = []

/**
 * Objects enable us to define properties for variables
 * to access this properties we use dot notation or bracket notation
 */

let person1 = {
    name: 'Murife Jr',
    age: 20,
    talent: 'Playing Football',
    parents: ['Brother Bernard', 'Sister Mary'],
    talk: function () {
        console.log('I am talking to you')
    }
}



//my name is Maganga and I am studying JS fullstack development at GMC

/**
 * String Interpolation - is when we want to access a value inside a string
 * we use backticks + ${expression}
 */

let name = 'Brother Bernard'
let school = 'GomyCode'
let course = 'Data Science'


console.log(`My name is ${name} and I am studying ${course} development at ${school}  `)
console.log(`ur result is  ${4 + 5}`)

/**
 * TERNARY OPERATORS- alternatives to if statements
 * mostly they make code readable and are less time consuming
 * 
 * 1.write our condition you have 
 * 2.check if its true -> use the question mark
 * 3.by default you should use the colon and pass an empty value
 * 4.you dont have to use return statements
 * 
 * 
 */

let age = []
let result;


 
// if(age){
//     console.log('I have a value')
// }
// else{
//     console.log('I dont have a value')
// }

// if(age.length > 0){
//     console.log('I have a value')
//      return a certain value
// }
// else{
//     "I dont have a value"
// }
let a = -4;
let result2 = (a === 0) ?  "zero" : a> 0 ? "positive"  : "negative";
console.log(`The number is ${result2}.`);

// const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }];
// let i = 0;
// while (i < people.length && people[i].name != 'Jack') {
//  i++;
// }
// if (i !== people.length) {
//  console.log('Jack is in  index ' + i);
// } else {
//     console.log('Cannot find Jack');
// }










