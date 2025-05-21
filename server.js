const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

// use
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => {
    const {name, email} = req.body;// desesctructura o obxeto de entrada
    console.log(name, email);
    let condicionUsuarioCorrecto = req.body.name == 'Marilo' && req.body.email == 'marilo@marilo.com';
    let datoEnviadoCondicionUsuarioCorrecto = {
                respuesta:"acesso autorizado",
                usuario:{
                    name:'Marilo'
                }
            }
    let datoEnviadoError = {respuesta:"Faltan campos o el usuario no está registrado"}


    if(condicionUsuarioCorrecto){    
        res.send(datoEnviadoCondicionUsuarioCorrecto);
    }else{
        res.send(datoEnviadoError); 
    }
     
});
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});