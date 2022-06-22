const express = require('express');
// import express from 'express';
const port = 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
