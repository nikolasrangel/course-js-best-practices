/* eslint-disable */

const obj = function() {
  // with '_this' we arent working with global or 'this' context anymore
  // thus we can pass it out as a callback
  var _this = this;

  console.log(_this);
  
  _this.hello = 'Hello';

  _this.greet = function() {
    console.log(_this.hello);
  }

  _this.delayGreeting = function() {
    // prints 'undefined'
    //setTimeout(this.greet, 1000);

    //prints 'Hello'
    //setTimeout(this.greet.bind(this), 1000);

    //prints 'Hello'
    setTimeout(_this.greet, 1000);
  }

};

// it will print the global scope and undefined
//let greeter = obj();

// the 'new' keyword binds a new 'this' scope onto that function
let greeter2 = new obj();

greeter2.delayGreeting();
