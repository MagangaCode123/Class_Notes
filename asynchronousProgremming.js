//promise --->defined when a a request will take time such as fetching resources from servers


//pending,succesfull,rejected


const addSalary = new Promise((resolve,reject) =>{
const response = fetch(`/api/contacts`)

if(response){
    resolve(response)
}
else{
    reject('Failed to fetch contacts')
}



}).then(data => console.log(data))
.catch(err => console.error('Error initializing response',err))
.finally(()=> console.log('Promise ended'))


/**
 * 
 * {
 * name:'Sista Jackie',
 * phoneNumber: '0702872394',
 * email: bn@fm.com
 * 
 * }
 */








