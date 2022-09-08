$( document ).ready(function() {
	$('#usercheck').hide();
	$('#lastcheck').hide();
    $('#mobilecheck').hide();
    $('#emailcheck').hide();
    $('#streetcheck').hide();
    $('#citycheck').hide();
    $('#statecheck').hide();
    $('#countrycheck').hide();
	$('#loginidcheck').hide();
	$('#passwordcheck').hide();

	var user_err=true;
	var last_err=true;
	var mobile_err=true;
    var email_err=true;
    var street_err=true;
    var city_err=true;
    var state_err=true;
    var country_err=true;
	var loginid_err=true;
	var password_err=true;

	$('#firstname').keyup(function(){
		username_check();
	})
	$('#lastname').keyup(function(){
		userlastname_check();
	})
	$('#mobileno').keyup(function(){
		usermobile_check();
	})
	$('#email').keyup(function(){
		useremail_check();
	})
	$('#street').keyup(function(){
		userstreet_check();
	})
	$('#city').keyup(function(){
		usercity_check();
	})
	$('#state').keyup(function(){
		userstate_check();
	})
	$('#country').keyup(function(){
		usercountry_check();
	})
	$('#loginid').keyup(function(){
		userloginid_check();
	})
	$('#password').keyup(function(){
		userpassword_check();
	})
	function username_check(){
		var user_val=$('#firstname').val();
		if(user_val.length==''){
			$('#usercheck').show();
			$('#usercheck').html("**Please fill the first name");
			$('#usercheck').focus();
			$('#usercheck').css("color","red");
			user_err=false;
			return false;
		}else{
			$('#usercheck').hide();
		}
		if((user_val.length <3) || (user_val.length >10)){
			$('#usercheck').show();
			$('#usercheck').html("**firstname length must be between 3 and 10");
			$('#usercheck').focus();
			$('#usercheck').css("color","red");
			user_err=false;
			return false;
		}else{
			$('#usercheck').hide();
		}
	}
	function userlastname_check() {
		var user_val=$('#lastname').val();
		if(user_val.length=='') {
			$('#lastcheck').show();
			$('#lastcheck').html("**Please fill the last name");
			$('#lastcheck').focus();
			$('#lastcheck').css("color","red");
			last_err=false;
			return false;
		}else{
			$('#lastcheck').hide();
		}
		if((user_val.length <3) || (user_val.length >10)){
			$('#lastcheck').show();
			$('#lastcheck').html("**lastname length must be between 3 and 10");
			$('#lastcheck').focus();
			$('#lastcheck').css("color","red");
			last_err=false;
			return false;
		}else{
			$('#lastcheck').hide();
		}
		
	}
	function usermobile_check(){
		var mobile_val=$('#mobileno').val();
		if(mobile_val.length==''){
			$('#mobilecheck').show();
			$('#mobilecheck').html("**Please fill the mobile number");
			$('#mobilecheck').focus();
			$('#mobilecheck').css("color","red");
			mobile_err=false;
			return false;
		}else{
			$('#mobilecheck').hide();
		}
		if((mobile_val.length <10)||(mobile_val.length >10)){
			$('#mobilecheck').show();
			$('#mobilecheck').html("**mobile number must be 10 digit");
			$('#mobilecheck').focus();
			$('#mobilecheck').css("color","red");
			mobile_err=false;
			return false;
		}else{
			$('#mobilecheck').hide();
		}
	
	}
	function useremail_check(){
		var user_val=$('#email').val();
		if(user_val.length==''){
			$('#emailcheck').show();
			$('#emailcheck').html("**Please fill the email addres");
			$('#emailcheck').focus();
			$('#emailcheck').css("color","red");
			email_err=false;
			return false;
		}else{
			$('#emailcheck').hide();
		}
		if((user_val.length <10)||user_val.length >30){
			$('#emailcheck').show();
			$('#emailcheck').html("**email shoud be correct");
			$('#emailcheck').focus();
			$('#emailcheck').css("color","red");
			email_err=false;
			return false;
		}else{
			$('#emailcheck').hide();
		}
		
	}
	function userstreet_check(){
		var street_val=$('#street').val();
		if(street_val.length==''){
			$('#streetcheck').show();
			$('#streetcheck').html("**Please fill the street name");
			$('#streetcheck').focus();
			$('#streetcheck').css("color","red");
			street_err=false;
			return false;
		}else{
			$('#streetcheck').hide();
		}
		if((street_val.length <3)|| (street_val.length >10)){
			$('#streetcheck').show();
			$('#streetcheck').html("**street name must be 3 to 10 digit");
			$('#streetcheck').focus();
			$('#streetcheck').css("color","red");
			street_err=false;
			return false;
		}else{
			$('#streetcheck').hide();
		}
	}
	function usercity_check(){
		var city_val=$('#city').val();
		if(city_val.length==''){
			$('#citycheck').show();
			$('#citycheck').html("**Please fill the city name");
			$('#citycheck').focus();
			$('#citycheck').css("color","red");
			city_err=false;
			return false;
		}else{
			$('#citycheck').hide();
		}
		if((city_val.length <3)|| (city_val.length >10)){
			$('#citycheck').show();
			$('#citycheck').html("**city name must be 3 to 10 digit");
			$('#citycheck').focus();
			$('#citycheck').css("color","red");
			city_err=false;
			return false;
		}else{
			$('#citycheck').hide();
		}
	}
	function userstate_check(){
		var state_val=$('#state').val();
		if(state_val.length==''){
			$('#statecheck').show();
			$('#statecheck').html("**Please fill the state name");
			$('#statecheck').focus();
			$('#statecheck').css("color","red");
			state_err=false;
			return false;
		}else{
			$('#statecheck').hide();
		}
		if((state_val.length <3)|| (state_val.length >10)){
			$('#statecheck').show();
			$('#statecheck').html("**state name must be 3 to 10 digit");
			$('#statecheck').focus();
			$('#statecheck').css("color","red");
			state_err=false;
			return false;
		}else{
			$('#statecheck').hide();
		}
	}
	function usercountry_check(){
		var country_val=$('#country').val();
		if(country_val.length==''){
			$('#countrycheck').show();
			$('#countrycheck').html("**Please fill the country name");
			$('#countrycheck').focus();
			$('#countrycheck').css("color","red");
			country_err=false;
			return false;
		}else{
			$('#countrycheck').hide();
		}
		if((country_val.length <3)|| (country_val.length >10)){
			$('#countrycheck').show();
			$('#countrycheck').html("**country name must be 3 to 10 digit");
			$('#countrycheck').focus();
			$('#countrycheck').css("color","red");
			country_err=false;
			return false;
		}else{
			$('#countrycheck').hide();
		}
	}
	function userloginid_check(){
		var loginid_val=$('#loginid').val();
		if(loginid_val.length==''){
			$('#loginidcheck').show();
			$('#loginidcheck').html("**Please fill the loginid name");
			$('#loginidcheck').focus();
			$('#loginidcheck').css("color","red");
			loginid_err=false;
			return false;
		}else{
			$('#loginidcheck').hide();
		}
		if((loginid_val.length <3) || (loginid_val.length >20)){
			$('#loginidcheck').show();
			$('#loginidcheck').html("**loginid length must be between 3 and 20");
			$('#loginidcheck').focus();
			$('#loginidcheck').css("color","red");
			loginid_err=false;
			return false;
		}else{
			$('#loginidcheck').hide();
		}
	}
	function userpassword_check(){
		var password_val=$('#password').val();
		if(password_val.length==''){
			$('#passwordcheck').show();
			$('#passwordcheck').html("**Please fill the password ");
			$('#passwordcheck').focus();
			$('#passwordcheck').css("color","red");
			password_err=false;
			return false;
		}else{
			$('#passwordcheck').hide();
		}
		if((password_val.length <3) || (password_val.length >20)){
			$('#passwordcheck').show();
			$('#passwordcheck').html("**password length must be between 3 and 20");
			$('#passwordcheck').focus();
			$('#passwordcheck').css("color","red");
			password_err=false;
			return false;
		}else{
			$('#passwordcheck').hide();
		}
	
	}
	// SUBMIT FORM
    $("#userForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
		user_err=true;
	 last_err=true;
	 mobile_err=true;
     email_err=true;
     street_err=true;
     city_err=true;
     state_err=true;
     country_err=true;
	 loginid_err=true;
	 password_err=true;
	 
		username_check();
		userlastname_check();
		usermobile_check();
		useremail_check();
		userstreet_check();
		usercity_check();
		userstate_check();
		usercountry_check();
		userloginid_check();
		userpassword_check();

		if((user_err==true) &&(last_err==true)&&(mobile_err==true)&&(email_err==true)&&(street_err==true)&&(city_err==true)&&(state_err==true)&&(country_err==true)&&(loginid_err==true)&&(password_err==true)){
			return true;
		}else{
			return false;
		}
	
		
	});
	
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
			mobileno:   $("#mobileno").val(),
			email:    $("#email").val(),
		    street: $("#street").val(),
             city: $("#city").val(),
			 state:$("#state").val(),
			 country: $("#country").val(),
			loginid:    $("#loginid").val(),
            password:     $("#password").val()
					// password: req.body.password
				}
				var targetForm = $('#userForm');
				var urlWithParams = targetForm.attr('action') + "?" + targetForm.serialize();
				// console.log(urlWithParams);
				// alert(urlWithParams);
					$(location).attr('href', urlWithParams);
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/users/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postResultDiv").html(`<p>Post Successfully! <br>-->${user.firstname} ${user.lastname} ${user.mobileno} ${user.email} ${user.street} ${user.city} ${user.state} ${user.country} ${user.loginid} ${user.password}</p>`);
				console.log(user)
			// location.window.href = "http://localhost:8081/success";
			//  var url = "http://localhost:8081;
			// 	$(location).attr('href',url);
			
				
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
	    $("#street").val("");
		$("#city").val("");
		$("#state").val("");
		$("#country").val("");
		$("#loginid").val("");
        $("#password").val("");
    }
	
})
// + " "+user.mobileno+" "+user.Emailid+" "+user.Address+" "+user.Loginid+" "+user.password
