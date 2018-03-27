let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey it worked!');
  }, 2000);
});

somePromise
  .then((message) => {
    console.log(message);
  })
    .catch((error) => console.log('error')
);

setTimeout(somePromise, 2000);

async function somePromise() {
  setTimeout(async () => {
    await console.log('hello');
  }, 2000);
  return 'hello';
}

somePromise().then((result) => console.log(result));