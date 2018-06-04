const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pug = require('pug');

const {mongoose} = require('./db/mongo');
app.set('view engine','pug');
app.use(bodyParser.json);
app.use('/api',require('./routes/api'))







app.listen(3000 , ()=>console.log("TEST"));