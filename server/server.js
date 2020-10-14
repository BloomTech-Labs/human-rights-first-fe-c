const express = require('express');
const CORS = require('cors');
const dummyData = require('./dummyData');

const app = express();

app.use(CORS());

app.get('/', (req, res) => {
  res.send(dummyData);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
