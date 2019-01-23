const x = 0;

// it will evaluates 'Not exists'
if (x) {
  console.log('Exists');
} else {
  console.log('Not exists');
}


// it will evaluates 'Exists'
if (typeof x !== undefined) {
  console.log('Exists');
} else {
  console.log('Not exists');
}

