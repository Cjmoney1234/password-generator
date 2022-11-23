// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert("Please click Generate Password and input desired charecter length to generate automated password!")


function generatePassword() {
  passwordLength = (prompt("How many characters would you like your password to contain?"));
  console.log("Password Length "+ passwordLength)

if(!passwordLength) {
  alert("Please select correct perameters");
} else if (passwordLength < 8 || passwordLength > 51) {
  passwordLength = prompt("You must choose characters between 8-50");
  console.log("Password Length " + passwordLength);
} else {
  confirmLower = confirm("Do you want your password to contain any lower case letters? IF not click cancel!");
  console.log("Lower case  " + confirmLower);
  confirmUpper = confirm("Do you want your password to contain any upper case letters? IF not click cancel!");
  console.log("Upper case " + confirmUpper);
  confirmNumber = confirm("Do you want your password to contain any numbers? IF not click cancel!");
  console.log("Number " + confirmNumber);
  confirmSpecial = confirm("Do you want your password to contain any special characters? IF not click cancel!");
  console.log("Special Character " + confirmSpecial);
}

if(!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose a criteria");
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = alphaLower.concat(alphaUpper, number, specialChar);
  console.log(userChoices);
} 
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = alphaLower.concat(alphaUpper, number);
  console.log(userChoices);
} else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = alphaLower.concat(alphaUpper, specialChar);
  console.log(userChoices);
} else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = alphaLower.concat(number, specialChar);
  console.log(userChoices);
} else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = alphaUpper.concat(number, specialChar);
  console.log(userChoices);
} 
else if (confirmLower && confirmUpper) {
  userChoices = alphaLower.concat(alphaUpper);
  console.log(userChoices);
} else if (confirmLower && confirmNumber) {
  userChoices = alphaLower.concat(number);
  console.log(userChoices);
} else if (confirmLower && confirmSpecial) {
  userChoices = alphaLower.concat(specialChar);
  console.log(userChoices);
} else if (confirmUpper && confirmNumber) {
  userChoices = alphaUpper.concat(number);
  console.log(userChoices);
} else if (confirmUpper && confirmSpecial) {
  userChoices = alphaUpper.concat(specialChar);
  console.log(userChoices);
} else if (confirmNumber && confirmSpecial) {
  userChoices = number.concat(specialChar);
  console.log(userChoices);
}
else if (confirmLower) {
  userChoices = alphaUpper;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = alphaUpper;
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = number;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = specialChar;
  console.log(userChoices);
};

var passwordBlank = [];

for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices)
}

var password = passwordBlank.join("");
console.log("Your password is: "+ password);
return password;
}