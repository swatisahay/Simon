export function simon() {

  var color = ["red", "blue", "green", "yellow"];
  var arr = [" "];
  var userInput = [];
  var delayOutput = setInterval(test, 1000);


  function add() {
    arr.push(color[Math.floor(Math.random() * 4)]);
    arr.push(" ");
  }
  add();
  add();
  add();
  add();


  var i=0;
  var finalOutput = "";
  var output = setInterval(function() {            // setInterval makes it run repeatedly
      finalOutput= arr[i++];// get the item and increment i to move to the next
      if (i == arr.length) {
      i = 0;
      myStopFunction()
      }// reset to first element if you've reached the end
  }, 1000);
  function myStopFunction() {
      clearInterval(output);
  }

return finalOutput;



}
