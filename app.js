var addBtn = document.querySelector('btnAdd');
var subBtn = document.querySelector('btnSub');
var input = document.querySelector('inpt');

function add() {
  input.value = parseInt(input.value) + 1;
}
function sub() {
  if (input.value <= 0) {
    input.value = 0;
  } else {
    input.value = parseInt(input.value) - 1;
  }
}
function click() {
  addBtn.addEventListener("click", add);
  subBtn.addEventListener("click", sub);
  
}


/*let nums = [11, 22, 33, 46, 75, 86, 97, 98];
Use filter then map functions to filter even numbers 
then square them. Assign the result to a variable 
named squaredEvenNums and display it
Use the reduce function to calculate the sum of nums array
Chat*/
////////////////////////////////////////
/*
let nums = [25, 45, 55, 77, 88, 99];
Square and sum the array elements using the arrow
 function and then find the average of the array.*/
 /////////////////////////////////////////////////////
 /*Create a Set and a Map. Add some elements to the Set 
 and some key-value pairs to the Map. 
 Then use the forEach method of the Set to iterate over its elements. 
 For each element, we update the value of the corresponding
  key in the Map by adding 1 to it.If 
 the key doesn't exist yet, set its value to 1. Finally,
  log the updated Map to the console.*/
  /////////////////////////////////////////////
  /*Write a function that takes an array of integers and returns 
  the count of unique integers. 
  You can use a Set to keep track of the unique integers.*/
  ////////////////////////////////////////////////////////////////
  /*Write a function that takes two arrays and returns an array of the 
  common elements between them. You can use a Set to keep track of the elements.*/
 