// Assignment Code
var generateBtn = document.querySelector("#generate");
var charNumber = 0;
var specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
var numUse = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  {
    charNumber, specChar, numUse, upper, lower;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  let userNumber = prompt("Type the length of your new password:");
  // password length check
  if (userNumber < 8 || userNumber > 128) {
    window.alert("Password Needs to be between 8-128 characters in length!");
  } else if ((userNumber) => 8 || userNumber <= 128) {
    window.alert("great!");
    charNumber + userNumber;
    console.log(charNumber);
  } else {
    window.alert("Next choose what type of characters you want to use");
  }

  // let charSelect = function () {};

  //go again
  // var tryAgain = window.confirm("Try again?");

  // if (tryAgain) {
  //   writePassword();
  // }
}

// call the overall function here
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
