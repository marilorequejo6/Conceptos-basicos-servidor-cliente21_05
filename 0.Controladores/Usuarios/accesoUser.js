/* Esta página permite el acceso de usuario a la aplicación
   y devuelve un token de acceso si el usuario es correcto.
   Si no, devuelve un mensaje de error.
   Este controlador se encarga de recibir los datos del cliente y validar el acceso.
   Se utiliza JWT para la creación del token de acceso.
    Se utiliza dotenv para la gestión de variables de entorno.
*/

const jwt = require('jsonwebtoken');
const accesoUser = (req, res) => {
    const { name, email } = req.body; // desestructura el objeto de entrada
    console.log(name, email);

    // Esta condición hace la equivalencia a entrar en la base de datos a solicitar el logueo del usuario
    let condicionUsuarioCorrecto = req.body.name === 'Marilo' && req.body.email === 'marilo@marilo.com';

    let datoEnviadoCondicionUsuarioCorrecto = {}

    let datoEnviadoError = { respuesta: "Faltan campos o el usuario no está registrado" }

    if(condicionUsuarioCorrecto){
        // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
        const tokenUsuario = jwt.sign({usuario: req.body.name,email:req.body.email},process.env.secret)
        console.log("tokenUser ",tokenUsuario)
        datoEnviadoCondicionUsuarioCorrecto.respuesta = "acesso autorizado";
        datoEnviadoCondicionUsuarioCorrecto.tokenUsuario = tokenUsuario
                   
        res.send(datoEnviadoCondicionUsuarioCorrecto);
    } else{
        res.send(datoEnviadoError); 
    }
     
}

module.exports = accesoUser;

