// Assignment code here
var generateBtn = document.querySelector("#generate");

var Numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

function questions(){
  var Valid = false;
  do{
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNums = confirm("Do you want your password to include numbers?");
    var askLower = confirm("Do you want your password to include lower case letters?");
    var askUpper = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNums: askNums,
      askLower: askLower,
      askUpper: askUpper,
      askSpecial, askSpecial
    }
    if((length < 8)||(length > 128))
    alert("Choose a number between 8 and 128");
    else if((!askLower)&&(!askNums)&&(!askSpecial)&&(!askUpper))
    alert("Must choose at least one type")
    else
    Valid = true;
  } while(!Valid);
  return responses;
}

function generatePassword(){
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNums) {
    for (var i of Numbs)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLower) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpper) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i=0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
