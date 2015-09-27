//falidate the input of the form
function validateForm() {

  //get the variables we need to work with from the first form on the page
  var name = document.forms[0].name.value;
  var gender = document.forms[0].gender.value;
  var address = document.forms[0].address.value;
  var email = document.forms[0].email.value;
  var phone = document.forms[0].phone.value;
  var emailFormat = /^\w+@\w+\.\w+$/;
  var phoneDashFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var phoneRegularFormat = /^[0-9]{10}$/;
  var passedPrev = false;
  var phoneDashFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var phoneRegularFormat = /^[0-9]{10}$/;
  var passedPrev = false;
 
  //alert(name + gender + address + email + phone);


  var errorMsg = "";
  if(name.length<1)
  {
    errorMsg += "Name is required.\n";
  }

  else{
    if(/[^a-zA-Z0-9]/.test(name)) {
      errorMsg += "Name must be alphanumeric.\n";
    }
  }

  if(gender == "default"){
   errorMsg += "Please select a gender.\n";
  }

  if(address.length < 1){
    errorMsg += "Please enter your address.\n";
  }

  if(!emailFormat.test(email)){
    errorMsg += "*Required: Please enter valid email. Eg. xxx@xxx.xxx\n";
  }

  if(phone.length > 1)
  {
    if(!phoneDashFormat.test(phone)){
    //passedPrev = true;
    if(!phoneRegularFormat.test(phone)){
      errorMsg += "*Required: Please enter valid Phone. Eg. xxx-xxx-xxxx or xxxxxxxx\n";
    }
  }
}

  if(errorMsg.length > 1){
    alert(errorMsg);
  }
  //clear form if everything passes
  //clearForm();

}

//validate the name field

//clears the form of its values
function clearForm(){
  document.forms[0].name.value = "";
  document.forms[0].gender.value = "default";
  document.forms[0].address.value = "";
  document.forms[0].email.value = "";
  document.forms[0].phone.value = "";
}