// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // console.log(upperString);
var lowerString = "abcdefghijklmnopqrstuvwxyz"
  // console.log(lowerString);
var numberString = "0123456789"
  // console.log(numberString);
var symbolString = "!@#$%^&*()-+,.?"
  // console.log(symbolString);

// string to array
var upperArray = upperString.split("")
  console.log(upperArray);
var lowerArray = lowerString.split("")
  console.log(lowerArray);
var numberArray = numberString.split("")
  console.log(numberArray);
var symbolArray = symbolString.split("")
  console.log(symbolArray);

var blankArray = []
  console.log(blankArray);

var newPassword = ""



generatePassword = function() {
  // prompt
  passwordLength = function() {
    var randomLength = window.prompt("Please choose your password length between 8 and 128 characters.");
    
    if (randomLength >= 8 && randomLength <= 128) {
      console.log(randomLength + " characters");
      return randomLength;
    }
    else{
      window.alert("Choose a number between 8 and 128.");
      return passwordLength();
    }
  }
  
  var randomLength = passwordLength();

  // confirms
  var confirmUpper = window.confirm("Would you like to include uppercase characters?");
  if (confirmUpper === true) {
    blankArray = blankArray.concat(upperArray)
    console.log(blankArray);
  }

  var confirmLower = window.confirm("Would you like to include lowercase characters?");
  if (confirmLower === true) {
    blankArray = blankArray.concat(lowerArray)
    console.log(blankArray);
  }

  var confirmNumber = window.confirm("Would you like to include numeric characters?");
  if (confirmNumber === true) {
    blankArray = blankArray.concat(numberArray)
    console.log(blankArray);
  }

  var confirmSymbol = window.confirm("Would you like to include special characters?");
  if (confirmSymbol === true) {
    blankArray = blankArray.concat(symbolArray)
    console.log(blankArray);
  }

  console.log(randomLength)

  for (var i = 0; i < randomLength; i++) {
    // console.log(randomLength);
    var randomCharacter = Math.floor(Math.random() * blankArray.length-1) + 1;
    console.log(blankArray[randomCharacter]);
    newPassword = newPassword + blankArray[randomCharacter];
    console.log(newPassword);
  }
  return newPassword;
}

// join
// Push 
// concat

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
