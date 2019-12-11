const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/getBPI', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
