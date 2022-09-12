
const roomName=document.getElementById('room-name');
const userList=document.getElementById('users');
//Get username and room from url
const { firstname,email,room} = Qs.parse(location.search, { ignoreQueryPrefix: true })
console.log(firstname,email,room);
var win;
const socket=io();

//Join chat room
socket.emit('joinRoom',{firstname,email})

//get room and users
socket.on('roomUsers',({room,users})=>{
outputRoomName(room);
outputUsers(users);
})
//message from server
socket.on('message',(message)=>{
  console.log(message);
  outputMessage(message);
});
//outputmessage to DOM
function outputMessage(message){
  const div=document.createElement('div')
  div.classList.add('message');
  div.innerHTML=`<p class="text">${message}</p>`;
  document.querySelector('.container').appendChild(div);
}
//Add room to DOM
function outputRoomName(room){
  roomName.innerText=`Live_users`;
}
//add users to DOM
function outputUsers(users){
  userList.innerHTML=`
  ${users.map(user=>`<h3 style="color:blue">
  Name:${user.firstname}&nbsp;
  EmailId:<a href="#" onclick="openPrivate()">${user.email}</a>&nbsp;
  SocketID:<a href="#" onclick="openPrivate()">${user.id}</a></h3>`).join('')}
  `;
}

 
function openPrivate() {
  win =window.open('/api/users/all', 1, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,width=300,height=400');         
 console.log(win);
}
// window.open(url, name, params):
