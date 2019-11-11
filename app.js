//variable declaration
var button = document.querySelectorAll("button");
var display = document.getElementById("display");

//Event listener to register click events
for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", doSomething);
}

//array, variable,object declaration
var myObj = {}; //for inter-function referencing
let array = [];
let j = 0;

//function to calculate stuff
function doSomething(e) {
  //when equality button is pressed
  if (e.target.value == "=") {
    var sum = myObj.final;
    display.value = sum;
  }
  //when AC button is pressed
  else if (e.target.value == "clear") {
    myObj.final = 0;
    display.value = myObj.final;
    window.location.reload();
  }
  //when every other button is pressed
  else {
    //counter
    j++;
    //places clicked elements into an array
    array[j] = e.target.value;
    //converts array to string without whitespaces
    var stopGap = array.join("");
    //shows clicked values in real time
    display.value = stopGap;
    //crudely does the calculations
    var finalDisp = eval(stopGap);
    //passes the value into the myObj.final property
    myObj.final = finalDisp;

    // return finalDisp;
  }
}
