expression(); // it'll throw an error: expression is not a function
myFunc(); // 'Hi from declaration'

var expression = function() {
  console.log('Hi from function expression');
}

function myFunc() {
  console.log('Hi from function declaration');
}
