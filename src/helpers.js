require('./database')

const UserModel = require('./models/userModel')


// let model = new UserModel()

// model.fullName = 'Thomas Anderson'

// console.log(model.toJSON())

// console.log()

// console.log(model.fullName)

UserModel.getUsers()

  .then(docs => {

    console.log(docs)

  })

  .catch(err => {

    console.error(err)

  })
  