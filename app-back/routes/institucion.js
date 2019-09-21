var express = require('express');
var router = express.Router();
//Ejemplo conexion mongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true});



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
            if(data === 0){
                res.status(404).send("No existe esa institucion");
            }
            else{
                res.send(data[0]);
            }
        });
        client.close();
    });
});

/* POST one institution */
router.post('/', (req,res,next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.body.nombre}).toArray((err,data)=>{
            if(data.length === 0){
                client.db("Idioma").collection("Institucion").insertOne({
                    nombre:req.body.nombre,
                    sedes:req.body.sedes?req.body.sedes:[],
                    calificaciones:[],
                    cursos:req.body.cursos?req.body.cursos:[]
                }).then(result => {
                    res.send("Se ha agregado correctamente la institución");
                    client.close();
                });
            }
            else
            {
                res.status(409).send("Ya existe esa institución");
                client.close();
            }
        });
        
    });
});

/* POST one course of one institution */
router.post('/:nombre/cursos/', (req,res,next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.params.nombre}).toArray((err,data) =>{
            if(data.length === 0){
                client.close();
                res.status(404).send("No existe esa institución");
            }
            else
            {
                client.db("Idioma").collection("Cursos").insertOne(req.body).then(resp =>{
                    client.db("Idioma").collection("Cursos").find({_id:resp.insertedId}).toArray((err,data) => {
                        client.db("Idioma").collection("Institucion").updateOne({nombre:req.params.nombre}, {$addToSet: {cursos:data[0]}});
                        res.send("Se ha agregado el curso");
                        client.close();
                    });
                });
            }
        });
    });
});

router.get('/:nombre/cursos', (req, res, next) => {
    client.connect(err => {
        client.db("Idioma").collection("Institucion").find({nombre:req.params.nombre}).toArray((err,data)=>{
            res.send(data[0]["cursos"]);
        });
        client.close();
    });
});

module.exports = router;
