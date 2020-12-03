// Assignment Code

// User input variables: 

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var character = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 
var generateBtn = document.querySelector("#generate");
var choices
var pwdLength = 8; //default value

// Start function to generate password
function writePassword() {
    // Asks for user input
    pwdLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!pwdLength) {
        alert("This needs a value");
    } else if (pwdLength < 8 || pwdLength > 128) {
        // Validates user input
        // Start user input prompts
        pwdLength = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
     // Else if for 4 negative options
     if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, lowercase, uppercase);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowercase, uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowercase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < pwdLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Had to research this a lot as it did not make sense to me until I looked it up
    var ps = password.join("");
    UserInput(ps);
    return ps;
    }
    // This puts the password value into the textbox
    // Changed function input to use textcontent
    function UserInput(ps) {
      document.getElementById("password").textContent = ps;

    }

    generateBtn.addEventListener("click", writePassword);

    
