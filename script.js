// Assignment Code
var generateBtn = document.querySelector("#generate");

 
// Write password to the #password input
function writePassword() {

  // User selection created
  var userselection = []

  // Data base Chart
  var lowercase_chart = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var Uppercase_chart = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var Number_chart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var Symbel_chart = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "?", "=", "/", "|", "<", ">" ]

  
  // User selections
    // Range
    var passwordrange = parseInt(window.prompt('Please select the range of your password (8 ~ 128)'));
    if (8 <= passwordrange && passwordrange <= 128) {
      console.log('password lenth confirmed');
    } else {
      window.alert ('invalid data, please resubmit.');
      return;
    }
    
    // lowercase
    var includelowercase = window.confirm('Would you like to have lowercase in your password ?');
    if (includelowercase) {
      userselection.push(...lowercase_chart);
      console.log(userselection);
      console.log('lowercase added');    
    } 

    // Uppercase
    var includeuppercase = window.confirm('Would you like to have uppercase in your password ?');
    if (includeuppercase) {
      userselection.push(...Uppercase_chart);
      console.log(userselection);
      console.log('Uppercase added');
    } 

    // Number
    var includeNumber = window.confirm ('Would you like to have number in your password ?');
    if (includeNumber) {
      userselection.push(...Number_chart);
      console.log(userselection);
      console.log('Number added');
    } 

    // Symbel
    var includeSymbel = window.confirm ('Would you like to have symbel in your password ?');
    if (includeSymbel) {
      userselection.push(...Symbel_chart);
      console.log(userselection);
      // line 56 console.log should have all the requests that the user selected. 
      console.log('Symbel added');
    } 
    
    //Generate Password
    var password = [] ;
    for (var i = 0; i < passwordrange; i++ ){
      // base on the userselection, run math.random 
      password.push( userselection[Math.floor(Math.random() * userselection.length)]);
    }

    // Remove the comma 
    console.log(password.join(''))

    //Display
    var passwordText = document.querySelector("#password");
    passwordText.value = password.join('');
    window.alert('Here is your Password ' + "\n" + password.join(''));
  
return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
