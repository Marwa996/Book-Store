 cartIcon();
var arr=[];

//getting data

 var xhr=new XMLHttpRequest();

xhr.open("get","https://api.itbook.store/1.0/new",true);
xhr.send();

xhr.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        
        var products = JSON.parse(this.responseText);
      
            var output="";

            for(var item of products.books){
           
            item.inCart=0;
            var priceNumber= item.price.replace("$","");;
            item.intPrice=priceNumber;

            var itemSTR=JSON.stringify(item);
       
            output+= `        
            <div class="product" >
                <img class="image" src="${item.image}">
                <h1 class="title">${item.title}</h1>
                <h1 class="price">${item.price}</h1>
                <button class="cart" onclick='saveInCart(${itemSTR})'>Add to Cart </button>
            </div>
         `;
         
        }

        //displaying the data in the home page
        document.getElementById("container").innerHTML=output;
        
    }
}

// function window(){
//     window.open("https://www.linkedin.com/analytics/profile-views/","_blank","width=400,height=400");
// }



//we used settimeout so that the created elements have time to be read by js
//adding the click function to the add to cart button 
// setTimeout(() => {
//         var carts=document.getElementsByClassName("cart");
//         for(var i=0;i<carts.length;i++){
//             carts[i].addEventListener("click",()=>{
//                 saveInCart(arr[i]);
//             })}
//         },700);


//event of licking the add to cart button
//saving items count in the local storage and cart icon

function saveInCart(item){
    
    var itemsNumber=localStorage.getItem("number");
    itemsNumber=parseInt(itemsNumber);

    if(itemsNumber){
        localStorage.setItem('number',itemsNumber+1);
        document.querySelector(".icon").textContent=itemsNumber+1;
    }else{
        localStorage.setItem("number",1);
        document.querySelector(".icon").textContent=1;
    }
    saveItems(item); 
    getTotal(item); 
}


function saveItems(item){
    var cartItems=localStorage.getItem("Book in Cart");
    cartItems=JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[item.title] == undefined){
            cartItems={
                ...cartItems,
                [item.title]:item
            }
        }
        cartItems[item.title].inCart += 1;
    }else{
        item.inCart=1;
        cartItems={
            [item.title]:item
        }
    }
    localStorage.setItem("Book in Cart",JSON.stringify(cartItems));
    
    
}
//when we reload the page, we get the number of items from the local storage and
//assign it to the icon so that the cart is updated with the reload
//then we call the function at the beginning of the file to be displayed with reload

function cartIcon(){
    var itemsNumber=localStorage.getItem("number");
    if(itemsNumber){
        document.querySelector(".icon").textContent=itemsNumber;
    }else{
        document.querySelector(".icon").textContent=0;
    }
}

function getTotal(item){
    var cartCost=localStorage.getItem("total Cost")
    
    if(cartCost != null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("total Cost",cartCost+parseFloat(item.intPrice));
    }else{
        localStorage.setItem("total Cost",item.intPrice);
    }
    
}

