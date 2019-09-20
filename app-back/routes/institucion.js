var express = require('express');
var router = express.Router();
//Ejemplo conexion mongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });



/* GET all institutions. */
router.get('/', function (req, res, next) {

    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({}).toArray((err, data) => {
            res.send(data)
        });
        client.close();
    });
});

/* GET one institution */
router.get('/:nombre', (req, res, next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.params.nombre}).toArray((err,data)=>{
            res.send(data);
        });
        client.close();
    });
});

/* POST one institution */
router.post('/', (req,res,next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.body.nombre}).toArray((err,data)=>{
            if(data.length === 0){
                client.db("Idioma").collection("Institucion").insertOne(req.body);
                res.send("Se ha agregado correctamente la institución");
            }
            else
            {
                res.status(409).send("Ya existe esa institución");
            }
        });
        client.close();
    });
});

/* POST one course of one institution */
router.post('/:nombre/cursos/', (req,res,next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.params.nombre}).toArray((err,data) =>{
            if(data.length === 0){
                res.status(404).send("No existe esa institución");
            }
            else
            {
                client.db("Idioma").collection("Institucion").updateOne({nombre:req.params.nombre}, {$addToSet: {cursos:req.body}});
                client.db("Idioma").collection("Curso").insertOne(req.body);
                res.send("Se ha agregado el curso");
            }
        });
        client.close();
    });
});


module.exports = router;
