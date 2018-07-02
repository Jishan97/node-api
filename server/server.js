var mongoose = require('mongoose');


mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
  
     text:{
       type:String
     },
 
     completed:{
         type:Boolean

     },

     completedAt:{
    type:Number
     }
});

var newTodo = new Todo({
    text:"Cook dinner"
});

var newTodo1 = new Todo({
    text:"Cook nothing",
    completed:true,
    completedAt:2
});


newTodo1.save().then((doc)=>{
    console.log("saved:",doc);
}, (e)=>{
    console.log("unable");
});
