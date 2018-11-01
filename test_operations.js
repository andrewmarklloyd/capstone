const operations = require('./operations')
const addTwoNumbers = operations.addTwoNumbers
const subTwoNumbers = operations.subTwoNumbers

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

function testSubtwoNumbers() {
  var x = 5;
  var y = 1;
  var diff1 = x - y;
  var diff2 = subTwoNumbers(x, y);

  console.log('subTwoNumbers() should return the difference of its two parameters.');
  console.log('Expect ' + diff1 + ' to equal ' + diff2 + '.');

  if ( diff1 === diff2 ) {
    console.log('Passed.');
  } else {
    console.log('Failed.');
    process.exit(1);
  }
}

testAddTwoNumbers();
testSubtwoNumbers();
