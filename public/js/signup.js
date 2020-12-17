function validation() {
    var email = document.getElementById("email").value;
    var pwdid = document.getElementById("pwdid").value;
    
	var password = document.getElementById("exampleInputPassword1").value;

    var regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,17}$/;
    

    
    if (regemail.test(email)) {
        document.getElementById('emailerr').innerHTML = "";
        
    } else {
        document.getElementById('emailerr').innerHTML = "** email is invalid";
        return false;
	}
	
	


  

 
    if (regpwd.test(password)) {
        document.getElementById('exampleInputPassword1err').innerHTML = "";

    } else {
        document.getElementById('exampleInputPassword1err').innerHTML = "** password should contain,uppercase,lowercase,<br>  special character,number and minimum 8 characters";
        return false;
    }
    if (regpwd.test(pwdid)) {
        document.getElementById('pwdiderr').innerHTML = "";
    
    } else {
        document.getElementById('pwdiderr').innerHTML = "** pasword is invalid";
        return false;
    }


    if (password.match(pwdid)) {
        document.getElementById('pwdiderr').innerHTML = "";
        
    } else {
        document.getElementById('pwdiderr').innerHTML = "** password is not a match";
        return false;
    }
}
