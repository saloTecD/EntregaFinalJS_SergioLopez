const bottonModoOscuro =document.querySelector("#flexSwitchCheckDefault")
const body=document.querySelector(".modoClaro")
const encabezado=document.querySelector("#Encabezado")
const divModoOscuro =document.querySelector(".selectorModo")
const listaCompleta=document.querySelector("#botonListaCompleta")
const botonArtista=document.querySelector("#filtroArtista")
const botonOrdenar=document.querySelector("#botonOrdenar")
const filtroOferta=document.querySelector("#filtroOferta")

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

//Lista completa
listaCompleta.onclick=()=>{
    cardsAHtml(artistas)
}
   
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

//Seleccion artista

botonArtista.onclick=()=>{

    elemento=document.querySelector("#artistaSelect")
    seleccion=elemento.value
    return filtroArtista(seleccion)
}

function filtroArtista(seleccion){
    
    const filtro=artistas.filter((elemento)=>{
        return elemento.artista===seleccion
    })
  

    const contenedor=document.querySelector(".contenedor")
    document.querySelector(".contenedor").innerHTML=""
        for (let i=0;i<filtro.length;i++){
            
            
            const card=document.createElement("div")
            card.className="card"
            card.setAttribute(`id`,`${filtro[i].id}`)
            card.innerHTML=`
                <div class="container-img">
                    <img src=${filtro[i].img} alt=${filtro[i].name}
                </div>
                <h3>
                    Artista:${filtro[i].artista}
                </h3>
                <h3>
                    Genero:${filtro[i].genero}
                </h3>
                <h3>
                    Album:${filtro[i].album}
                </h3> 
                <h3>
                    Cancion:${filtro[i].cancion}
                </h3> 
                <h3>
                    Fecha:${filtro[i].fecha}
                </h3> 
                <h3>
                    Precio:$${filtro[i].precio}
                </h3> 
                                
            `
            contenedor.appendChild(card)
            
        }
}

//funciones de ordenar

botonOrdenar.onclick=()=>{
    elemento=document.querySelector("#ordenAlfabetico")
    seleccion=elemento.value
    
    if(seleccion==1){
        return sortArtistaA(seleccion)
    }
    else{
        return sortArtistaZ(seleccion)
    }
}

function sortArtistaA(seleccion){
    console.log(seleccion)

   const artistasOrdenados=[...artistas].sort((a,b)=>{
    if(a.artista<b.artista){
        return -1
    }
    else if(a.artista>b.artista){
        return 1
    }
    else{
        return 0
    }
})
    console.log(artistasOrdenados)
    const contenedor=document.querySelector(".contenedor")
    document.querySelector(".contenedor").innerHTML=""
        for (let i=0;i<artistasOrdenados.length;i++){
            
            
            const card=document.createElement("div")
            card.className="card"
            card.setAttribute(`id`,`${artistasOrdenados[i].id}`)
            card.innerHTML=`
                <div class="container-img">
                    <img src=${artistasOrdenados[i].img} alt=${artistasOrdenados[i].name}
                </div>
                <h3>
                    Artista:${artistasOrdenados[i].artista}
                </h3>
                <h3>
                    Genero:${artistasOrdenados[i].genero}
                </h3>
                <h3>
                    Album:${artistasOrdenados[i].album}
                </h3> 
                <h3>
                    Cancion:${artistasOrdenados[i].cancion}
                </h3> 
                <h3>
                    Fecha:${artistasOrdenados[i].fecha}
                </h3> 
                <h3>
                    Precio:$${artistasOrdenados[i].precio}
                </h3> 
                                
            `
            contenedor.appendChild(card)
            
        }
}

function sortArtistaZ(seleccion){
    console.log(seleccion)

   const artistasOrdenados=[...artistas].sort((a,b)=>{
    if(a.artista<b.artista){
        return 1
    }
    else if(a.artista>b.artista){
        return -1
    }
    else{
        return 0
    }
})
    console.log(artistasOrdenados)
    const contenedor=document.querySelector(".contenedor")
    document.querySelector(".contenedor").innerHTML=""
    for (let i=0;i<artistasOrdenados.length;i++){
            
            
        const card=document.createElement("div")
        card.className="card"
        card.setAttribute(`id`,`${artistasOrdenados[i].id}`)
        card.innerHTML=`
            <div class="container-img">
                <img src=${artistasOrdenados[i].img} alt=${artistasOrdenados[i].name}
            </div>
            <h3>
                Artista:${artistasOrdenados[i].artista}
            </h3>
            <h3>
                Genero:${artistasOrdenados[i].genero}
            </h3>
            <h3>
                Album:${artistasOrdenados[i].album}
            </h3> 
            <h3>
                Cancion:${artistasOrdenados[i].cancion}
            </h3> 
            <h3>
                Fecha:${artistasOrdenados[i].fecha}
            </h3> 
            <h3>
                Precio:$${artistasOrdenados[i].precio}
            </h3> 
                            
        `
        contenedor.appendChild(card)
        
    }
}


//Filtro de ofertas
filtroOferta.onclick=()=>{
    console.log("presione")
    const filtro=artistas.filter((elemento)=>{
        return elemento.oferta==true
    })
  

    const contenedor=document.querySelector(".contenedor")
    document.querySelector(".contenedor").innerHTML=""
        for (let i=0;i<filtro.length;i++){
            
            
            const card=document.createElement("div")
            card.className="card"
            card.setAttribute(`id`,`${filtro[i].id}`)
            card.innerHTML=`
                <div class="container-img">
                    <img src=${filtro[i].img} alt=${filtro[i].name}
                </div>
                <h3>
                    Artista:${filtro[i].artista}
                </h3>
                <h3>
                    Genero:${filtro[i].genero}
                </h3>
                <p>
                    Album:${filtro[i].album}
                </p> 
                <h3>
                    Cancion:${filtro[i].cancion}
                </h3> 
                <h3>
                    Fecha:${filtro[i].fecha}
                </h3> 
                <h3>
                    Precio:$${filtro[i].precio}
                </h3>
                <h3 class="oferta"> 
                Precio con descuento del 10% pagando con visa:$${filtro[i].precio-filtro[i].precio*10/100}
                </h3>
                                
            `
            contenedor.appendChild(card)
            
        }
}
