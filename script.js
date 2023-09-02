// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet = "";
var charNumber = 0;
var specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
var numUse = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input 
function writePassword() {
  //parameter check here
  let userNumber = prompt("Type the length of your new password:");
  // password length check
  if (userNumber < 8 || userNumber > 128) {
    window.alert("Password Needs to be between 8-128 characters in length!");
  } else if ((userNumber) => 8 || userNumber <= 128) {
    window.alert("great!");
    charNumber += userNumber;
    console.log(charNumber);
  } else {
    window.alert("Next choose what type of characters you want to use");
  }

  // let charSelect = function () {};

  if (confirm("Do you want to use special characters?")) {
    charSet = charSet + specChar;
    console.log(charSet);
  }

  console.log(charSet, userNumber);

  if (confirm("Do you want to use numbers in your password?")) {
    charSet = charSet + numUse;
    console.log(charSet);
  }

  if (confirm("Do you want to use lowercase letters in your password?")) {
    charSet = charSet + lowerLetters;
    console.log(charSet);
  }

  if (confirm("Do you want to use uppercase letters in your password?")) {
    charSet = charSet + upperLetters;
    console.log(charSet);
  }

  console.log(charSet);
  //go again
  // var tryAgain = window.confirm("Try again?");

  // if (tryAgain) {
  //   writePassword();
  // }

  var password = function generatePassword() {
    for (var i = 0; i < charNumber; i++) {
      charSet[Math.floor(Math.random() * charSet.length)];
    }
    console.log(charSet);
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// call the overall function here
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
