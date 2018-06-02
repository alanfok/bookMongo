const express = require('express');
const app = express();
const pug = require('pug');
var {Book} = require('./models/book')

//const {mongoose} = require('./db/mongo');
app.set('view engine','pug');
app.post('/book',(req,res)=>{
    var book = new Book({
        text: req.body.text,
        ISBN: req.body.ISBN,
        OnStock:req.body.OnStock
    });
    book.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
        })
});




 app.get('/',(req,res)=> {
     res.render("welcome");
     });
app.listen(3000 , ()=>console.log("TEST"));