function velidation(){
    let username =document.getElementById("username").value;
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    let number =document.getElementById("number").value;

    let userCheck = /^[A-Za-z]+[0-9]*$/;
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[A-Za-z]\w{2,12}$/;
    // let passwordCheck = /^[A-Za-z]+[0-9]*$/;
    let numberCheck = /^[0-9]{3}$/;
     
    if(userCheck.test(username)){
        document.getElementById("usererror").innerHTML = ""
    }
    else{

        document.getElementById("usererror").innerHTML = "***invalid username"
        return false;
}
    if(emailCheck.test(email)){
        document.getElementById("emailerror").innerHTML = ""
    }
    else{
        
        document.getElementById("emailerror").innerHTML = "***invalid email"
        return false;
}

    if(passwordCheck.test(password)){
        document.getElementById("passworderror").innerHTML = ""
    }
    else{
        document.getElementById("passworderror").innerHTML = "***invalid password"
        return false;
    }

    if(numberCheck.test(number)){
        document.getElementById("numbererror").innerHTML = ""
    }
    else{
        document.getElementById("numbererror").innerHTML = "***invalid number"
        return false;
}


if (userCheck.test(username) && emailCheck.test(email) && passwordCheck.test(password) && numberCheck.test(number)){
    swal("Form Submit Successful", "Waiting for the email", "success")
    return false;
}
}






