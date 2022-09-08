const roomName=document.getElementById('room-name');
const userList=document.getElementById('users');
//Get username and room from url
const { firstname,email,room} = Qs.parse(location.search, { ignoreQueryPrefix: true })
console.log(firstname,email,room);

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
  EmailId:<a href="/api/users/all">${user.email}</a>&nbsp;
  SocketID:<a href="/api/users/all">${user.id}</a></h3>`).join('')}
  `;
}
