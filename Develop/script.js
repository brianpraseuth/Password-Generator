// Assignment Code
// Arrays of characters for password
var generateBtn = document.querySelector("#generate");

var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
var numbersArray = '0123456789';
var specialArray = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 0


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Functions for outputting new password with selected criteria





// Prompt asking the user various requirements for password
alert("Welcome! Please choose criteria for the password.")


// Ask user for password length between 8-128 character. Alert when invalid input is recieved and tell them to start over. 
var passwordLength = prompt("How many characters should the password have? (8-128)")
  if (askLength <= 128 || askLength >= 8) 
    passwordLength =  {
  }

  else alert("That is not a number between 8-128! Please choose again!");


// Ask user if they want lowercase, uppercase, numbers and/or special letters in the password.
var askLowercase = confirm("Would you like lowercase characters?")

var askUppercase = confirm("Would you like uppercase characters?")

var askNumbers = confirm("Would you like numbers?")

var askSpecial = ("Would you like special characters?")

// Make sure at least one character type is selected.

// Password is then generated using the answers. 

// The Generated password is then shown on the webpage. 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
