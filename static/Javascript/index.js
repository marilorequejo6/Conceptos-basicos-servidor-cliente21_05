import { AccesoUsuario } from "./Funcions/AccesoUsuario.js";
import { PeticionPagina } from "./Funcions/PeticionPagina.js";


if(location.pathname == "/app"){
    PeticionPagina()
}
if(location.pathname == "/"){
    AccesoUsuario()// GARDO O USUARIO ENCRIPTADO
}