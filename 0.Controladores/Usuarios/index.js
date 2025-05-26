// 5. Importamos los controladores de usuarios y los exportamos desde aquí
// Creamos variables para las funciones de los controladores de los usuarios y las exportamos para poder
// usarlas más facilmente en el server.js
// Básicamente, transformamos la función accesoUser.js en una variable

const accesoUser = require('./accesoUser');

module.exports = {
    accesoUser
};
