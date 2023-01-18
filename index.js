const bottonModoOscuro =document.querySelector("#flexSwitchCheckDefault")
const body=document.querySelector(".modoClaro")
const encabezado=document.querySelector("#Encabezado")
const divModoOscuro =document.querySelector(".selectorModo")

//verificar modo oscuro
const mo=localStorage.getItem("modoOscuro")
if(mo==="si"){
    oscuro()
}

// Configuracion modo oscuro y local storage

bottonModoOscuro.onclick=()=>{
    if(localStorage.getItem("modoOscuro")==="si"){
        localStorage.setItem("modoOscuro","no")
        body.classList.toggle("modoOscuro")
        encabezado.classList.toggle("modoOscuro")
        divModoOscuro.classList.toggle("modoOscuro")
        
    }
    else{
    localStorage.setItem("modoOscuro","si")
    body.classList.toggle("modoOscuro")
    encabezado.classList.toggle("modoOscuro")
    divModoOscuro.classList.toggle("modoOscuro")}
    
}
function oscuro(){
    body.classList.toggle("modoOscuro")
    encabezado.classList.toggle("modoOscuro")
    divModoOscuro.classList.toggle("modoOscuro")
    document.getElementById("flexSwitchCheckDefault").checked=true
}

// Funciones de arrays, filtros y visualizacion de la informacion de las canciones



function cardsAHtml (array){

    const contenedor=document.querySelector(".contenedor")
    document.querySelector(".contenedor").innerHTML=""
    for (let i=0;i<array.length;i++){
        
        
        const card=document.createElement("div")
        card.className="card"
        card.setAttribute(`id`,`${array[i].id}`)
        card.innerHTML=`
            <div class="container-img">
                <img src=${array[i].img} alt=${array[i].name}
            </div>
            <h3>
                Artista:${array[i].artista}
            </h3>
            <h3>
                Genero:${array[i].genero}
            </h3>
            <h3>
                Album:${array[i].album}
            </h3> 
            <h3>
                Cancion:${array[i].cancion}
            </h3> 
            <h3>
                Fecha:${array[i].fecha}
            </h3> 
            <h3>
                Precio:$${array[i].precio}
            </h3> 
                            
        `
        contenedor.appendChild(card)
        
    }
    
}































//codigo de prueba fetch youtube api

fetch("https://www.googleapis.com/youtube/v3/search?part=id&q=pink%20floid%20another%20brick%20in%20the%20wall&key=AIzaSyA1NKnVvBvJX7pQDp4XyRSY-KC1ygnfipM")
.then((respuesta)=>respuesta.json())
.then((data)=>{
    const array=data.items
    array.forEach(element => {
        // console.log(element.id.videoId)
        let id=element.id.videoId
        console.log(id)
        escribirhtml(id)
        // document.getElementById("#contenedor").innerHTML=`https://www.youtube.com/watch?v=${id}`
    });
    // console.log(array)
    
    
})
.catch((error)=>console.log("malio sal"))


function escribirhtml(videoid){
    const contenedor=document.querySelector("#contenedor")
    contenedor.innerHTML=`https://www.youtube.com/watch?v=${videoid}`
}