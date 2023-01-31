//Main Controller file for the application server

const express = require('express');
const router = express.Router();

//home page request

const index = (req, res) => {
  res.render('index', { title: 'Express' });
};
module.exports = {
  index
};
