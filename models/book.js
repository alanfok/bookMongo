var mongoose = require('mongoose');
var Sahema=mongoose.Schema;

var  Book = new Sahema({
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

module.exports = {Book};