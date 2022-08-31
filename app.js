require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const mongoString = process.env.DATABASE_URL
const path=require('path');
const socketio=require('socket.io');
const formatMessage=require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
}=require('./utils/users');

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
const botName='Admin';
//Run when  client  connects
io.on('connection',socket=>{
  socket.on('joinRoom',({username,room})=>{
    const user=userJoin(socket.id,username,room);

    socket.join(user.room);
//welcome current user
socket.emit('message',formatMessage(botName,'welcome to ChatApp'));

//Broadcast when a user connects
socket.broadcast
.to(user.room)
.emit('message',formatMessage(botName,`${user.username} has joined the chat`));


//Send users and room Info
io.to(user.room).emit('roomUsers',{
room:user.room,
users:getRoomUsers(user.room)
});
  });
  //Listen for chatMessage
  socket.on('chatMessage',(msg)=>{

    const user=getCurrentUser(socket.id);

    io.to(user.room).emit('message',formatMessage(user.username,msg));

  });
   //Runs when client disconnects
   socket.on('disconnect',()=>{
    const user=userLeave(socket.id);

    if(user){
      io.to(user.room).emit(
        'message',
        formatMessage(botName,`${user.username} has left the chat`)
        );

        
//Send users and room Info
io.to(user.room).emit('roomUsers',{
  room:user.room,
  users:getRoomUsers(user.room)
  });
    }
  });
});
database.once('connected', () => {
  console.log('Database Connected');
})
require('./app/routes/user.route.js')(app);

server.listen(port,()=>{
  console.log(`Server Started at ${port}`)
})









