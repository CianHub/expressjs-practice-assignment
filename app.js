const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('I am the first middleware function');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('<h1>I am the users middleware function</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>I am the index middleware function</h1>');
});

app.listen(3000);
