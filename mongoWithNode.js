const { MongoClient }= require('mongodb')


const uri = "mongodb+srv://codebymaganga:V2jTj9997HI3LI5A@zone01.dn7ol.mongodb.net/?retryWrites=true&w=majority&appName=Zone01"


const client = new MongoClient(uri)



const connectToDatabase = async()=>{

    try {
        
        await client.connect()

       

   
           const db =  client.db('test')


           const collection = db.collection('employees').find({})

           const results = await collection.toArray()

           console.log('collection',results)


        






    } catch (error) {
        console.log('Error connecting to db-->',error)
    }
    finally{
        client.close()
    }
    
}


connectToDatabase()