// scripts.js

//var name = prompt('Enter your name');
//alert('Hello, ' + name);
//console.log('Hello, ' + name);

// komentarz 1

/*
  komentarz 2

*/

/*  ----- ZADANIE 8.5 -----
var a = prompt('Set \'a\' value'),
  h = prompt('Set \'h\' value'),
  //triangleArea;        //czy trzeba dac najpierw pustą zmienna?
  triangleArea = a*h/2;  //czy też  mozna w deklaracji od razu dac takie rownanie?
 
  console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
  alert('triangleArea is ' + triangleArea + '. Good job!');
  */

var a = prompt('Set "a" value'),
  b = prompt('Set "b" value'),
  value = (a*a) + (2*a*b) - (b*b);
  //value = 0;
console.log('Value of "value" is: ' + value);
  
if (value > 0) {
    console.log('Positive number');
  } else if (value < 0) {
  	console.log('Negative number');
  } else {
  	console.log('Pure zero');
  }

if (value % 2 == 0) {
    console.log('This is an even number')
  } else {
    console.log('This is an odd number')
  }