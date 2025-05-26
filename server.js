/*
    Se utiliza express para la creación del servidor y la gestión de rutas.
    Se utiliza cors para permitir el acceso desde otros dominios.
    Se utiliza path para la gestión de rutas de archivos.
    Se utiliza express.json() para la gestión de datos en formato JSON.
    Se utiliza express.urlencoded() para la gestión de datos en formato URL-encoded.
*/

const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();
// Enlazamos el server con los controladores de usuarios y middlewares
const {accesoUser} = require('./0.Controladores/Usuarios');
const {isUser} = require('./1.Middlewares/Usuarios');
const paginas = require('./2.Datos/datos.paginas');

// 3. Utilizamos dotenv: para eso escribirmos:
require('dotenv').config();

// use
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

// 8. Creamos las peticiones de acceso a la aplicación usando las variables
app.post("/acceso", accesoUser);
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})

app.get("/pagina-app", isUser, (req, res) => {
    // Enviamos la página de la aplicación
    res.send(paginas.app);
})


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});