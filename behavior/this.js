
let obj = {
  val: 'Hi there',
  printVal: function() {
    console.log(this.val);
  },
};

let obj2 = {
  val: 'Whats up',
};

obj2.printVal = obj.printVal;

// prints 'Hi there'
obj.printVal();

// prints 'Whats up'
obj2.printVal();
