var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var  BookSchema = new Schema({
    text :{
        type: String,
        required : true,
        trim : true
    },
ISBN :{
        type: Number,
    default: null
},
    OnStock : {
        type: Boolean,
         default: false
    }
});



const Book = mongoose.model('book',Book)
module export