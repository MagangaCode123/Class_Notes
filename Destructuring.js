/**
 * We use destructuring to unpack values from objects/Arrays
 * Notice : the variable must have the same name as the property inside the object.
 */



let student = { 
    address: { city: {
        name: 'Nairobi',
    }, country: 'USA' } 

}

console.log(student.address.city)