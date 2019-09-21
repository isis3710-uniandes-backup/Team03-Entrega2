var express = require('express');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
var conn = client.connect();

let app = express();

/*Obtener todos los usuarios*/
app.get("/",(req,res)=>{
    getAll((data)=>{
        res.send(data);
    })
})

function getAll(callback){
    conn.then(cliente =>{
        cliente.db("Idioma").collection("Usuarios").find({}).toArray((err,data)=>{
            callback(data);
        })
    })
}


/*Obtener un usuario especifico */
app.get("/:login",(req,res)=>{

    var nombre = req.params.login;

    getUsuario((data)=>{
        res.send(data);
    },nombre)
})

function getUsuario(callback,nombre){
    conn.then(cliente =>{
        cliente.db("Idioma").collection("Usuarios").find({login:nombre}).toArray((err,data)=>{
            callback(data[0]);
        })
    })
}

app.post("/", (req,res)=>{
    var datos = req.body;
    write((data)=>{
        res.send(data);
    },datos)
})

function write(callback,datos){
    conn.then(cliente=>{
        cliente.db("Idioma").collection("Usuarios").find({login:datos.login}).toArray((err,data)=>{
            if(data.length ===0){
                cliente.db("Idioma").collection("Usuarios").insertOne(datos,(info)=>{
                    callback(info);
                });
                
            }
            else 
            {
                callback("Ese nombre de usuario ya existe, por favor elegir otro");
            }
        })
    })
}

app.put("/:login",(req,res)=>{
    var nombre = req.params.login;
    var datos = req.body;
    update((data)=>{
        res.send(data);
    },nombre,datos)
})

function update(callback, nombre,datos){
    conn.then(cliente=>{
        cliente.db("Idioma").collection("Usuarios").updateOne({login:nombre},{$set:{password:datos.password,correo:datos.correo},upsert:true}, (data)=>{
            callback(data);
        })
    })
}

app.delete("/:login",(req,res)=>{
    var nombre = req.params.login;
    borrar((data)=>{
        res.send(data);
    },nombre)
});

function borrar(callback, nombre)
{
    conn.then(cliente=>{
        cliente.db("Idioma").collection("Usuarios").deleteOne({login:nombre},info=>{
            callback(info);
        })
    })
}

/*Metodos para Calificaciones*/

app.get("/:login/calificaciones", (req,res)=>{
    var nombre = req.params.login;

    getCalificaciones((data)=>{
        res.send(data)
    },nombre)

})

function getCalificaciones(callback, nombre)
{
    conn.then(cliente =>{
        cliente.db("Idioma").collection("Usuarios").find({login:nombre}).toArray((err,data)=>{
            callback(data[0]["calificaciones"]);
        })
    })
}

app.post("/:login/calificaciones/", (req,res)=>{
    var nombre = req.params.login;
    var datos = req.body;
    writeCalificacion((data)=>{
        res.send(data);
    },nombre ,datos)
})

function writeCalificacion(callback,nombre,datos){
    conn.then(cliente=>{
        cliente.db("Idioma").collection("Usuarios").find({login:nombre}).toArray((err,data)=>{
            if(data.length ===0){
                callback("No se encuentra ese usuario");
            }
            else 
            {
                cliente.db("Idioma").collection("Calificaciones").insertOne(datos).then(resp=>{
                    cliente.db("Idioma").collection("Calificaciones").find({_id:resp.insertedId}).toArray((err,data)=>{
                        cliente.db("Idioma").collection("Usuarios").updateOne({login:nombre},{$addToSet:{
                            calificaciones:data[0]
                        }});
                        callback("Calificacion añadida");
                    })
                })
            }
        })
    })
}




module.exports = app;