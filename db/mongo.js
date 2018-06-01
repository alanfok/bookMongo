const mongoose = require ('mongoose');

const url="mongodb://localhost:27017/book"

mongoose.connect(url,(err,result)=>{
    if(err){
      return  console.log("fail to login")
    };
    console.log("Mongo connected");
});

module.exports = {mongoose};