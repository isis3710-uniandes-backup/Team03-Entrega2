var express = require('express');
var router = express.Router();
//Ejemplo conexion mongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true});
var conn = client.connect();


/* GET all institutions. */
router.get('/', function (req, res, next) {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({}).toArray((err, data) => {
            res.send(data)
        });
    });
});

/* GET one institution */
router.get('/:nombre', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({nombre:req.params.nombre}).toArray((err,data)=>{
            if(data === 0){
                res.status(404).send("No existe esa institucion");
            }
            else{
                res.send(data[0]);
            }
        });
    });
});

/* POST one institution */
router.post('/', (req,res,next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({nombre:req.body.nombre}).toArray((err,data)=>{
            if(data.length === 0){
                client.db("Idioma").collection("Institucion").insertOne({
                    nombre:req.body.nombre,
                    sedes:req.body.sedes?req.body.sedes:[],
                    calificaciones:[],
                    cursos:[]
                }).then(result => {
                    agregarCursos(req.body.cursos, req.body.nombre);
                    res.send("Se ha agregado correctamente la institución");
                });
            }
            else
            {
                res.status(409).send("Ya existe esa institución");
            }
        });
        
    });
});

function agregarCursos(cursos, nombre){
    for(let i of cursos){
        client.db("Idioma").collection("Cursos").insertOne(i).then(resp =>{
            client.db("Idioma").collection("Institucion").updateOne({nombre:nombre}, {$addToSet : {cursos:i}});
        });
    }
}

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
