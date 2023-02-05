const express = require('express');
const router = express.Router();

const about = (req, res) => {
  res.render('generic-text', { title: 'About' });
};

module.exports = {
  about,
};
