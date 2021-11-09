//#1
new Promise((resolve, reject) => {
  resolve(10);
  console.log('P');
  reject(new Error(20));
}, 2000)
  .then((result) => console.log('F', result))
  .catch((error) => console.log('error', error));
  


//#2
Promise.resolve(42)
  .then(x => console.log(x))
  .then(x => console.log(x))
  .then(x => console.log(x));



//#3 
p = new Promise((resolve, reject) => {
  console.log('RUN');
  resolve(42);
});
p2 = p1.then((result) => { console.log(result); return result * 2 });
p2.then((result) => console.log(result));
p.then(x => console.log(x));