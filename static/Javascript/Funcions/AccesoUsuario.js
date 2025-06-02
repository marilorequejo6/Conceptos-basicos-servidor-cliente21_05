import { endpoints } from "../Datos/datos.js";

export async function AccesoUsuario() {
  
    botonEnviar.addEventListener("click",async (e)=>{
            e.preventDefault();
            //const {nome, email} = formulario;// desesctructura o obxeto de entrada
            //console.log(nome.value, email.value);// imprime os valores do formulario

            let datosFormulario = new FormData(formulario);
            let entradas = Object.fromEntries(datosFormulario.entries());
            
            console.log(JSON.stringify(entradas))
            
            let objetoEnvio = {
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(entradas)
            }
            let respuestaServer = await fetch(endpoints.acceso, objetoEnvio) 

            let respuesta = await respuestaServer.json();

            console.log("respuesta ????",respuesta.tokenUsuario);

            if(respuesta.respuesta === "acceso autorizado"){
                console.log("vamos a la app")
                localStorage.setItem("token",respuesta.tokenUsuario)
                location.replace("/app");
            }else{
                console.log(respuesta.respuesta);
                mensaje.innerHTML = respuesta.respuesta;
            }
        })
} 
