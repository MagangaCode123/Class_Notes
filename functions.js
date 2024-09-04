//a function is a set of code that you can reuse
/**
 * 1.Function
 * 2.You can assign a variable to a function
 * 3.We can use arrow functions
 * every function should have a return keyword
 * 
 * 
 */

//method 1
function myName(){
    //do sth
}

//method 2
const myNameFunction = function(){
    //do sth
    
}

//method 3 - using arrow functions
const myNameFunction2 = (a,b) =>{
    //do sth
    return a + b //return 10 + 20

}

//cube(3)
/*



*/

const result = 20

function cube(x){
    let result = x * x * x //6 * 6 * 6 = 216
    let result2 = 56
    //result = 27
   
    return result // return 216
}
console.log(result)

//for loops were looping stuff result 

function start(){
    let x = cube(3) //x = 27

    if (x > 30){
        console.log('Hello')
    
    }
    else{
        console.log('goodbye') 
    }
}

console.log(start())

//name + () -> how to invoke function

function checkBoolean(grade){
    let result = grade >= 0 && grade <= 100 
    return result //true ||  false
}

//a ternary operator -> grade >= 0 && grade <= 100 ? result = grade >= 0 && grade <= 100 : pass your else statement

//if you are comparing two variables the result will always be either true // false

//comparison operators -> &&/==/!== 

//

// //if(grade >= 0 && grade <= 100){

// }
// else if(){

// }

//if(pass your condition){
/**
 * if(pass your condition){
 */

function validGrade(grade){
    let result = grade >= 0 && grade <= 100 //is 42 a number btwn 0 & 100 -> TRUE
    return result //TRUE
}

// function start(){
//     var grade=  readInt('Enter Grade : ') //a prompt is saved inside GRADE -> reads an integer
//     if(validGrade(grade)){
//         printIn(grade)
//     }
//     else{
//         printIn('go wash my car')
//     }
// }

//to give parameters default values, initialize them inside your parenthesis
 function manyParameters(x = 20,y = 50, z = 10){
    return z + x + y
 }
//let y = 50
//y = 30
 console.log(manyParameters())


 //in variables we hve global variable and local variable
 //global variable -> accesable thru out your code file
 //local variables -> accesible only to the particular function

 //the return of % is always a remainder







