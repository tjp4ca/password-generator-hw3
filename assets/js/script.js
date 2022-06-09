// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
console.log(uppercase);
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
console.log(lowercase);
var number = [0,1,2,3,4,5,6,7,8,9]
console.log(number);
var symbol = ["!","@","#","$","%",",","."]
console.log(symbol);

// var randomUpperCase = Math.floor(Math.random() * uppercase.length-1) + 1;
// var randomLowerCase = Math.floor(Math.random() * lowercase.length-1) + 1;
// var randomNumber = Math.floor(Math.random() * number.length-1) + 1;
// var randomSymbol = Math.floor(Math.random() * symbol.length-1) + 1;

// prompts
passwordLength = function() {
  var promptLength = window.prompt("Please choose your password length between 8 and 128 characters.");
  
  if (promptLength >= 8 && promptLength <= 128) {
    console.log(promptLength + " characters");
    return promptLength;
  }
  else{
    window.alert("Choose a number between 8 and 128.");
    return passwordLength();
  }
  // else if (promptLength === "" || promptLength === null) {
  //   window.alert("Choose a number between 8 and 128.");
  //   return passwordLength();
  // } 
}
    // uppercase confirm
passwordUpper = function() {
  var confirmUpper = window.confirm("Would you like to include uppercase characters?");
    
    if (confirmUpper === true) {
      console.log("yes uppercase");
      // console.log(uppercase[randomUpperCase]);
      return confirmUpper;
  }
  else {
    console.log("no uppercase");
    return confirmUpper;
  }
  // else if () {

  // }
} 
    
// lowercase confirm
passwordLower = function() {
  var confirmLower = window.confirm("Would you like to include lowercase characters?");
    
    if (confirmLower === true) {
      console.log("yes lowercase");
      // console.log(lowercase[randomLowerCase])
      return confirmLower;
    }
    else {
      console.log("no lowercase");
      return confirmLower;
    }
} 
    
// number confirm
passwordNumber = function() {
  var confirmNumber = window.confirm("Would you like to include numeric characters?");
    

    if (confirmNumber === true) {
      console.log("yes number");
      // console.log(number[randomNumber])
      return confirmNumber;
    }
    else {
      console.log("no number");
      return confirmNumber;
    }
} 
    
// symbol confirm
passwordSymbol = function() {
  var confirmSymbol = window.confirm("Would you like to include special characters?");
    
    if (confirmSymbol === true) {
      console.log("yes symbol");
      // console.log(symbol[randomSymbol])
      return confirmSymbol;
    }
    else {
      console.log("no symbol");
      return confirmSymbol;
    }
} 
    
var generatePassword = function() {
  console.log("generate password button works");

  passwordUpper();
  passwordLower();
  passwordNumber();
  passwordSymbol();

  for (var i = 0; i < passLength; i++) {
    console.log("8-128 loop");
  }

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

