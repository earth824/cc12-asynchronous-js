const { readFile } = require('fs');
// Promise Constructor
// new Promise(function(resolve, reject) {  })
// readFile(fileName, options, callback)
// convert callback to promise
// const readFilePromise = new Promise(function (resolve, reject) {
//   readFile('user111.json', 'utf-8', function (err, data) {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });
// Promise object มี property 2 อัน คือ state, result
// ช่วงที่เริ่มทำงานจนถึงเสร็จสิ้น เรียกว่า pending state และ result เป็น undefined
// เมื่อเสร็จสิ้นแล้วผลลัพธืเป็นได้ 2 แบบ คือ
// 1. สำเร็จ เรียกว่า fulfilled state และมี result ค่าที่ถูกเรียกจาก resolve
// 2. ไม่สำเร็จหรือเกิด error เรียกว่า rejected state และมี result ค่าที่ถูกเรียกจาก reject

// readFilePromise.then(successCallback, errorCallback)
// readFilePromise.then(
//   function success(data) {
//     console.log('Success callback');
//     console.log(data);
//   },
//   function callback(err) {
//     console.log('Error callback');
//     console.log(err);
//   }
// );

// readFilePromise.then(function success(data) {
//   console.log('Success callback');
//   console.log(data);
// });

// readFilePromise.catch(function (err) {
//   console.log(err);
// });

// readFilePromise.finally(function () {
//   console.log('Final call');
// });

function readFilePromiseFn(fileName) {
  return new Promise(function (resolve, reject) {
    readFile(fileName, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// readFilePromiseFn('user.json')
//   .then(function (userData) {
//     console.log(userData);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log('finally');
//   });

// const arr = [1, 3, 5, 7, 6, 4];
// const result = arr.filter().map().reduce()

// const result = [];
// readFilePromiseFn('user.json')
//   .then(function (userData) {
//     console.log('User');
//     result.push(userData);
//     return readFilePromiseFn('product.json');
//   })
//   .then(function (productData) {
//     console.log('Product');
//     result.push(productData);
//     return readFilePromiseFn('sale.json');
//   })
//   .then(function (saleData) {
//     console.log('Sale');
//     result.push(saleData);
//   })
//   .then(function () {
//     console.log('Success all');
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log('Errorrrrrrrrrr');
//     console.log(err);
//   });

// Promise.all จะ resolve promise object ทุกตัวใน array
// const resultPromiseAll = Promise.all([
//   readFilePromiseFn('user.json'), // userData
//   readFilePromiseFn('product.json'), // productData
//   readFilePromiseFn('sale.json') // saleData
// ]);

// resultPromiseAll
//   .then(function (result) {
//     // [userData, productData, saleData]
//     console.log(result[2]);
//     return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Lab Promise
// function logChar(alphabet, ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(alphabet);
//       resolve();
//     }, ms || 1000);
//   });
// }

// logChar('A')
//   .then(function () {
//     return logChar('B', 3000);
//   })
//   .then(function () {
//     return logChar('C');
//   })
//   .then(function () {
//     return logChar('D', 2000);
//   })
//   .then(function () {
//     return logChar('E');
//   })
//   .then(function () {
//     return logChar('F', 4000);
//   })
//   .then(function () {
//     return logChar('G');
//   })
//   .then(function () {
//     return logChar('H');
//   })
//   .then(function () {
//     return logChar('I');
//   });

// Async/Await

// async function always return promise object
async function callA() {
  console.log('Call A');
  return 'A';
}

async function callB() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Call B');
      resolve('B');
    }, 3000);
  });
}

// const a = callA();
// const b = callB();
// b.then(function (data) {
//   console.log(data);
// });
// a.then(function (data) {
//   console.log(data);
// });

// async function run() {
//   const b = await callB(); // B
//   const a = await callA(); // A
//   console.log(b + a);
// }

// run();
// console.log('After call');

async function run() {
  // const result = [];
  // readFilePromiseFn('user.json')
  //   .then(function (data) {
  //     console.log(data);
  //     result.push(data);
  //     return readFilePromiseFn('product.json');
  //   })
  //   .then(function (data) {
  //     result.push(data);
  //     return readFilePromiseFn('sale.json');
  //   })
  //   .then(function (data) {
  //     result.push(data);
  //   });
  try {
    const userData = await readFilePromiseFn('user.json');
    const productData = await readFilePromiseFn('product.json');
    const saleData = await readFilePromiseFn('sale.json');
  } catch (err) {}
}
run();
