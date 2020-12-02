const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Project");
const Project = mongoose.model("projects");

//Página Home
router.get('/', (req, res) => {

    Project.find().then((projects) => {
        res.render('pages/index', {projects});
    }).catch((err) => {
        res.redirect('/');
    });
});

module.exports = router;