$( document ).ready(function() {
	
	// GET REQUEST
	$("#allUsers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/users/all",
			success: function(result){
				$('#getResultDiv url').empty();
				$.each(result, function(i, user){
					// $('#getResultDiv .list-group').append(user.firstname + " " + user.lastname + " "+user.mobileno+" "+user.Emailid+" "+user.Address+" "+user.Loginid+" "+user.password+"<br>")
					$('#getResultDiv .list-group').append(user.username+" "+user.room+" "+user.firstname+" "+user.lastname+ " "+user.mobileno+" "+user.email+" "+user.street+" "+user.city+" "+user.state+" "+user.country+" "+user.loginid+" "+user.password+" "+"<br>")
				});
				console.log("Success: ", result);
				
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})