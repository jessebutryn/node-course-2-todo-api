var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jesse_b:test!234@ds127490.mlab.com:27490/todo-app');

module.exports = {mongoose};