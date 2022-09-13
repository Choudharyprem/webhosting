
const roomName=document.getElementById('room-name');
const userList=document.getElementById('users');
const dialogBox = document.getElementById("dialog")
const closeBtn = document.getElementById("close");
const todoContainer = document.getElementById("todo_container");
const todo__text = document.getElementById("todo__text");

//Get username and room from url
const { firstname,lastname,mobileno,email,street,city,state,country,loginid,room} = Qs.parse(location.search, { ignoreQueryPrefix: true })
console.log(firstname,lastname,mobileno,email,street,city,state,country,loginid,room);
var win;
const socket=io();

//Join chat room
socket.emit('joinRoom',{firstname,email})

//get room and users
socket.on('roomUsers',({room,users})=>{
outputRoomName(room);
outputUsers(users);
addTodo(users)
})
//message from server
socket.on('message',(message)=>{
  console.log(message);
  outputMessage(message);
  outputRoomName(room);
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
userList.addEventListener("click", function () {
  dialogBox.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
});

//add users to DOM
function outputUsers(users){
  userList.innerHTML=`
  ${users.map(user=>`<h3 style="color:blue">
  Name:${user.firstname}&nbsp;
  EmailId:${user.email}&nbsp;
  SocketID:${user.id}</h3>`).join('')}
  `;
}
function addTodo(users) {
  todo__text.innerHTML=`
${users.map(user=>`
UsersID:  ${user.id} 
Firstname:${user.firstname}
Lastname: ${lastname}
Mobileno: ${mobileno}
EmailId:  ${user.email}
Street:   ${street}
City:     ${city}
Country:  ${country}
Loginid:  ${loginid}
`)}
`    
  } 
