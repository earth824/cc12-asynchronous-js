// console.log('Asynchronous JavaScript'); // (1) 10 sec
// console.log(40); // (2) // 1 sec

// const a = 10; // (3) // 1 sec
// for (let i = 0; i < a; i++) {
//   // (4) // 0.000001
//   console.log(`Loop ${i}`); // (5) // 5 sec
// }

// console.log('End Loop'); // (Last) // 1 sec
// // total 63 sec

// setTimeout(callback, delayTime ms)
// function run() {
//   console.log('Runnnnn');
// }
// setTimeout(run, 5000);
// console.log('Behind the run function');
// setTimeout(function () {
//   console.log('Behind behind behind');
// }, 3000);

// setInterval(callback, periodicTime ms) => intervalId
// clearInterval(intervalId)
// const id = setInterval(function () {
//   console.log('runnnn');
// }, 1000);

// setTimeout(function () {
//   clearInterval(id);
// }, 10000);

// คำสั่ง readFile sales.json เพื่อเอาข้อมูลมาใช้
// คำสั่ง load Google Map
// เอาข้อมูลในไฟล์ sales.json ไปคำนวณ
// มีบางคำสั่งต้องรอ asynchronous ให้ทำงานให้เสร็จ มีวิธีจัดการหลักๆ  คือ callback, promise, async/await
// function asyncTask1(callback) {
//   setTimeout(callback, 1000);
// }

// function asyncTask2(callback) {
//   setTimeout(callback, 5000);
// }

// asyncTask1(function () {
//   console.log('run task1');
// });
// asyncTask2(function () {
//   console.log('run task2');
// });

// function run() {
//   asyncTask2(function () {
//     console.log('Task 2 run....');
//     asyncTask1(function () {
//       console.log('Task 1 run....');
//     });
//   });
// }

// run();

// handle asynchronous: Callback
// readFile(fileName, option, callback) ทำหน้าที่อ่านไฟล์ เมื่ออ่านไฟล์เสร็จจะ execute callback: callback(errObject, readData)
// async ทำงานโดยใช้เวลา ช่วงที่กำลังทำงานจะเรียกว่า pending, เมื่อทำงานเสร็จจะเกิดผลลัพธืได้ 2 แบบ คือ success หรือ error
// readFile มาจาก library ชื่อว่า fs ใน nodeJs
// import/export ในรูปแบบ commomJs (ใน react เรียกว่า ES module)
// const fs = require('fs'); // import fs from 'fs'
// const { readFile } = require('fs');
// readFile('user.json', 'utf-8', function (err, dataUser) {
//   console.log('read file user  completed');
//   // console.log('-----------------------------------------');
//   // console.log(err);
//   // console.log('-----------------------------------------');
//   // console.log(data);
//   readFile('product.json', 'utf-8', function (err, dataProduct) {
//     console.log('read file product completed');
//     readFile('sale.json', 'utf-8', function (err, dataSale) {
//       console.log('read file completed');
//       readFile('sale.json', 'utf-8', function (err, dataSale) {
//         console.log('read file completed');
//         readFile('sale.json', 'utf-8', function (err, dataSale) {
//           console.log('read file completed');
//           readFile('sale.json', 'utf-8', function (err, dataSale) {
//             console.log('read file completed');
//             readFile('sale.json', 'utf-8', function (err, dataSale) {
//               console.log('read file completed');
//               readFile('sale.json', 'utf-8', function (err, dataSale) {
//                 console.log('read file completed');
//                 readFile('sale.json', 'utf-8', function (err, dataSale) {
//                   console.log('read file completed');
//                   readFile('sale.json', 'utf-8', function (err, dataSale) {
//                     console.log('read file completed');
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Lab Callback
// setTimeout(function () {
//   console.log('A');
//   setTimeout(function () {
//     console.log('B');
//     setTimeout(function () {
//       console.log('C');
//       setTimeout(function () {
//         console.log('D');
//         setTimeout(function () {
//           console.log('E');
//           setTimeout(function () {
//             console.log('F');
//             setTimeout(function () {
//               console.log('G');
//               setTimeout(function () {
//                 console.log('H');
//                 setTimeout(function () {
//                   console.log('I');
//                   setTimeout(function () {
//                     console.log('J');
//                     setTimeout(function () {
//                       console.log('K');
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// for (let i = 0; i < alphabets.length; i++) {
//   setTimeout(function () {
//     console.log(alphabets[i]);
//   }, 1000 * (i + 1));
// }

function gen(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, 5000);
  });
}

gen('a')
  .then(function () {
    return gen('b');
  })
  .then(function () {
    return gen('c');
  });
