// Assignment Code
// passCriteria = {
//   specChar: "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\",
//   numUse: "0123456789",
//   lowerLetters: "abcdefghijklmnopqrstuvwxyz",
//   upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// };

// Write password to the #password input
function writePassword() {
  //parameter check here
  var charSet = "";
  var specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
  var numUse = "0123456789";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNumber = 0;
  let userNumber = prompt("Type the length of your new password:");
  // password length check
  if (userNumber >= 8 || userNumber <= 128) {
    window.alert("great!");
    charNumber += userNumber;
    console.log(charNumber);
  } else {
    window.alert("Password Needs to be between 8-128 characters in length!");
    return;
  }

  if (confirm("Do you want to use special characters?")) {
    charSet = charSet.concat(specChar);
    console.log(charSet);
  }

  if (confirm("Do you want to use numbers in your password?")) {
    charSet = charSet.concat(numUse);
    console.log(charSet);
  }

  if (confirm("Do you want to use lowercase letters in your password?")) {
    charSet = charSet.concat(lowerLetters);
    console.log(charSet);
  }

  if (confirm("Do you want to use uppercase letters in your password?")) {
    charSet = charSet.concat(upperLetters);
    console.log(charSet);
  }

  console.log(charSet.length);

  // call the overall function here\

  function generatePassword() {
    var characterArray = charSet.split("");
    // splits charSet character string into an array of individual strings (one for each character)
    var randomPassword = "";
    // define rp outside of loop for scope reasons
    for (var i, i = 0; i < charNumber; i++) {
      let generatedIndex = Math.floor(Math.random() * characterArray.length);
      // random number assigned to variable maintain ability to update - also it looked prettier.
      let yourMom = characterArray[generatedIndex];
      // helps to visualize what is happening above
      console.group("poop");
      console.log("index", generatedIndex);
      console.log("value", yourMom);
      console.groupEnd();
      randomPassword = randomPassword.concat(yourMom);
    }

    console.log(randomPassword);

    var passwordText = document.querySelector("#password");

    passwordText.innerHTML = randomPassword;
  }
  generatePassword();
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = writePassword;
// generateBtn.addEventListener("click", writePassword());
