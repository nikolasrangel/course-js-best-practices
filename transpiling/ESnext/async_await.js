const asyncFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done');
      resolve(true);
    }, 3000);
  })
};

(async () => {
  const result = await asyncFunction();
  console.log(result);  
})();

// transpiling
// babel async_await.js -o esnext.js
