require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World! v3');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})