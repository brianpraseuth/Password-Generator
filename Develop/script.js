

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ['!@#$%^&*()_+~`|}{[]\:;?><,./-='];
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 0






// Prompt asking the user various requirements for password
alert("Welcome! Please choose criteria for the password.")


// Ask user for password length between 8-128 character. Alert when invalid input is recieved and tell them to start over. 
function userInput() {
  var length = parseInt(prompt("How many characters would you like?"));
  if (length < 8 || length > 129) {
    alert("Your password has to be between 8-128 characters!");
    return;
  }
  var askLowercase = confirm("Would you like lowercase letters?");
  var askUppercase = confirm("Would you like uppercase letters?");
  var askNumbers = confirm("Would you like numbers?");
  var askSpecial = confirm("Would you like special characters?");
  if (askLowercase === false && askUppercase === false && askNumbers === false && askSpecial === false) {
    alert("You must choose at least one requirement for your password!");
    return;
  }
  var userAnswers = {
    length: length,
    lowercase: askLowercase,
    uppercase: askUppercase,
    numbers: askNumbers,
    special: askSpecial

  };
  return userAnswers;
}

// Ask user if they want lowercase, uppercase, numbers and/or special letters in the password.


// Make sure at least one character type is selected.

// Password is then generated using the answers. 
function generatePassword() {
  var passwordCriteria = userInput();
  var passwordArray = [];
  var password = [];
  if (passwordCriteria.lowercase === true) {
    passwordArray = passwordArray.concat(lowercaseArray);
  }
  if (passwordCriteria.uppercase === true) {
    passwordArray = passwordArray.concat(uppercaseArray);
  }
  if (passwordCriteria.numbers === true) {
    passwordArray = passwordArray.concat(numbersArray);
  }
  if (passwordCriteria.special === true) {
    passwordArray = passwordArray.concat(specialArray);
  }
  for (var i = 0; i < passwordCriteria.length; i++) {
    password.push(passwordArray[Math.floor(Math.random() * passwordArray.length)])
  }
  return password.join("");
}
// The Generated password is then shown on the webpage. 
// Assignment Code
// Arrays of characters for password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
