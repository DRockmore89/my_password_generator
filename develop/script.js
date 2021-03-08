// Assignment Code
var generateBtn = document.querySelector("#generate");
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// generate password function
function generatePassword() {
  var lengthofpassword = prompt("please choose a length of at least 8 characters and no more than 128 characters");
  if (lengthofpassword >= 8 && lengthofpassword <= 128) {
    // alerts
    var resultspecial = confirm("click ok to confirm using special characters");
    var resultnumeric = confirm("click ok to confirm using numeric characters");
    var resultlower = confirm("click ok to confirm using lowercase characters");
    var resultupper = confirm("click ok to confirm using uppercase characters");
  } else {
    alerts(
      "password length must be a length of at least 8 characters and no more than 128 characters"
    );
    return "";
  }
  if (resultspecial || resultnumeric || resultlower || resultupper) {
  } else {
    alert("must have a least 1 special condition");
    return "";
  }
  var creatingpassword = [];
  var counter = 1;
  for (let index = 1; index <= lengthofpassword; index = counter) {
    if (resultspecial == true && counter <= lengthofpassword) {
      getrandomsymbol();
      counter++;
    }
    if (resultnumeric == true && counter <= lengthofpassword) {
      getnumber();
      counter++;
    }
    if (resultlower == true && counter <= lengthofpassword) {
      getlower();
      counter++;
    }
    if (resultupper == true && counter <= lengthofpassword) {
      getupper();
      counter++;
    }
  }
  // Random char
  function getrandomsymbol() {
    var symbol = "!@#$%^&*(){}=<>/,.?';[]"
    var holdsymbol = symbol[Math.floor(Math.random() * symbol.length)];
    creatingpassword.push(holdsymbol);
  }
  // Random Uppercase
  function getupper() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var holdupper = uppercase[Math.floor(Math.random() * uppercase.length)];
    creatingpassword.push(holdupper);
  }
  // // Random Lower
  function getlower() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var holdlower = lowercase[Math.floor(Math.random() * lowercase.length)];
    creatingpassword.push(holdlower);
  }
  // Random number
  function getnumber() {
    var number1 = "1234567890";
    var holdnumber = number1[Math.floor(Math.random() * number1.length)];
    creatingpassword.push(holdnumber);
  }
  creatingpassword.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return creatingpassword.join("")
};