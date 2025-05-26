// 6. Importamos los middleware de usuarios y los exportamos desde aquí
// Creamos variables para las funciones de los middleware de los usuarios y las exportamos para poder
// usarlas más facilmente en el server.js

const isUser = require("./isUser");

module.exports = {
    isUser
}