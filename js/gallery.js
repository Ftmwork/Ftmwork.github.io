function upDate(previewPic){
    const images =document.getElementById("image");
    images.style.backgroundImage="url('" + previewPic.src + "')";
    images.textContent=previewPic.alt;
    
}

	function unDo(){
        const images=document.getElementById("image")
        images.style.backgroundImage="url('')";
        images.textContent="Hover over an image below to display here.";
     
	}
