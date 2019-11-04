// Business Logic
var list = [];

function range(userInput) {
    for(i=0; i < userInput; i++){
      list.push(i);
    }
    list.push(userInput);

    console.log(list);

// check each object in array and replace determined values with code words.
    for (j = 0; j < list.length; j++) {
      if (list[j] === 1) {
        list.splice(j, 1, "Beep");
      } else if ( list[j] === 2) {
        list.splice(j, 1, "Boop");
      } else if ( list[j] === 3) {
        list.splice(j, 1, "I'm sorry, Dave. I'm afraid I can't do that.")
      }
    }

    console.log(list);

    message(list);

    list.length = 0;

    console.log(list + " has been cleared.");
}
// Check userInput is not a string and within number range
function check(userInput) {
  if (Number.isInteger(userInput) != true ||userInput < 0 || userInput > 100 ) {
    console.log("Sorry, you have to enter a number value 1-100.");
  } else {
    range(userInput);
  }
}

function message(list) {

  for(i=0; i <= list.length; i++) {

  }


  console.log(list);
}




// User Interface
$(document).ready(function() {

  $(".roboForm").submit(function(ev) {
    ev.preventDefault();

    var userInput = parseInt($("#userInput").val());

    check(userInput);



    $('.results').show();



  });
});
