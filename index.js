const express = require('express');
const dotenv = require('dotenv');
const routersAPI = require('./routers/api');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//load environment variabel
dotenv.config();

//Implementation routers
app.use('/',routersAPI);

app.use(function(err, req, res, next){
  res.status(422).send({err: err.message})
});

app.listen(process.env.PORT, function(req,res){
  console.log('Express server started !');
})
