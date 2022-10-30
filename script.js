// Assignment Code

//Global variables

var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];

//After button is clicked
function generatePassword() {
  var length = prompt(
    "How long do you want your password to be? (must be between 8 and 128 characters)"
  );

  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters!");
    generatePassword();
  } else {
    var lower = confirm(
      "Do you want your password to contain lower case letters?"
    );

    var upper = confirm(
      "Would you like your password to include upper case letters?"
    );

    var special = confirm(
      "Do you want your password to include special characters"
    );

    var numbers = confirm("Do you want your password to include numbers?");

    //Combines arrays dependant on user selections above

    var possiblePassword = [];
    if (lower) {
      possiblePassword = possiblePassword.concat(lowerCaseArr);
    }

    if (upper) {
      possiblePassword = possiblePassword.concat(upperCaseArr);
    }

    if (special) {
      possiblePassword = possiblePassword.concat(specialArr);
    }

    if (numbers) {
      possiblePassword = possiblePassword.concat(numbersArr);
    }

    var finalPassword = [];

    //Generates random characters and combines into an array

    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * possiblePassword.length);
      finalPassword = finalPassword.concat(possiblePassword[random]);
    }
    finalPassword = finalPassword.join(""); //turns array into a string without the commas
  }

  return finalPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
