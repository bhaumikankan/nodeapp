const mongoose=require('mongoose');
const conection=mongoose.connection;

mongoose.connect('mongodb://localhost:27017/parchai')

conection.on('connected',()=>{
    console.log('db connected');
})

conection.on('error',()=>{
    console.log('db error');
})

module.exports = mongoose;