let mongoose = require('mongoose');

// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER

// const database = 'test';      // REPLACE WITH YOUR DB NAME

class Database {

  constructor() {

    this._connect()

  }

_connect() {

     mongoose.connect(`mongodb+srv://codebymaganga:V2jTj9997HI3LI5A@zone01.dn7ol.mongodb.net/test`)

       .then(() => {

         console.log('Database connection successful')

       })

       .catch(err => {

         console.error('Database connection error',err)

       })

  }

}

module.exports = new Database()