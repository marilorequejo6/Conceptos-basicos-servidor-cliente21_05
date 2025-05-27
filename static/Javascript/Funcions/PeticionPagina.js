export async function PeticionPagina(){
    let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)
                const peticion = await fetch("/pagina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                const paginaText = await peticion.text()
                console.log("pagina ?", paginaText)
                document.body.innerHTML = paginaText;

                salir.addEventListener("click",()=>{
                        console.log("salir")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}