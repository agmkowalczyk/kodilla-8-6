
var a = prompt('Set "a" value'),
    b = prompt('Set "b" value'),
    value = (a*a) + (2*a*b) - (b*b);

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