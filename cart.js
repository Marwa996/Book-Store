function display(){
    var cartItems=localStorage.getItem("Book in Cart");
    cartItems=JSON.parse(cartItems);

    var container=document.getElementsByClassName("containerCart");

    if(cartItems && container){

        Object.keys(cartItems).map(item => {

       var div = document.createElement("div");
       var imgs =document.createElement("img");
       var p = document.createElement("p");
       var sp = document.createElement("span");
    
        imgs.src= cartItems[item].image;
        p.innerHTML=cartItems[item].title;
        sp.innerHTML=cartItems[item].price;
       
        document.body.appendChild(div);
        div.innerHTML+=imgs;
        div.innerHTML+=p;
        div.innerHTML+=sp;
;
        document.body.appendChild(p);
        document.body.appendChild(imgs);
        });
        
    }
}

display()




    //    container.innerHTML='';
    //     Object.keys(cartItems).map(item => {
    //         console.log("hello");
    //         console.log(cartItems[item].image);
    //     container.innerHTML+= `

    //         <div class="product">
    //             <ion-icon name="close-circle-outline"></ion-icon>
    //             <img src='${cartItems[item].image}'>

                
    //             <span>${item.title}</span>
    //             </div>
    //         `;
    //    });



       /* document.getElementsByClassName("containerCart").innerHTML=output; */
    

display();