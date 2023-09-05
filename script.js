// Assignment Code
// Write password to the #password input
function writePassword() {
  //parameter check here
  var charSet = "";
  var specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
  var numUse = "0123456789";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNumber = 0;
  let userNumber = prompt(
    "Type the length of your new password(between 8-128 characters):"
  );

  // password length validation
  if (userNumber >= 8 && userNumber <= 128) {
    window.alert("Great!");
    charNumber += userNumber;
    console.log(charNumber);
  } else {
    return window.alert(
      "Password Needs to be between 8-128 characters in length! Try again!"
    );
  }

  // user choice of what character sets to use in password.
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

  // Validating that user has selected at least one password criteria
  if (charSet === "") {
    window.alert(
      "You must choose types of characters to use in your password!"
    );
    return;
  }

  function generatePassword() {
    var characterArray = charSet.split("");
    // splits charSet character string into an array of individual strings (one for each character)
    var randomPassword = "";
    // define rp outside of loop for scope reasons
    for (var i, i = 0; i < charNumber; i++) {
      var generatedIndex = Math.floor(Math.random() * characterArray.length);
      // random number assigned to variable maintain ability to update - also it looked prettier.
      var yourMomsRandomPass = characterArray[generatedIndex];
      // helps to visualize what is happening above
      console.group("poop");
      console.log("index", generatedIndex);
      console.log("value", yourMomsRandomPass);
      console.groupEnd();
      randomPassword = randomPassword.concat(yourMomsRandomPass);
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
