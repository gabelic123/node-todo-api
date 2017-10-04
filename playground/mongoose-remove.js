const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


Todo.findByIdAndRemove('59d42131c52b8b236f9327b4').then((todo) => {
	console.log(todo);
});