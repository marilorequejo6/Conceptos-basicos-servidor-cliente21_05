// Este archivo sirve para validar que el usuario que se loguea
// es el correcto, y que tiene acceso a ciertas partes de la aplicación

const jwt = require('jsonwebtoken');
const isUser = (req, res, next) => {

    const { authorization } = req.headers;
   
    if (!authorization) {
            throw new Error("Falta cabecera de autorización", 401);
    }

    // ESTA CONDICIÓN FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    // O LOGUEO DO USUARIO

    
    let datoEnviadoError = {respuesta:"Usuario o contraseña incorrectos"}

    // jwt.verify: verifica si el token es válido y no ha sido alterado.
    // process.env.secret: es la clave secreta con la que se firmó originalmente el token
    // Si el token es válido, devuelve el payload del token (en este caso, el usuario y el email).
    const desencriptoUser = jwt.verify(authorization,process.env.secret);

    console.log("desencriptoUser ",desencriptoUser)
    /* estás sacando propiedades específicas (usuario y email) del objeto desencriptoUser y 
    guardándolas como variables con el mismo nombre. 
    Crea dos variables nuevas (usuario y email) desde un objeto.
     */
    const {usuario, email} = desencriptoUser;

    let condicionUsuarioCorrecto = usuario == 'Marilo' && email == 'marilo@marilo.com';

    if(condicionUsuarioCorrecto){       
        next()
    }else if(usuario === null || email === null || email === undefined || usuario === undefined){
        //throw new HttpError("Usuario o contraseña incorrectos", 403);
        res.send(datoEnviadoError); 
    }
     
}

module.exports = isUser;