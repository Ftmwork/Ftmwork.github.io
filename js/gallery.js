function upDate(previewPic){
    const images =document.getElementById("image");
    images.style.backgroundImage="url('" + previewPic.src + "')";
    images.textContent=previewPic.alt;
    console.log("focus activé");
}

function unDo(){
    const images=document.getElementById("image")
    images.style.backgroundImage="url('')";
    images.textContent="Hover over an image below to display here.";
     
}

let tabinex=[]

function aleatoire(){
    my_images = document.querySelectorAll(".preview")
    for ( let i=0; i<my_images.length; i++){
    my_images[i].setAttribute("tabindex",0)
};
};
console.log(aleatoire())


