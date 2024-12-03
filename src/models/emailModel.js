let mongoose = require('mongoose')

let validator = require('validator')




let emailSchema = new mongoose.Schema({

    email: String,
    username:{
      type: String,
      required: true
    }
  
  },{timestamps: true})


// const Schema = new mongoose.Schema


// const emailSchema = Schema({
//     name:{
//         type: String,
//         require: true,
//         unique: true,
//     },
     
   
// })


// const studentSchema = Schema({
//     name:{
//         type: String,
//         require: true
//     },
//     age: {
//         type: String,
//         require: true
//     },
//     class:{
//         type: String,
//         require: true
//     },
//     DOB:{
//         type: String
//     },
    

// })

//using enum
// const userPaymentDetails = Schema({
//     username:{
//         type:String,
//         require: true
//     },
//     paymentTypes:{
//         type: String,
//         enum: ['Mpesa', 'Visa', 'Mastercard']
//     },
//     year:{
//         enum:['2024']
//     },
//     paymentMonth:{
//         enum:['January', 'February', 'March']
//     }

// })



// module.exports = mongoose.model('Email', emailSchema)


//converts Email to emails

// {
//     email: "hjgk@this.getMaxListeners.com",
//     username: 'Some Usernamer'
// }



/**
 * 1.import mongoose
 * 2.Create a schema
 */


// const Schema = new mongoose.Schema

// const studentSchema = Schema({
//     name:{
//         type: String,
//         require: true

//     },
//         age: {
//         type: String,
//         require: true
//     },
//     class:{
//         type: String,
//         require: true
//     },
//     DOB:{
//         type: String
//     },
    

// })



// const studentSchema = new mongoose.Schema({
//         name:{
//         type: String,
//         require: [true, "name is required”]
//     },
//         age: {
//         type: String,
//         require: true
//     },
//     class:{
//         type: String,
//         require: true
//     },
//     DOB:{
//         type: String
//     },
//     validate: (value) => {

//         return validator.isAlpha(value)
  
//       }
// })


module.exports = mongoose.model('Email', emailSchema)

