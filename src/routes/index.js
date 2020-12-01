const express = require("express");
const router = express.Router();

//Página Home
router.get('/', (req, res) => {
    const message = 'Hello World!';
    res.render('index', {message});
});

module.exports = router;