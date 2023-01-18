










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