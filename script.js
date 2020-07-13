
var welcome = alert("Welcome to the password generator");
var passwordLenght = prompt("How many characters would you like for your password? Choose between 8 and 30 ?");
var includeNumbers = confirm("Would like your password to contain numbers ?"); 
var lowerCharacters = confirm("Do you want your password to contain lower cases ?");
var upperCharacters = confirm("Do you want your password to contain upper characters ?");
var Charaters = confirm("Do you want your password to contain special characters ?");

var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
