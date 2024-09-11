
//USING SPREADING IN OBJECTs
//we simply use open brackets and elipses and name of the object we want to add onto 

/**
 * We use spreading to add new Objects and Properties to an existing object
 */

const Person = {
    name: 'Brother Bernard',
    role: 'Software Engineer',
    department: 'Tech & AI',
    dateOfJoining: '11/10/2024',
}

//if the employee has a date of joining add manager property

const addManager = () =>{
    let newObj;
    if(Person.dateOfJoining){
        newObj = {...Person, manager: 'Murife Jnr'} 
       
    }
    console.log(newObj)
    return
}

addManager()

//Spreading With Arrays
/**
 * We are adding aarays into another arrays
 */

const array1 = ['word1', 'word2', 'word3']
const array2 = ['neWord', 'anotherWord' ]
const anotherArray = array1 + array2

// let newArray = [...array1, ...array2]
//  let newArray = array1.concat(array2)

/**
 * 1.we want to add 2 arrays-> array1 + array2 
 */

function addNeWArray(arr1,arr2){
    
    let newArray = arr1 + ',' + arr2
    console.log(newArray)
    return newArray

}

addNeWArray(array1,array2)

let array3 = [...array2]

//
for(let i = 0; i < array1.length; i++){
    array3.push(array1[i])
}

array2.push(...array1)

console.log(array2)








// console.log(newArray)














