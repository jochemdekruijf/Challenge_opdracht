var dataOrder = [];
var price = 5;
var globalPrice = 0;
var topping_prices = [1, 0.75, 0.75, 0.50, 1, 0.50]; //cheese,mozzarella mushroom, salami, pineapple, ham
var toppingBoolean = [false,false,false,false,false,false];
var added_toppings = [];
var base = 0;
var pizzaCount = 0;
var selectIngredient = false;
var discount = false;
var selectSizeBoolean = false;
var ordered = false;
var del_fee = false;
var sauceBoolean = false;
var size = false;
var ingredientCheck = false;



function showOrder() {

 for (var i = 0; i < dataOrder.length; i++) {

  var listItemOrder = document.createElement("LI"); // Create a <li> element
  var t = document.createTextNode(dataOrder[i]); // Create a text node
  listItemOrder.setAttribute("id", "Order" + i);
  listItemOrder.appendChild(t); // Append the text to <li>   
  document.getElementById("orderlist").appendChild(listItemOrder);
  console.log('order updated');
 }
}

function addFromMenu(pizza){
 
     if(pizza === "margerita"){

       dataOrder.push("margerita");
       globalPrice = globalPrice + 10.50;
       ordered = true;
       alertNotification('menuAlert');
       console.log('magherita from menu added to order');
       
     }

      if(pizza === "hawaii"){

       dataOrder.push("pizza Hawaii");
       globalPrice = globalPrice + 11.50;
       ordered = true;
       alertNotification('menuAlert');
       console.log('Hawaii from menu added to order');

     }

      if(pizza === "salami"){

       dataOrder.push("salami");
       globalPrice = globalPrice + 10.50;
       ordered = true;
       alertNotification('menuAlert');
       console.log('Salami from menu added to order');

     }

      if(pizza === "funghi"){

       dataOrder.push("funghi");
       globalPrice = globalPrice + 13.50;
       ordered = true;
       alertNotification('menuAlert');
       console.log('Funghi from menu added to order');
     }

      if(pizza === "quattro-formaggi"){
 
       dataOrder.push("quattro-formaggi");
       globalPrice = globalPrice + 14.50;
       ordered = true;
       alertNotification('menuAlert');
       console.log('quattro formaggi from menu added to order');
     }

      if(pizza === "vegetarian"){

       dataOrder.push("vegetarian");
       globalPrice = globalPrice + 10;
       ordered = true;
       alertNotification('menuAlert');
       console.log('Vegetarian from menu added to order');

     }
     displayPrice();
     showOrder();

}





function selectedSize(selected) {

  
     if(selected === "normal" && size === false){

       added_toppings.push(" formaat: normaal");
       document.getElementById('largeSizeB').style.display = 'none';
       document.getElementById('xlargeSizeB').style.display = 'none';
       selectSizeBoolean = true;
       size = true;
       console.log('Selected size: normal  added to  added_toppings');
     }

      if(selected === "large" && size === false){

        added_toppings.push(" formaat: groot");
        document.getElementById('normalSizeB').style.display = 'none';
        document.getElementById('xlargeSizeB').style.display = 'none';
        price = price + 3;
        selectSizeBoolean = true;
        size = true;
        console.log('Selected size: large  added to  added_toppings');
     }

      if(selected === "xlarge" && size === false){

        added_toppings.push(" formaat: extra groot");
        document.getElementById('largeSizeB').style.display = 'none';
        document.getElementById('normalSizeB').style.display = 'none';
        price = price + 5;
        selectSizeBoolean = true;
        size = true;
        console.log('Selected size: extra large  added to  added_toppings');
     }

      if( selectSizeBoolean === false){

        base++;
        
      }  
  displayToppings();
  displayPrice();
}

function  Sauce(ingredient) {

  
     if(ingredient === "tomato" && sauceBoolean === false ){

       added_toppings.push("saus: tomatensaus");
       price = price + 1.50;
       document.getElementById('bodem').style.display = "none";
       document.getElementById('bodemS').style.display = "block";
       document.getElementById('noSauce').style.display = "none";
       selectSauceBoolean = true;
       sauceBoolean = true;
       console.log('Selected sauce: no sauce added to  added_toppings');
     }

      if(ingredient === "none" && sauceBoolean === false){

        added_toppings.push("saus: geen");
        document.getElementById('bodemS').style.display = 'none';
        document.getElementById('bodem').style.display = 'block';
        document.getElementById('tomatoS').style.display = 'none';
        selectSauceBoolean = true;
        sauceBoolean = true;
        console.log('Selected sauce: tomato sauce added to  added_toppings');
     }

      if( selectSauceBoolean === false){

        base++;

      } 
     
  displayToppings();
  displayPrice();
}

 function addIngredient(ingredient){

    if (ingredient === "cheese" && toppingBoolean[0] === false) {

     price = price + topping_prices[0];
     added_toppings.push("Kaas");
     toppingBoolean[0] = true;
     selectIngredient = true;
     ingredientCheck = true;
      console.log('Selected ingredient: cheese added to  added_toppings');
    }

    if (ingredient === "mozzarella" && toppingBoolean[1] === false) {

     price = price + topping_prices[1];
     added_toppings.push("mozzarella");
     toppingBoolean[1] = true;
     selectIngredient = true;
     ingredientCheck = true;
     console.log('Selected ingredient: mozzarella added to  added_toppings');
    }

    if (ingredient === "mushroom" && toppingBoolean[2] === false) {

     price = price + topping_prices[2];
     added_toppings.push("champignon");
     toppingBoolean[2] = true;
     selectIngredient = true;
     ingredientCheck = true;
     console.log('Selected ingredient: mushroom added to  added_toppings');
    }

    if (ingredient === "salami" && toppingBoolean[3] === false) {

     price = price + topping_prices[3];
     added_toppings.push("salami");
     toppingBoolean[3] = true;
     selectIngredient = true;
     ingredientCheck = true;
     console.log('Selected ingredient: salami added to  added_toppings');
    }

    if (ingredient === "pineapple" && toppingBoolean[4] === false) {

     price = price + topping_prices[4];
     added_toppings.push("ananas");
     toppingBoolean[4] = true;
     selectIngredient = true;
     ingredientCheck = true;
     console.log('Selected ingredient: pineapple added to  added_toppings');
    }

    if (ingredient === "ham" && toppingBoolean[5] === false) {

     price = price + topping_prices[5];
     added_toppings.push("ham");
     toppingBoolean[5] = true;
     selectIngredient = true;
     ingredientCheck = true;
     console.log('Selected ingredient: ham added to  added_toppings');

     }

     if (selectIngredient === false) {

       base++;
     }

 displayPrice();
 displayToppings();
}

  function displayPrice() {

   var number = price;
   var gPrice = globalPrice;
   document.getElementById("price_display").innerHTML = "€" + number;
   document.getElementById("orderlist").innerHTML = "€" + gPrice;
   console.log('price updated');
  }

  function displayToppings() {

    document.getElementById("toppings").innerHTML = "gekozen beleg: ";

   for (var i = base; i < added_toppings.length; i++) {

    var Li = document.createElement("li"); // Create a <li> element

    var added_top = document.createTextNode(added_toppings[i] + ","); // Create a text node
    //Li.setAttribute("id", "F"+i);
    Li.setAttribute('style', 'display:inline-block;');
    Li.appendChild(added_top); // Append the text to <li>   
    document.getElementById("toppings").appendChild(Li);
   }
    console.log('toppings updated');
  }

  function reset() {
   
   price = 5;
   base = 0;
   toppingBoolean = [false,false,false,false,false,false];
   selectSizeBoolean = false;
   size = false;
   selectIngredient = false;
   sauceBoolean = false;
   selectSauceBoolean = false;
   ingredientCheck = false;
   added_toppings = [];
   document.getElementById('bodem').style.display = "block";
   document.getElementById('bodemS').style.display = "none";
   document.getElementById('tomatoS').style.display = "inline-block";
   document.getElementById('noSauce').style.display = "inline-block";
   document.getElementById('normalSizeB').style.display = 'inline-block';
   document.getElementById('largeSizeB').style.display = 'inline-block';
   document.getElementById('xlargeSizeB').style.display = 'inline-block';
   displayPrice();
   displayToppings();
   console.log('create Own has been reset');
  }


  function order() {
   if (ingredientCheck === true){
   ordered = true;
   globalPrice = globalPrice + price;
   dataOrder.push(added_toppings);
   reset();
   displayPrice();
   displayToppings();
   showOrder();
   alertNotification('added2order');
   console.log('order added to dataOrder');
  }else{
    
    alert('voeg beleg toe');
  }

 };

  function payBy(method) {

    if (method === 'bank'  && discount === false && ordered === true) {

         discount = true;
         globalPrice = globalPrice - 0.50;
         document.getElementById('cash').style.display = 'none';
         console.log('pay by bank selected');
     }

    if (method ==='cash' && ordered === true) {

    document.getElementById("bank").style.display = "none";
    console.log('pay by cash selected');
   }

  displayPrice();
  showOrder();
  }

  function method(method) {
   
    if (method === 'deliver'  && del_fee === false && ordered === true) {

      del_fee = true;
      globalPrice = globalPrice + 4;
      document.getElementById('takeAway').style.display = 'none';
      console.log(' selected method  is delivery');
    }

    if (method ==='takeaway' && ordered === true) {

    document.getElementById("bank").style.display = "none";
    console.log(' selected method  is takeaway');

   }
    displayPrice();
    showOrder();
  }

  function alertNotification(alertArgument) {

    if (alertArgument === 'menuAlert') {

      console.log('show notification: menu');
      document.getElementById('fromMenu').style.display = "block";
      setTimeout(function(){ document.getElementById('fromMenu').style.display = "none"; }, 900);
   }
       if (alertArgument === 'added2order') {

      console.log('show notification: create own');
      document.getElementById('added2order').style.display = "block";
      setTimeout(function(){ document.getElementById('added2order').style.display = "none"; }, 900);
   }

}



  //
