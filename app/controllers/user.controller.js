const User = require('../models/user.model.js');
 
// Save FormData - User to MongoDB
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	
    // Create a Customer
    const user = new User({
        firstname: req.body.firstname,
		lastname: req.body.lastname,
        mobileno:req.body.mobileno,
        email:req.body.email,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        loginid:req.body.loginid,
        password:req.body.password,
        
    });
 
    // Save a Customer in the MongoDB
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

   
   
};
 
// Fetch all Users
exports.findAll = (req, res) =>  {
	console.log("Fetch all Users");
	
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};