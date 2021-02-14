// Assignment Code
var generateBtn = document.querySelector("#generate");

var userselection = []

var lowercase_chart = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Uppercase_chart = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Number_chart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var Symbel_chart = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "<", ">", "?" ]

// // click run 
// generateBtn.onclick = function() {
 
// Write password to the #password input
var writePassword = function(){
  
  let passwordrange = window.prompt('Please select the range of your password (1 ~ 128)');
  if (1 < passwordrange && passwordrange < 128) {
    pwlenth = passwordrange
    console.log('password lenth confirmed')
  } else {
    window.alert ('invaild input please re-enter your range');
  }

  // lowercase
  let includelowercase = window.confirm('Would you like to have lowercase in your password ?');
  if (includelowercase) {
    userselection.push(lowercase_chart)
    console.log('lowercase added')
  } 

  // Uppercase
  let includeuppercase = window.confirm('Would you like to have uppercase in your password ?');
  if (includeuppercase) {
    userselection.push(Uppercase_chart)
    console.log('Uppercase added')
  } 


  // Number
  let includeNumber = window.confirm ('Would you like to have number in your password ?');

  if (includeNumber) {
    userselection.push(Number_chart)
    console.log('Number added')
  } 

  // Symbel
  let includeSymbel = window.confirm ('Would you like to have symbel in your password ?');

  if (includeSymbel) {
    userselection.push(Symbel_chart)
    console.log('Symbel added')
  } 

  console.log(userselection)

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

