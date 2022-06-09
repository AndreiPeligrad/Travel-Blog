
let imaginiGalerie =document.querySelectorAll(".imagini-galerie");
 let ultimaImagineDeschisa;
 let latimeFereastra= window.innerWidth;


 if(imaginiGalerie){
    imaginiGalerie.forEach(function(imagine, index){
        imagine.onclick=function(){
            let getElementCss=window.getComputedStyle(imagine);
            let imagineaMare1 = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = imagineaMare1.split("/poze/");
            let imagineaMare = getImgUrlPos[1].replace('")',' ');
        


             getLatestOpenedImg= index + 1 ;

            let container=document.body;
            let fereastraImagine=document.createElement("div");
            container.appendChild(fereastraImagine);
            fereastraImagine.setAttribute("class", "fereastra-img");
            fereastraImagine.setAttribute("onclick", "inchideImg()");

            let imgNoua=document.createElement("img");
            fereastraImagine.appendChild(imgNoua);
            imgNoua.setAttribute("src", "poze/" + imagineaMare);
        }
    });
 }



function inchideImg(){
    document.querySelector(".fereastra-img").remove();
}























