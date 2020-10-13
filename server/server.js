const express = require('express');
const CORS = require('cors');

const app = express();

app.use(CORS());

let dummyData = {
  data: [
    {
      id: 0,
      city: 'Broken Arrow',
      state: 'Oklahoma',
      lat: 36.0365,
      long: -95.7809,
      title: '"Police brutality rampant in Broken Arrow!"',
      desc:
        '"Super crazy police brutality incidents happening in Broken Arrow, Oklahoma"',
      src: '"www.twitter.com"',
      date: '2020-05-30',
    },
  ],
};

app.get('/', (req, res) => {
  res.send(dummyData);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
