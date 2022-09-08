
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

	// app.get('/success',(req,res)=>{
	// 	res.sendFile(path +"chat.html")
	// })
    // Save a User to MongoDB
    app.post('/api/users/save', users.save)

    // Retrieve all Users
    app.get('/api/users/all', users.findAll);
	
	app.use("/",router);
	// app.use("/success",router);
	// app.use("/register",router);
	// app.post('/',(req,res,next)=>{
	// 	console.log(req.body);
	// 	res.redirect('/success');
	// })

}
