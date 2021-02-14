// Assignment Code
var generateBtn = document.querySelector("#generate");

// click run 
  generateBtn.onclick = function() {

    let passwordrange = window.prompt('Please select the range of your password (1 ~ 128)');
      if (1 < passwordrange && passwordrange < 128) {
        document.passwordrange
      } else {
        window.alert ('invaild input please re-enter your range');
        return ;
      }


    let includelowercase = window.prompt('Would you like to have lowercase in your password (Y/N) ?');
      includelowercase = includelowercase.toLocaleUpperCase();

      if (includelowercase = 'Y') {
        lpass = document.passwordtype
      } else if ( includelowercase = 'N') {
        no_lpass = document.passwordtype
      } else {
        window.alert ('invaild input please re-enter your require');
        return ;
      }
    
    let includeuppercase = window.prompt('Would you like to have uppercase in your password (Y/N) ?');
      includeuppercase = includeuppercase.toLocaleUpperCase();

      if (includeuppercase = 'Y') {
        upass = document.includeuppercase
      } else if ( includeuppercase = 'N') {
        no_upass = document.includeuppercase
      } else {
        window.alert ('invaild input please re-enter your require');
        return ;
      }

    let includeNumber = window.prompt('Would you like to have number in your password (Y/N) ?');
      includeNumber = includeNumber.toLocaleUpperCase();

      if (includeNumber = 'Y') {
        npass = document.includeNumber
      } else if ( includeNumber = 'N') {
        no_npass = document.includeNumber
      } else {
        window.alert ('invaild input please re-enter your require');
        return ;
      }

    let includeSymbel = window.prompt('Would you like to have symbel in your password (Y/N) ?');
      includeSymbel = includeSymbel.toLocaleUpperCase();

      if (includeSymbel = 'Y') {
        npass = document.includeSymbel
      } else if ( includeSymbel = 'N') {
        no_npass = document.includeSymbel
      } else {
        window.alert ('invaild input please re-enter your require');
        return ;
      }


  } 

    



// Write password to the #password input
var writePassword = function(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
