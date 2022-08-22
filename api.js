const axios = require('axios');

// GET /users
// วิธีที่ 1 axios(config)
axios({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'get'
})
  .then(function (response) {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
  })
  .catch(function (err) {
    console.log(err);
  });

// วิธีที่ 2 axios(url, config)
axios('https://jsonplaceholder.typicode.com/users', { method: 'get' }).then(
  function (response) {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
  }
);

// Create post: POST /posts
axios('https://jsonplaceholder.typicode.com/posts', {
  method: 'post',
  data: { title: 'Post me', body: 'abcdef', userId: 1 }
}).then(function (res) {
  // console.log(res.data);
});

// วิธีที่ 3 axios.get(url[, data], config), axios.post(url[, data], config), ...
axios.get('https://jsonplaceholder.typicode.com/posts').then(function (res) {
  // console.log(res.data);
});
axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Post me',
    body: 'abcdef',
    userId: 1
  })
  .then(function (res) {
    // console.log(res.data);
  });
axios
  .delete('https://jsonplaceholder.typicode.com/posts/100', {
    headers: { Authorization: 'testtest' }
  })
  .then(function (res) {
    console.log(res.data);
  });
