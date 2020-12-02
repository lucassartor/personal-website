const express = require("express");
const router = express.Router();

//Página Home
router.get('/', (req, res) => {
    res.render('pages/index');
});

module.exports = router;