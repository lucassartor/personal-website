const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Project");
const Project = mongoose.model("projects");

router.get('/', (req, res) => {
    Project.find().then((projects) => {
        res.render('pages/projects/projects', {projects});
    }).catch((err) => {
        res.redirect('/');
    })
});

router.get('/new', (req, res) => {
    res.render('pages/projects/projectForm');
});

router.post('/add', (req, res) => {
    const newProject = {
        name: req.body.name,
        description: req.body.description,
        year: req.body.year,
        website: req.body.website,
        repo: req.body.repo,
        technologies: req.body.technologies,
        image: req.body.image,
    };

    new Project(newProject).
    save()
        .then(() => {
        console.log("Projeto salvo!");
        res.redirect('/projects');
    })
        .catch((err) => {
            console.log(err)
        });
});

module.exports = router;