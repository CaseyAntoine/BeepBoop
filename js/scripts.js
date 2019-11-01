// Business Logic
let list = [];

function range(userInput) {
  if (Number.isInteger(userInput) != true) {
    console.log("We don't accept text, you have to enter a number value 1-100.");
  }

    for(i=0; i < userInput; i++){
      list.push(i);
    }
    list.push(userInput);

    console.log(list);

    for (j = 0; j < list.length; j++) {
        if (list[j] === 1 || list[j] === 21) {
        }
    }

    console.log(list);

    list.length = 0;

    console.log(list + " has been cleared.");
}




// User Interface
$(document).ready(function() {

  $(".roboForm").submit(function(ev) {
    ev.preventDefault();

    var userInput = parseInt($("#userInput").val());

    range(userInput);


    $('.results').show();



  });
});
