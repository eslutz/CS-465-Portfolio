const mongoose = require('mongoose');
const readLine = require('readline');

let dbURL = 'mongodb://localhost/travlr'
if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}

const connect = () => {
  setTimeout(() =>
      mongoose.connect(dbURL, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
      }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log('DB connected');
});

mongoose.connection.on('error', err => {
  console.log('DB error', err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('DB disconnected');
});

if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ('SIGINT', () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`DB disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

connect();

require('./models/users');
require('./models/meals');
require('./models/news');
require('./models/rooms');
require('./models/trips');
