var generateBtn = document.querySelector("#generate");

//variables for characters chose in arrays!
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special_character = ["~","!", "@", "#", "$","%","^","&","*","-","+"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];

 //  b. lowercase, uppercase, numbers, special characters
 var confirmnum = confirm("Would you like your password to contain numbers? If yes, click ok! If no, click cancel");
 var confirmspec= confirm("Would you like your password to contain special characters? If yes, click ok! If no, click cancel");
 var confirmlower = confirm("Would you like your password to contain lower case characters? If yes, click ok! If no, click cancel");
 var confirmupper = confirm("Would you like your password to contain upper case characters? If yes, click ok! If no, click cancel");

  //2. Validate the input: Collects answers based on the users selections
  var passchoice = [];

//function generates password
function generatePassword(){
  console.log("The button has been clicked");
  //1. Prompt the user for the password criteria
  //  a. Password length 8< 128
    
  var length = prompt("Please insert a password with a minimum of 8 characters and a maximum of 128");
  if (length > 8 || length < 128){
    alert(`Your password contains ${length} characters`);
  } 
  if(length < 8 || length > 128){
    alert('Your password must be between 8-128 characters!');
  }
  //3. Generate password base on criteria.
 if (confirmnum){
   passchoice.push(...number);
 }
 if(confirmspec){
   passchoice.push(...special_character);
 }
 if(confirmlower){
   passchoice.push(...lowercase);
 }
 if(confirmupper){
   passchoice.push(...uppercase)
 }



//4. Display password to the page. (our return is already complete)
  return "Generated Password Complete!";
}
//Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
//Add event listener to generate button

generateBtn.addEventListener("click",writePassword);