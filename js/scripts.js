// Business Logic
let list = [];

function range(userInput) {
  if (userInput === "") {
    console.log("Sorry Dave, you have to pick a number 1-100");
  } else if (Number.isInteger(userInput) != true) {
    console.log("We don't accept text, you have to enter a number value 1-100.");
  }

    for(i=0; i < userInput; i++){
      list.push(i);
    }
    list.push(userInput);

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




  });
});
