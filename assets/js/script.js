// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d"]
// console.log(numbers[0]);
var randomLowerCase = Math.floor(Math.random() * lowercase.length) + 1;
console.log(randomLowerCase)





// random number between 0-10
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);

// var randomNumber = Math.floor(Math.random() * randomNumber.length) + 1;
// console.log(random);


// prompts
passwordLength = function() {
  var promptLength = window.prompt("Please choose your password length between 8 and 128 characters.");
  
  if (promptLenght === "" || promptLength === null) {
    window.alert("Choose a number between 8 and 128.");
    console.log("before return");
    return passwordLength();
    console.log("after return");
  }
}

passwordUpper = function() {
  var promptUpper = window.prompt("Would you like to include uppercase characters?");

  if (promptUpper === "" || promptUpper === null) {
    window.alert("Choose yes or no");
    return passwordUpper();
  }
}

passwordLower = function() {
  var promptLower = window.prompt("Would you like to include lowercase characters?");

  if (promptLower === "" || promptLower === null) {
    window.alert("Choose yes or no");
    return passwordLower();
  }
}

passwordNumber = function() {
  var promptNumber = window.prompt("Would you like to include numeric characters?");

  if (promptNumber === "" || promptNumber === null) {
    window.alert("Choose yes or no");
    return passwordNumber();
  }
}

passwordSymbol = function() {
  var promptSymbol = window.prompt("Would you like to include special characters?");

  if (promptSymbol === "" || promptSymbol === null) {
    window.alert("Choose yes or no");
    return passwordSymbol();
  }
}



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
