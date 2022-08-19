$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#userForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
			mobileno:   $("#mobileno").val(),
			email:    $("#email").val(),
			address: $("#address").val(),
			loginid:    $("#loginid").val(),
            password:     $("#password").val(),
					// password: req.body.password
			
    	}
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/users/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postResultDiv").html(`<p>Post Successfully! <br>--> ${user.firstname} ${user.lastname} ${user.mobileno} ${user.email} ${user.address} ${user.loginid} ${user.password}</p>`);
			console.log(user);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
		$("#mobileno").val("");
		$("#email").val("");
	    $("#address").val("");
		$("#loginid").val("");
        $("#password").val("");
    }
})
// + " "+user.mobileno+" "+user.Emailid+" "+user.Address+" "+user.Loginid+" "+user.password
