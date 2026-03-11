const menu = {
    pizza :[ 
        {nom:"Diavola", prix: 12.50},
        {nom:"Mexicaine" , prix: 13.00},
        {nom:"Inferno au Chorizo", prix: 14.30},
        {nom:"Calabria à la Nduja", prix: 14.50},
        {nom:"Poulet Buffalo", prix: 12.30},
        {nom:"Veggie Arrabiata", prix: 15.00},
        {nom:"Jalapeño & Cream", prix: 15.50},
        {nom:"Curry de Légumes", prix: 14.00},
        {nom:"Thaï Spicy", prix: 12.50},
        {nom:"Quatre Fromages du Diable", prix: 13.80},
    ],

    side: [
        {nom:"Bâtonnets de mozzarella avec sauce marinara épicée", prix: 3.50}, 
        {nom:"Salade de chou crémeuse",prix: 4.00},
        {nom:"Buffalo Wings", prix: 3.50},
        {nom:"Garlic Bread", prix: 5.00},
        {nom:"Frites de patates douces avec mayonnaise au sriracha", prix: 6.00}
    ],

    delivery :["12h30", "13h00", "13h45", "15h00","17h30", "20h","21h30"]

};


/*-------Récupération de la commande--------------*/ 
let saved = localStorage.getItem("order");
let order = saved ? JSON.parse(saved) : {
   pizza: null,
   side: null,
   delivery: null
};


/*--------COMMANDE PAGE 2--------------*/

const pizzaItems = document.querySelectorAll(".Pizza li");
const sideItems = document.querySelectorAll(".Side li");

/**---------------PIZZA--------------*/
if(pizzaItems.length>0){
    pizzaItems.forEach(item => {
    item.addEventListener("click",function() {
        order.pizza=item.dataset.nom;
        pizzaItems.forEach(i=>i.classList.remove("selected"));
        item.classList.add("selected");
        });
    });
}

    
/*-------------SIDE-----------------*/
if(sideItems.length>0){
    sideItems.forEach(item=>{
    item.addEventListener("click", function(){
        order.side=item.dataset.nom; /*Enregistrement du choix grâce à l'lément cachée dans HTML via data-nom*/
        sideItems.forEach(i=>i.classList.remove("selected")); /**On retire la classe CSS "selected" de tous les éléments */
        item.classList.add("selected"); /**L'ajout de cette classe permet de styliser cette selection */
        });
    });
}

const boutonPage2 = document.getElementById("valider_p2");
if(boutonPage2){
    boutonPage2.addEventListener("click",function(){
        if (!order.pizza || !order.side) {
            alert("Veuillez choisir une pizza et un accompagnement");
            return;
        }
        localStorage.setItem("order", JSON.stringify(order));
        window.location="../page_3/index.html";

    });
}

/*--------COMMANDE PAGE 3--------------*/
const deliveryItems= document.querySelectorAll(".Delivery li");

if(deliveryItems.length>0){
    deliveryItems.forEach(item =>{
        item.addEventListener("click",function(){
          order.delivery=item.textContent;  
          deliveryItems.forEach(i => i.classList.remove("selected"));
            item.classList.add("selected");
        });
        
    })

}

/**------BOUTON 3 HORAIRE--------------- */

const boutonPage3=document.getElementById("confirmer_p3");

if(boutonPage3){
    boutonPage3.addEventListener("click", function(){
        if(!order.delivery){
        alert("Veuillez choisir une horaire");
        return;
    }
    
    const fenetre=document.getElementById("fenetreConfirmation");
    const recap =document.getElementById("recap");
    if (fenetre&&recap){
        fenetre.classList.remove('hidden');
        recap.innerHTML=
        "Pizza : "+order.pizza +
        "| Accompagnement : "+order.side +
        "| Horaire : "+ order.delivery;

    }
 });

}




const boutonYes=document.getElementById("Yes");
if(boutonYes){
    
  boutonYes.addEventListener("click",function(){

    alert("Félicitation ! Votre commande a été validé !");
    localStorage.removeItem("order");
    window.location.href="../index.html";
    
  });
}


const boutonNo=document.getElementById("No")

if (boutonNo) {
  boutonNo.addEventListener("click", function(){
     localStorage.removeItem("order");
     window.location.href="../page_2/index.html";
  }); 

}



