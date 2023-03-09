const Mongoose = require('mongoose');
const Logger = console;

Mongoose.Promise = global.Promise;

let isConnected;
let DB = 'mongodb://localhost:27017/test';

module.exports = connectToDatabase = () => {
  if (isConnected) {
    Logger.info('=> using existing database connection');
    return Promise.resolve();
  }
  Logger.info('=> using new database connection');
  return Mongoose.connect(DB, {
    useNewUrlParser: true,
   // useFindAndModify: false,
   // useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then((db) => {
      isConnected = db.connections[0].readyState;
    })
    .catch((err) => {
      Logger.error('Mongo DB Connection error');
      Logger.error(err);
    });
};