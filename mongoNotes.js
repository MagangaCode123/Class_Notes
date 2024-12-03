//recap of finding documents in mongoDb
//to write a query we simply use a dollar sign before the keyword ---> db.students.find({name:{$eq:'Murife'}})

/**
 * 
 * //FINDING DATA
 * db.collectionName.find() ---->this returns all documents in our collection
 * 
 * db.collectionName.find({<query>}) ----.this returns a document with the specified query
 * 
 * 
 * db.collection.find({}) ----->returns every document in the collection
 * 
 * db.collection.findOne({grades: $gt:{50}) ------> returns the first document that matches the criteria
 * 
 * 
 * equal --> db.students.find({name:{$eq:'Murife'}})
 * greater than or equal to --> db.students.find({name:{$gt/$gte:'Murife'}})
 * lesser than or equal to --> db.students.find({name:{$lt/$lte:'Murife'}})
 * 
 * 
 * //QUERYING ARRAYS
 * db.products.find({name:{'Sister Jackie'}}) -----> returns fields even when they are not arrays
 * 
 * {
 * name: 'Sister Jackie',
 * age: 40,
 * teacher:'form4A'
 * 
 * },
 * 
 * {
 * class: 'Snow Flurry Dervish'
 * name: ['Sister Jackie', 'Murife Jr']
 * }
 * 
 * db.producgs.find(name:{$elemMatch: 'Sister Jackie', 'Murife Jr'})
 * $elemMatch ---> by using elemMatch you are only querying arrays
 * 
 * db.<collectionName>.find({<query>,$elemMatch})
 * 
 * 
 */


//db.products.find({value:{$elemMatch{$gte: 40}}})

//db.teachers.find({class:{$elemMatch: 'Snow Flurry'}})




////REPLACING DOCUMENTS
//db.<collectionName>.replaceOne({filter--->unique indentifier in your document}, {pass details to be changed.replaced})


/**
 * 3 paramateres---1st its your filter(unique identifier), 2nd----->Details you are updating, 3rd-----> optional parameters
 * 
 * db.<collectionName>.replaceOne({_id:ObjectId(678634534uy)},{
 * db.<collectionName>.replaceOne({_id:ObjectId(678634534uy)},{
 * name: sister jackie',
 * age: 25,
 * teacher:'form1A',
 * 
 * 
 * 
 * } )
 * teacher:'form2A'
 * 
 * 
 * } )
 */
//
/**
 * db.students.replaceOne({_id:ObjectId('573a1398f29313caabceb4f0'), {
 *      name: 'Samuel Sth',
 *         age: 36,
 *      }
 * 
 * 
 * 
 */




///UPDATING DATA
/***
 * 
 * update one---> takes 3 parameters, 1st Filter(unique identifier), 2nd(update options----> $set,$push,$upsert)
 * set---> updates the value,
 * 
 * db.<collectionName>.updateOne({title:('Titanic'), {$set:{
 *      name: 'Black Jack'
 * }}}})
 * 
 * 
 * 
 * 
 * db.<collectionName>.updateOne({filter})
 * 
 * 
 * push------> adds a value
 * 
 * 
 * db.<collectioName>.updateOne({_id:ObjectId(6687632576952bc), {
 *      $push:{
 *      hobbies: ['Swimming', 'Cycling']
 * }
 * }})
 * {
 *  _id:ObjectId('6687632576952bc'),
 *  name: 'Sister Jackie',
 *  age: 20,
 *  teacher: 'JS Essentials',
 *  hobbies['Cycling', 'Swimming']
 *  
 * }
 * 
 * db.<collectionName>.updateOne({title: 'Titanic'}, {
 *      $push:{
 * cast:[']
 * },
 *  {$upsert: true}
 * })}})
 * 
 * db.collectionName>.updateOne({_id: ('67586723nb'), {
 *      $push: {
 *      teacher: 'Graphic Design'
 * }
 * }})
 * 
 * 
 * {
 *   matchedCount: 1

    modifiedCount:1

    upsertedId:0

    upsertedCount:0

    true
 * }
 * 
 * //Find And Modify
 * 
 * 3 parameters---->1st filter(unique identifier), 2nd whatevere you want to modify, 3rd setting new to true
 * 
 * db.<collectionName>.findAndModify({_id: ('67586723nb'},
 * {
 * name: 'Jack The Giant'
 * }, 
 * {

 * }
 * 
 * )
 * new: true
 * {
 * 
 * name: 'Sister Jackie',
 *  age: 20,
 *  teacher: 'JS Essentials',
 *  hobbies['Cycling', 'Swimming']
 * 
 * }
 * 
 * //update Many
 * 3 parameters -----> 1st filter value, 2nd updated info you want to update, 3rd options parameter
 * 
 * 
 * db.<collectionName>.updateMany({credit_card: 'Visa'}, {
 *  $set:{
 *      promotion: 10
 * },
 * {
 *  upsert: true
 * } 
 * })
 * 
 *  {
 * _id: ObjectId(6924765824bn)
 * promotion: 10,
 * }
 * score--->away goals + home goals ---> total number scored in the match
 *    db.games.updateMany(
      { grade: { $gt:95} },
      { $set: { rewards : true} }
   );
 * 
 * //DELETE
 * takes only parameter--->criteria for the field contained in the documents you want to delete
 * 
 * db.<collectioName>.deleteOne({title:'Not Good'})
 * 
 * db.student.deleteMany({grades:$lt: 90)})
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * {
 *      name: 'Brother Bernard',
 *      class: 'JS Essentials',
 *      grades: 'A'
 * 
 * }
 * 
 * 
 * {    
 *      name: 'Sister Jackie',
 *      class: 'JS Essentials',
 *      grades: 'A'
 * 
 * }
 */
/**SORT----arranging data in a specified criteria
 *  
 * 1---->ascending 
 * -1------> descending
 * 0---->ignore this field
 * 
 * 
 * db.students.find().sort({grade: 1}) ---> sorts from lowest to highest, 
 * 
 * db.students.find().sort({grade: -1}) ---> sorts from highest to lowest
 * 
 * 
 * LIMIT----->limits the number of documents return
 * 
 * db.students.find().sort({grade: -1, name: 1}).limit(3) ---- this returns 3 documents
 * 
 * 
 * 
 * 
 * //PROJECTION-------> used when excluding fields or including the fields that you want in your query
 * 
 *      {
            name: "Roma",
            age: 30,
            branch: EEE,
            department: "HR",
            salary: 20000
        }

        db.employees.find({}, {name: true}, {age: true} ) -----> 

        {
          
            name: "Roma",
            age: 30,
        },
         {

            name: "Paris",
            age: 20,
        }





 * COUNTING DOCUMENTS

        
 * db.students.countDocuments({grades:{$lte: 50}}) --->count all students who have grades less than or equal to 50
 * 
 * db.students.countDocuments({}) --->this counts all documents in ur collection
 * 
 * 
 * 
 */

 /**
  * AGGREGATE------> a summary of data in the documents
  * 
  * AGGREGATION PIPELINE------>steps you will create on documents for processing or making aggregation on your data
  * 
  * $out----->it creates a new collection of the data processed ------> 'unpaidFee_SWE' (every student with unpaid balance at graduation date)
  * 
  * db.find({name:{$eq: 'Brother Bernard'}})
  * 
  * db.<collectionName>.aggregate([])
  * 
  * 
  * //      {
  *             name: '',
  *             age:'',
  *             track: '',
  *             class: '',
  *             email: '',
  *             unpaid_balance: '',
  *             DateOfJoining:'',
  *             DateOfGraduation: '',
  *             Gender: '',
  *            
  * 
  * 
  * 
  * }
  * 
  *  returns all students with unpaid fee balance and groups them in to their respective gender
  * 
  * db.students.aggregate([
  *  
  * {
  *         $match:{
  *             track: 'Software Development Bootcamp'
  *         }
  *
  * 
  * },
  *  {
  *            $group:{
  *                 _id: $gender, //use null when u dont want to group your documents with a specific criteria,
  *                 total_number: {$count: 'unpaid_balance'  } //counts the total number of people in the gender
  * 
  * 
  *                 }
  * }, 
  * {
  *             $out: 'unpaidFee_SWE'
  * }
  *     
  * 
  * ])
  * 
  * return the  first 3 students in Software Dev Bootcamp who joined first
  * 
  * 
  * db.students.find({track:{$eq: "Software Development Bootcamp" }}).sort({ DateOfJoining: 1, _id: 1}).limit(3)
  * 
  * db.students.aggregate([
  *     {
  *         $match:{
  *             track: 'Software Development Bootcamp'
  *         },
  *         {
  *             $sort:{
  *                 DateOfJoining: 1, _id: 1
  *             }
  *         },
  *       
  *         {
  *             $project:{
  *                    name: 1,
  *          
  *                     DateOFJoining: 1
  * ] 
  *                 }
  *         },
  *             {
  *             $set:{
  *                     isAdmitted: true
  *             }
  *             
  *             }
  *      
  * 
  *         {
  *                 $limit: 3
  *         }

  * }, 
                {
                    $out: {
                        db: "<output-db>",
                        coll: "earlyJoiners" 
                    
                    }

                }
  * 
  * ])
  * 
  */


/***
 * 
 * INDEXES ---->identifiers for our data in our documents
 * 
 * 
 * //pros for using indexes
 * 
 * 1.for improved perfomance ------> 
 * 
 * 2.Unique constraints ------> db.<collectioName>.createIndex({track: 1}, {unique: true})
 * 
 * _id
 * 
 * createIndex -------> db.<collectionName>.createIndex({admissionNumber: 1})
 * 
 * getIndex --------->db.<collectionName>.getIndexes()
 * 
 * 
 * deleteIndex --------> db.<collectionName>.dropIndex({"runtime"})
 * 
 * 
 * db.<collectioName>.explain().find({})
 * 
 * COLLSCAN -----> no index is being used
 * IXSCAN ----> there is an index being used 
 * 
 * 
 * 
 * db.<collectionName>.createIndex({name:1,track:1, class:1 }, name: 'compound1') ---> compound Index
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */




/*****
 * 
 * SEARCH INDEX------> sets criteria for our search results
 * 
 * 
 * Dynamic searching ------> all fields are indexes
 * 
 * 
 * 
 * 
 * 
 * 
 */




/****
 * ways of searching thru documents in a system
 * 
 * 
 * 1.to fetch all documents/moviees and then create the search query in the front end
 * 
 * 
 * 2.implement searching in the api 
 * 
 * 
 * https://www.google.com/search?client={whatever the client searchesr}
 * 
 * 
 * /search?client=1_win ----> 
 * 
 */


//{name:{$eq: 'Sister Jackie'}}

