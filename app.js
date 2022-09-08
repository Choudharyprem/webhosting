require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const mongoString = process.env.DATABASE_URL
const path=require('path');
const socketio=require('socket.io');

const {userJoin,getCurrentUser,getRoomUsers}=require('./utils/users')
const app = express();
const http=require('http')
const server=http.createServer(app);
const io=socketio(server);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 app.use(express.json());
 app.use(cors());
app.use(express.static('resources'));

 app.use(express.static(path.join(__dirname,'views')));
const port=process.env.PORT || 8081;
global.__basedir = __dirname;

 //Run when client connects
io.on('connection',socket=>{
  console.log('New ws Connect');

  socket.on('joinRoom',({firstname,email,room})=>{
const user=userJoin(socket.id,firstname,email,room);

    socket.join(user.room);
//welcome current user
socket.emit('message','Welcome to the Live_users');
  
//Broadcast when a users connects
socket.broadcast.to(user.room).emit('message',`${user.firstname} has join the room`);
//send user and room info
io.to(user.room).emit('roomUsers',{
  room:user.room,
  users:getRoomUsers(user.room)
});


// //Runs when client disconnects
socket.on('disconnect',()=>{
  io.emit('message','a user has left the room')
})
  })
 console.log(socket.id);
  

});



 

// Configuring the database
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

server.listen(port,()=>{
  console.log(`Server Started at ${port}`)
})








