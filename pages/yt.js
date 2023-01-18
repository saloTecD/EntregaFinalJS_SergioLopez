const poplist=document.querySelector("#popList")
const rocklist=document.querySelector("#rockList")
const eleclist=document.querySelector("#elecList")
const salsalist=document.querySelector("#salsaList")
const listContainer=document.querySelector("#listContainer")


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


//fetch a youtube

poplist.onclick=()=>{
    ytFetch()
}



function ytFetch(){
    fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=RDCLAK5uy_mUdNYQXwkFOi0Cxqb7Imacp64HQe5EXwA&key=AIzaSyA1NKnVvBvJX7pQDp4XyRSY-KC1ygnfipM")
    .then((respuesta)=>respuesta.json())
    .then((data)=>{
        console.log(data)
        let videoIdentificador=data.items[0].snippet.resourceId.videoId
        let thumbnail=data.items[0].snippet.thumbnails.high
        let title=data.items[0].snippet.title
        console.log(videoIdentificador)
        console.log(thumbnail)
        console.log(title)
    })
}



//codigo de prueba fetch youtube api

// fetch("https://www.googleapis.com/youtube/v3/search?part=id?part=snippet&id=RDCLAK5uy_mUdNYQXwkFOi0Cxqb7Imacp64HQe5EXwA&key=AIzaSyA1NKnVvBvJX7pQDp4XyRSY-KC1ygnfipM")
// .then((respuesta)=>respuesta.json())
// .then((data)=>{
//     console.log(data)})
    // const array=data.items
    // array.forEach(element => {
        // console.log(element.id.videoId)
        // let id=element.id.videoId
        // console.log(id)
        // escribirhtml(id)
        // document.getElementById("#contenedor").innerHTML=`https://www.youtube.com/watch?v=${id}`
    // });
    // console.log(array)
    
    
// })
// .catch((error)=>console.log("malio sal"))


// function escribirhtml(videoid){
//     const contenedor=document.querySelector("#contenedor")
//     contenedor.innerHTML=`https://www.youtube.com/watch?v=${videoid}`
// }