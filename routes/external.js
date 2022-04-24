// Demo of making a request to the server
const axios = require('axios');
const res = await axios.get('http://localhost:3000/user/42');

res.data; // { userId: '42' }
