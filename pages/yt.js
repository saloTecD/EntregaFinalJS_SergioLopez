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
    ytFetchlist("RDCLAK5uy_mUdNYQXwkFOi0Cxqb7Imacp64HQe5EXwA")
}

rocklist.onclick=()=>{
    ytFetchlist("RDCLAK5uy_muxSO3gDc46GWIhP2DPuBa12f44IWczug")
}
eleclist.onclick=()=>{
    ytFetchlist("PLRhRrJscB-C7J7OUcsuUW6UdoWIIVDaYy")
}
salsalist.onclick=()=>{
    ytFetchlist("PLGx8vKOKHzlGkJlSeHL4HC7fWjLki_mH5")
}

function ytFetchlist(lista){
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${lista}&key=AIzaSyA1NKnVvBvJX7pQDp4XyRSY-KC1ygnfipM`)
    .then((respuesta)=>respuesta.json())
    .then((data)=>{
        listaAHtml(data)
         
    })
}

function listaAHtml(array){
    listContainer.innerHTML=""
    for(let i=0; i<array.items.length; i++){
        console.log(array.items[i].snippet.thumbnails.high.url)
        const card=document.createElement("div")
        card.className="cardLista"
        // card.setAttribute(`id`,`${array.items[i].snippet.title}`)
        card.innerHTML=`
            <div class="container-img">
                <img src=${array.items[i].snippet.thumbnails.medium.url} alt=${array.items[i].snippet.title} id="${array.items[i].snippet.resourceId.videoId}"
            </div>
            <div class="title-link">
                <a href="https://www.youtube.com/watch?v=${array.items[i].snippet.resourceId.videoId}">${array.items[i].snippet.title}
        `
        listContainer.appendChild(card)
    }

}


function videoFrame(){

}

const onClick=(event)=>{
    console.log(event.srcElement.id);
    player.loadVideoById(event.srcElement.id)

 }
window.addEventListener(`click`,onClick)

//////////////////////////////////////////////codigo de youtube////////////////////////////////////////////

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
      var player;
      function onYouTubeIframeAPIReady() {
        console.log("llame funcion de yt")
        console.log()
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'PkZNo7MFNFg',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
    

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 10000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
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