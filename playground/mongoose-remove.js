const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5aff1e46098001001439d3ae'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5aff1e46098001001439d3ae').then((todo) => {
	console.log(todo);
});