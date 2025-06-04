import { endpoints } from "../Datos/datos.js"

export async function PeticionPagina(){
                let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)
                let objetoEnvio = {
                    method: "GET",
                    headers: {
                        "Authorization": token
                    }
                }
                const paginaEnTexto = await fetch(endpoints.paginaApp, objetoEnvio)
                const paginaText = await paginaEnTexto.text();
                /* const peticion = await fetch("/pagina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                const paginaText = await peticion.text() */
                console.log("pagina ?", paginaText)
                document.body.innerHTML = paginaText;

                // Pasos para solicitar datos: las tareas: preparar el objeto de envío:
                // dentro del objeto tengo que saber:
                // 1. Utilizar el token (objetoEnvio)
                // 2. Saber el endpoint (/tareas)
                // 3. Saber el método (GET) 
                const peticionTareas = await fetch(endpoints.tareas, objetoEnvio);
                const tareasText = await peticionTareas.json();
                console.log("tareas: ", tareasText);

                //FORMA 1: Mostrar las tareas en el HTML
                // Ahora tengo que mostrar las tareas en el HTML
/*                 // Ahora tengo que mostrar las tareas en el HTML
                const refMain = document.querySelector("main");
                     refMain.innerHTML = `
                    <h1>Tareas</h1>
                    <ul>
                        <li>${tareasText.tareas1}</li>
                        <li>${tareasText.tareas2}</li>
                        <li>${tareasText.tareas3}</li>
                        <li>${tareasText.tareas4}</li>
                        <li>${tareasText.tareas5}</li>
                        <li>${tareasText.tareas6}</li>
                    </ul>
                `; 
                // Recorremos el objeto de tareas y lo mostramos en el HTML
                for (let tarea in tareasText) {
                    refMain.innerHTML += `<li>${tareasText[tarea]}</li>`;
                } */

                // FORMA 2: Mostrar las tareas en el HTML
                let elementoDiv = document.createElement("div");
                for (let tarea in tareasText) {
                    let elementoP = document.createElement("p");
                    let elementoSpan = document.createElement("span"); // Creamos un span para el texto de la tarea
                    let elementoImg = document.createElement("img");

                    // Asignamos el texto y la imagen a los elementos
                    elementoImg.src = "../assets/Bin.png";
                    elementoSpan.innerHTML = tareasText[tarea];

                    // Asignamos estilos a los elementos
                    elementoImg.className = "boton-eliminar";
                    
                    // Agregamos elementos a p
                    elementoP.append(elementoSpan);
                    elementoP.append(elementoImg);

                    // Evento: eliminar tarea
                    elementoImg.addEventListener("click", () => {
                        elementoP.remove(); // Elimina solo este párrafo
                    });

                    // Agregamos todo al contenedor principal
                    elementoDiv.append(elementoP); 
                }
                document.querySelector("main").append(elementoDiv); // Metemos el div en el main


                // Botón de salir
                salir.addEventListener("click",()=>{
                        console.log("salir")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}