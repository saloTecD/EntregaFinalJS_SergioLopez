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

swal("El contenido musical presentado es de origen youtube y se apega a su uso protegido estricto")
//fetch a youtube

poplist.onclick=()=>{
    ytFetchlist("RDCLAK5uy_nmS3YoxSwVVQk9lEQJ0UX4ZCjXsW_psU8")
}

rocklist.onclick=()=>{
    ytFetchlist("PLG_Cg1s08J6_JgFLx_h99o9xMFBegJ1j6")
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
    .catch("La Lista de reproduccion no se encuentra disponible")
}

function listaAHtml(array){
    listContainer.innerHTML=""
    for(let i=0; i<array.items.length; i++){
        
        const card=document.createElement("div")
        card.className="cardLista"
        
        card.innerHTML=`
            <div class="container-img">
                <img src=${array.items[i].snippet.thumbnails.medium.url} alt=${array.items[i].snippet.title} id="${array.items[i].snippet.resourceId.videoId}"
            </div>
            <div class="title-link">
                <p>${array.items[i].snippet.title}</p>
        `
        listContainer.appendChild(card)
    }

}




const onClick=(event)=>{
    
    player.loadVideoById(event.srcElement.id)

 }

document.querySelector("#listContainer").addEventListener(`click`,onClick)

//////////////////////////////////////////////codigo de youtube iframe////////////////////////////////////////////

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      
      var player;
      function onYouTubeIframeAPIReady() {
        
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
    

      
      function onPlayerReady(event) {
        event.target.playVideo();
      }

     
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
