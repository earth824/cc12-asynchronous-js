const fs = require('fs/promises');

fs.readFile('example.json', 'utf-8')
  .then(function (data) {
    // console.log(typeof data);
    // console.log(data.firstName);
    const parsedData = JSON.parse(data);
    // console.log(typeof parsedData);
    // console.log('--------------------');
    // console.log(parsedData);
  })
  .catch(function (err) {
    console.log(err);
  });

const obj = {
  name: 'Pepsi',
  price: 20,
  description: undefined,
  getPrice: function () {
    return 'Get Price';
  }
};
const stringifyObj = JSON.stringify(obj);
console.log(stringifyObj);

// WEB SERVICE ให้บริการ todo list
// REST API
// Resource: todo, user
// Create Todo: POST /todos  Not Rest API exmaple POST /create-todo, POST /add-todo
// Create User: POST /users
// Get All Todo: GET /todos
// Get Todo By Id: GET/todos/123456
// Update Todo By Id: PUT /todos/123456
// Delete Todo By Id: DELETE /todos/123456
