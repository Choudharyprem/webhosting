
module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const users = require('../controllers/user.controller.js');
	
	var path = __basedir + '/views/';
	// var path = __basedir + '/public/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});

	app.get('/login',(req,res)=>{
		res.sendFile(path +"login.html")
	})
	
	app.get('/socket',(req,res)=>{
		res.sendFile(path+"chat.html")
	})
    // Save a User to MongoDB
	app.get('/api/users/save',users.save)
    app.post('/api/users/save', users.save);
	
    // Retrieve all Users
    app.get('/api/users/all', users.findAll);
	
	app.use("/",router);
	// app.post("/login",async(req,res)=>{
    //         try{
    //           const email=req.body.email;
    //           const password=req.body.password;
			

	// 		 const username= await users.findOne({email:email});
	// 		 res.send
			
	// 		} catch(error){
    //          res.status(400).send("invalid data")
			 
	// 		}
	// })

}
