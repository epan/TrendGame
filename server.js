const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client/public'));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.listen(PORT, () => {
  console.log(`Listening on ${IP}:${PORT}`);
});

app.get('/api', (req, res) => {
  res.send({
    version: '0.0.1'
  });
});

app.post('/trends', (req, res) => {
  // req: trend query
  // res: query response
});

app.post('/news', (req, res) => {
  // req: news query
  // res: query response
});

module.exports = app;
