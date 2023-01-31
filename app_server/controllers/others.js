const express = require('express');
const router = express.Router();





const about = (req, res) => {

    res.render('index', { title: 'About' });
}

module.exports = {

    about
};
