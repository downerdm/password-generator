// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all of the possible input options
var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U", "V", "W", "X","Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u", "v", "w", "x","y", "z"];
var numberChar = ["1", "2", "3", "4", "5", "6","7", "8", "9","0"];
var specialChar = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var regex = /^[0-9]+$/;

function generatePassword () {
        // User chooses password length
  var passwordLength = prompt("How long should your password be? (Enter a number from 8 to 128.)");
  
  // If too short
  if (!passwordLength) {
    alert("The password must be from 8 to 128 characters long.  Please choose again");
    return;
    }

  // If not in the range of 8 to 128
    else if (passwordLength <8 || passwordLength > 128) {
    alert("The password must be from 8 to 128 characters long.  Please choose again");
    return;  
    }

  //If not an integer [found code on stackoverflow]
  else if (!passwordLength.match(regex)) {
    alert("Only numbers allowed");
    return;
  }

   else {
     passwordLength
   }
    
        // User chooses character sets

  // Does the user wish to use uppercase letters?  
  var upperYes = confirm("Click 'OK' to use uppercase letters.");
      
  // Does the user wish to use uppercase letters?  
  var lowerYes = confirm("Click 'OK' to use lowercase letters.");
    
  // Does the user wish to use numbers?  
  var numberYes = confirm("Click 'OK' to use numbers.");

  // Does the user wish to use special characters?  
  var specialYes = confirm("Click 'OK' to use special characters.");
 
        // Creates the character pool

  // No selections
  if (!upperYes && !lowerYes && !numberYes && !specialYes) {
    alert ("You must pick at least one character set")
    return;
  }

  // All selections  
  else if (upperYes && lowerYes && numberYes && specialYes) {
    charPool = upperCase.concat(lowerCase,numberChar,specialChar);
  }

  // 3 selections
  else if (upperYes && lowerYes && numberYes) {
    charPool = upperCase.concat(lowerCase, numberChar);
  }
  else if (upperYes && lowerYes && specialYes){
      charPool = upperCase.concat(lowerCase, specialChar);
  }
  else if (upperYes && numberYes && specialYes){
      charPool = upperCase.concat(numberChar, specialChar);
  }
  else if (lowerYes && numberYes && specialYes){
    charPool = lowerCase.concat(numberChar, specialChar);
  }

  // 2 selections
  else if (upperYes & lowerYes) {
    charPool = upperCase.concat(lowerCase);
  }

  else if (upperYes & numberYes) {
    charPool = upperCase.concat(numberChar);
  }

  else if (upperYes & specialYes) {
    charPool = upperCase.concat(specialChar);
  }

  else if (lowerYes & numberYes) {
    charPool = lowerCase.concat(numberChar);
  }

  else if (lowerYes & specialYes) {
    charPool = lowerCase.concat(specialChar);
  }

  else if (numberYes & specialYes) {
    charPool = numberChar.concat(specialChar);
  }

  // 1 selection
  else if (upperYes) {
      charPool = upperCase;
    }
  else if (lowerYes) {
    charPool = lowerCase;
  }
  else if (numberYes) {
    charPool = numberChar;
  }
  else {
    charPool = specialChar;
  }

  // Generates the actual password based on all criteria
  password = "";
  for (i = 1; i <= passwordLength; i++) {
    var randomChar = charPool[Math.floor(Math.random()* charPool.length)];
    var password = password.concat(randomChar);
  } 

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);