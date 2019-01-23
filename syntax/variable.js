var myVariable = 10;

function func() {
  myVariable = 20;
  var myVariable;
}

func();

console.log(myVariable); // 10

/**
 * Variables: Global
 * myVariable = 10
 * 
 * Variables: func
 * myVariable = 20
 */


// All var declarations go to the top of your scope
