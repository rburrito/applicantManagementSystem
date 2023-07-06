const express=require('express');
const app=express();
const router=require('./routes/routes.js');
const db=require('./models/database.js');
const pg=require('pg');
const hstore=require('pg-hstore');
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
const bodyParser=require('body-parser');
const session=require('express-session');
const Form=require('./models/formModel.js');
const Question=require('./models/questionModel.js');
const Response=require('./models/responseModel.js');
const User=require('./models/userModel.js');
let port=process.env.PORT || 3000;

app.use(session({
  // remove session secret to environment variable
  secret:'24cc-4d44-wrrq38s',
  resave:true,
  saveUninitialized:true
}));

app.use(basicAuth({
  users:{
    'admin': 'scarySecretPasswordChanged133333',
    'adam':'revealedPassword1333333',
    'eve':'dangerouslyEasyPassword13333'
  },
  challenge: true,
  realm:'Imb4T3st4pp'
}));

router(app, db, Form, Question, Response, User);

app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});
