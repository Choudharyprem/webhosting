var express = require('express');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 app.use(express.json());
app.use(express.static('resources'));
 
const port=process.env.PORT || 8081;
global.__basedir = __dirname;

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false,
})
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
require('./app/routes/user.route.js')(app);
 
// Create a Server
var server = app.listen(port, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})
