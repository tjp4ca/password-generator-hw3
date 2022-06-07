// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var randomUpperCase = Math.floor(Math.random() * uppercase.length-1) + 1;

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomLowerCase = Math.floor(Math.random() * lowercase.length-1) + 1;

var number = [0,1,2,3,4,5,6,7,8,9]
var randomNumber = Math.floor(Math.random() * number.length-1) + 1;

var symbol = ["!","@","#","$","%",",","."]
var randomSymbol = Math.floor(Math.random() * symbol.length-1) + 1;

// prompts
passwordLength = function() {
  var promptLength = window.prompt("Please choose your password length between 8 and 128 characters.");
  
  if (promptLength >= 8 && promptLength <= 128) {
    console.log("length confirmed");
  }
  // else if (promptLenth <= 7) {
  //   window.alert("Choose a number between 8 and 128.");
  // }
  else if (promptLength === "" || promptLength === null) {
    window.alert("Choose a number between 8 and 128.");
    return passwordLength();
  } 
}
    passwordLength();

// uppercase confirm
passwordUpper = function() {
  var confirmUpper = window.confirm("Would you like to include uppercase characters?");
    console.log("uppercase confirmed");
  
    if (confirmUpper === true) {
      console.log(uppercase[randomUpperCase]);
  }
  // else if () {

  // }
} 
    passwordUpper();

// lowercase confirm
passwordLower = function() {
  var confirmLower = window.confirm("Would you like to include lowercase characters?");
    console.log("lowercase confirmed");

    if (confirmLower === true) {
      console.log(lowercase[randomLowerCase])
    }
} 
    passwordLower();

// number confirm
passwordNumber = function() {
  var confirmNumber = window.confirm("Would you like to include numeric characters?");
    console.log("number confirmed");

    if (confirmNumber === true) {
      console.log(number[randomNumber])
    }
} 
    passwordNumber();

// symbol confirm
passwordSymbol = function() {
  var confirmSymbol = window.confirm("Would you like to include special characters?");
    console.log("symbol confirmed");

    if (confirmSymbol === true) {
      console.log(symbol[randomSymbol])
    }
} 
    passwordSymbol();



for (var i = 8; i < 128; i++) {
  console.log("8-128 loop");
}

var generatePassword = function() {
  console.log("generate password button works");

  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

