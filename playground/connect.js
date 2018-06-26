const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if (err) {

 return console.log('unable to cnnect');
}
console.log('Connected')

db.collection('Todos').find().count().then((count)=>{
	console.log(`todos count ${count}`);

},(err)=> {
	console.log("Unable to fetch")
});


 //db.close();

});