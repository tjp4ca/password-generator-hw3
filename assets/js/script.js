// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var randomUpperCase = Math.floor(Math.random() * uppercase.length-1) + 1;
console.log(uppercase[randomUpperCase])

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomLowerCase = Math.floor(Math.random() * lowercase.length-1) + 1;
// console.log(randomLowerCase);
console.log(lowercase[randomLowerCase])

var number = [0,1,2,3,4,5,6,7,8,9]
var randomNumber = Math.floor(Math.random() * number.length-1) + 1;
console.log(number[randomNumber])

var symbol = ["!","@","#","$","%",",","."]
var randomSymbol = Math.floor(Math.random() * symbol.length-1) + 1;
console.log(symbol[randomSymbol])

// prompts
passwordLength = function() {
  var promptLength = window.prompt("Please choose your password length between 8 and 128 characters.");
  
  if (promptLength === "" || promptLength === null) {
    window.alert("Choose a number between 8 and 128.");
    console.log("before return");
    return passwordLength();
  }
}
passwordLength();

passwordUpper = function() {
  var promptUpper = window.prompt("Would you like to include uppercase characters?");

  if (promptUpper === "" || promptUpper === null) {
    window.alert("Choose yes or no");
    return passwordUpper();
  }
}
passwordUpper();

passwordLower = function() {
  var promptLower = window.prompt("Would you like to include lowercase characters?");

  if (promptLower === "" || promptLower === null) {
    window.alert("Choose yes or no");
    return passwordLower();
  }
}
passwordLower();

passwordNumber = function() {
  var promptNumber = window.prompt("Would you like to include numeric characters?");

  if (promptNumber === "" || promptNumber === null) {
    window.alert("Choose yes or no");
    return passwordNumber();
  }
}
passwordNumber()

passwordSymbol = function() {
  var promptSymbol = window.prompt("Would you like to include special characters?");

  if (promptSymbol === "" || promptSymbol === null) {
    window.alert("Choose yes or no");
    return passwordSymbol();
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

