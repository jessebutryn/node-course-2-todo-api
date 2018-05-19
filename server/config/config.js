var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://jesse_b:test!234@ds127490.mlab.com:27490/todo-app'
} else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://jesse_b:test!234@ds229450.mlab.com:29450/todotest'
}