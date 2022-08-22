require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 app.use(express.json());
app.use(express.static('resources'));
 
const port=process.env.PORT || 8081;
global.__basedir = __dirname;

// Configuring the database
// const dbConfig = require('./app/config/mongodb.config.js');
mongoose.connect(mongoString,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false,
});
const database=mongoose.connection
mongoose.Promise = global.Promise;
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
require('./app/routes/user.route.js')(app);
 
app.listen(port,()=>{
  console.log(`Server Started at ${port}`)
})



