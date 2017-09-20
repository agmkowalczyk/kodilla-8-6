// scripts.js

//var name = prompt('Enter your name');
//alert('Hello, ' + name);
//console.log('Hello, ' + name);

// komentarz 1

/*
  komentarz 2

*/
var a = prompt('Set \'a\' value'),
  h = prompt('Set \'h\' value'),
  //triangleArea;        //czy trzeba dac najpierw pustą zmienna?
  triangleArea = a*h/2;  //czy też  mozna w deklaracji od razu dac takie rownanie?
 
  console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
  alert('triangleArea is ' + triangleArea + '. Good job!');