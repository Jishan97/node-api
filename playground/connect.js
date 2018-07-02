const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if (err) {

 return console.log('unable to cnnect');
}
console.log('Connected')

// db.collection('Todos').find().count().then((count)=>{
// 	console.log(`todos count ${count}`);

// },(err)=> {
// 	console.log("Unable to fetch")
// });





// -----------delete many

// db.collection('Todos').deleteMany({text:'to eat'})
// .then((res)=>{
// console.log(res);
// });

//delete one


// db.collection('Todos').deleteOne({
// 	text:"to"
// }).then((result)=>{
// 	console.log(result);
// });
//find and delete

// db.collection('Users').findOneAndDelete({
// 	name:"JISHAN SHAIKH"
// }).then((result)=>{
// console.log(result);
// });




//update--------------------------------------------------------

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b2dcbddc3a03b5c78fc6f7e')
},{
	$set:{
		name:'king jishan'
	},

	$inc: {
        age:1
	}

},{
	returnOriginal:false
}).then((res)=>{
console.log(res);
});


//------------------------------------------



 //db.close();

});