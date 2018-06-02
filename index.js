const express = require('express');
const app = express();
const pug = require('pug');

//const {mongoose} = require('./db/mongo');
app.set('view engine','pug');
app.post('/',(req,res)=>{




});
 app.get('/',(req,res)=> {
     res.render("welcome");
     });
app.listen(3000 , ()=>console.log("TEST"));