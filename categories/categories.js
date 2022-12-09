function displayCategory(){
console.log("SGFd")
var xhr=new XMLHttpRequest();

xhr.open("get","https://api.itbook.store/1.0/search/mongodb",true);
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
            <div class="product">
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
}
////////////////////////////////////////////////////////////

function displayCategory2(){
    var xhr=new XMLHttpRequest();

xhr.open("get","https://api.itbook.store/1.0/search/algorithms",true);
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
            <div class="product">
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
}