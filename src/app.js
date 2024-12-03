require('./database')
const EmailModel = require('./models/emailModel')


// let EmailModel = require('./email')


//Adding a record to mongoose
let msg = new EmailModel({

  email: 'testOne@gmail.com',
  username: 'Tester Email'

})

msg.save()

   .then(doc => {

     console.log(doc)

   })

   .catch(err => {

     console.error(err)

   })

//db.collection.find({}) ---->returns all records


//find record
EmailModel

  .find({email : 'johndoe@gmail.com'})

  .then(doc => {

    console.log(doc)

  })

  .catch(err => {

    console.error(err)

  })


//update
EmailModel

  .findOneAndUpdate(

    {

      email: 'johndoe@gmail.com',
      username: 'John Doe'  // search query 

    }, 

    {

      email: 'malimali@gmail.com',
      username: 'Mali Mali'

    },

    {

      new: true,                      

      runValidators: true              

    })

  .then(doc => {

    console.log(doc)

  })

  .catch(err => {

    console.error('error updating records--->',err)

  })


//delete 
EmailModel

  .findOneAndDelete({

    email: 'ADA.LOVELACE@GMAIL.COM'

  })

  .then(response => {

    console.log(response)

  })

  .catch(err => {

    console.error(err)

  })





