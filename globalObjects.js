const os = require('os')

const path = require('path')

// const timoeut = setTimeout(()=>{
//     console.log('Log me after some seconds')
// }, 3000)


// clearTimeout(timoeut)


const someInterval = setInterval(()=>{
        console.log('Log me after some seconds')
    }, 2000)

 clearInterval(someInterval)



//  console.log('file--->',__filename)

//  console.log('dir--->',__dirname)

//  console.log('my os', os.totalmem())

//  if(os.totalmem() < 200000){
//     alert('insufficient memory in you device please free up memory ')
//  }

const fullPath = path.join(__dirname, 'globalObjects')

console.log(fullPath)




