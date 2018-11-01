const operations = require('./operations')
const addTwoNumbers = operations.addTwoNumbers

function testAddTwoNumbers() {
  var x = 5;
  var y = 1;
  var sum1 = x + y;
  var sum2 = addTwoNumbers(x, y);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  
  if ( sum1 === sum2 ) {
    console.log('Passed.');
  } else {
  	console.log('Failed.');
  	process.exit(1);
  }
}

testAddTwoNumbers();