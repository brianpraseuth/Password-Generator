JavaScript: Password Generator

In this project is a fully functioning password generator which will output a random string based on user input.

When user clicks "Generate Password" button then using will be prompted to choose from the following requirements:
- Choose between 8-128 characters for the password.
  (If chosen number is not between 8-128 user will be alerted to choose a valid option and returned to prompt.)
- Choose to include/exclude lowercase letters.
- Choose to include/exclude uppercase letters.
- Choose to includ/exclude numbers.
- Choose to include/exclude special characters.
  (If at least one option is not chosen then user will be alerted to choose at least one and be returned to starting prompt.)
  
If user chooses valid password requirements:
- Random characters created from an array pulled from user choices will make up length of password chosen.
 example: If user chose to have 8 characters with only uppercase and special characters the function will pull only the uppercase and special character arrays as options to randomoly rill in an 8 character string.



