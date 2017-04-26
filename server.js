const express = require('express');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on ${IP}:${PORT}`);
});
