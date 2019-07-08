const express = require('express');
const dotenv = require('dotenv');
const routersAPI = require('./routers/api');
const app = express();

//load environment variabel
dotenv.config();

//Implementation routers
app.use('/api',routersAPI);

app.use(function(err, req, res, next){
  res.status(422).send({err: err.message})
});

app.listen(process.env.PORT, function(req,res){
  console.log('Express server started !');
})
