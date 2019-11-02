// Business Logic
var list = [];
var numberCheck =[];


function range(userInput) {
    for(i=0; i < userInput; i++){
      list.push(i);
    }
    list.push(userInput);

    console.log(list);

    list.length = 0;

    console.log(list + " has been cleared.");
}
// Check userInput is not a string and within number range
function check(userInput) {
  if (Number.isInteger(userInput) != true ||userInput < 0 || userInput > 100 ) {
    console.log("Sorry, you have to enter a number value 1-100.");
  } else if (Number.isInteger(userInput) >= 10){

    numberCheck.push(userInput.split(''));
    console.log(numberCheck);
  } else {
    range(userInput);
    message(userInput);
  }

}
// check each object in array and replace determined values with code words.
function message(userInput) {



  for (j = 0; j < list.length; j++) {
    if (list[j] === 1) {
      list.splice(0, 1, "Beep");
    }
  }

  console.log(list);
  console.log(numberCheck);
}




// User Interface
$(document).ready(function() {

  $(".roboForm").submit(function(ev) {
    ev.preventDefault();

    $(".resultShow").empty();

    var userInput = parseInt($("#userInput").val());
    var encryptedMessage = [];

    check(userInput);



    $('.results').show();
    $('.resultShow').append(encryptedMessage);


  });
});
