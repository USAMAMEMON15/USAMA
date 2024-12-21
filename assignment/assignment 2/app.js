
// init Isotope
var $grid = $('.container').isotope({
    // options
  });
  // filter items on button click
  $('#nav').on( 'click', 'ul li', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(document).on("click" ,"ul li",function(){
    $(this).addClass("active").siblings().removeClass("active")
  })

  function velidation(){
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;

    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[A-Za-z]\w{5,12}$/;
     
   
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
        document.getElementById("passworderror").innerHTML = "***At leat min 5 characters"
        return false;
    }

   
if (emailCheck.test(email) && passwordCheck.test(password)){
    swal("Form Submit Successful", "Waiting for the email", "success")
    return false;
}
}