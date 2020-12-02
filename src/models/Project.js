const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    year: {
        type: Number,
    },
    website: {
        type: String
    },
    repo: {
        type: String
    },
    technologies: {
        type: Object
    },
    images: {
        type: Object
    }
});

module.exports = mongoose.model('projects', ProjectSchema);

/*const novoProjeto = mongoose.model("projects");

new novoProjeto({
    name: "Projeto Teste",
    description: "decriçãooo",
    year: 2018,
    website: "www.google.com.br",
    technologies: {
        technologie1: {
            id: 0,
            name: "c#"
        },
        technologie2: {
            id: 1,
            name: "javascript"
        }
    },
    images: {
        image1: {
            path: "public/images/image.png",
            name: "imagem 1"
        },
        image2: {
            path: "public/images/image2.png",
            name: "imagem 2"
        },
    }
})
    .save()
    .then(() => {
        console.log("usuario salvo")
    })
    .catch((err) => {
        console.log(err)
    });
*/
