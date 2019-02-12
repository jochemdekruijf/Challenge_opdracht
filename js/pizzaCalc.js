var dataOrder = [];
var price = 5;
var globalPrice = 0;
var topping_prices = [1, 0.75, 0.75, 0.50, 1, 0.50]; //cheese,mozzarella mushroom, salami, pineapple, ham
var toppingBoolean = [false,false,false,false,false,false];
var added_toppings = [];
var t_Sauce = 1;
var base = 0;
var pizzaCount = 0;
var selectIngredient = false;
var discount = false;
var selectSizeBoolean = false;
var ordered = false;
var del_fee = false;
var sauceBoolean = false;
var size = false;


function showOrder() {

 for (var i = 0; i < dataOrder.length; i++) {

  var listItemOrder = document.createElement("LI"); // Create a <li> element
  var t = document.createTextNode(dataOrder[i]); // Create a text node
  listItemOrder.setAttribute("id", "Order" + i);
  listItemOrder.appendChild(t); // Append the text to <li>   
  document.getElementById("orderlist").appendChild(listItemOrder);
 }
}

function selectedSize(selected) {

  
     if(selected === "normal" && size === false){

       added_toppings.push(" formaat: normaal");
       document.getElementById('largeSizeB').style.display = 'none';
       document.getElementById('xlargeSizeB').style.display = 'none';
       selectSizeBoolean = true;
       size = true;
     }

      if(selected === "large" && size === false){

        added_toppings.push(" formaat: groot");
        document.getElementById('normalSizeB').style.display = 'none';
        document.getElementById('xlargeSizeB').style.display = 'none';
        price = price + 3;
        selectSizeBoolean = true;
        size = true;
     }

      if(selected === "xlarge" && size === false){

        added_toppings.push(" formaat: extra groot");
        document.getElementById('largeSizeB').style.display = 'none';
        document.getElementById('normalSizeB').style.display = 'none';
        price = price + 5;
        selectSizeBoolean = true;
        size = true;
     }

      if( selectSizeBoolean === false){

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
    }

    if (ingredient === "mozzarella" && toppingBoolean[1] === false) {

     price = price + topping_prices[1];
     added_toppings.push("mozzarella");
     toppingBoolean[1] = true;
     selectIngredient = true;
    }

    if (ingredient === "mushroom" && toppingBoolean[2] === false) {

     price = price + topping_prices[2];
     added_toppings.push("champignon");
     toppingBoolean[2] = true;
     selectIngredient = true;
    }

    if (ingredient === "salami" && toppingBoolean[3] === false) {

     price = price + topping_prices[3];
     added_toppings.push("salami");
     toppingBoolean[3] = true;
     selectIngredient = true;
    }

    if (ingredient === "pineapple" && toppingBoolean[4] === false) {

     price = price + topping_prices[4];
     added_toppings.push("ananas");
     toppingBoolean[4] = true;
     selectIngredient = true;
    }

    if (ingredient === "ham" && toppingBoolean[5] === false) {

     price = price + topping_prices[5];
     added_toppings.push("ham");
     toppingBoolean[5] = true;
     selectIngredient = true;

     }

     if (selectIngredient === false) {

       base++;
     }

 displayPrice();
 displayToppings();
}

function  Sauce(ingredient) {

  
     if(ingredient === "tomato" && sauceBoolean === false ){

       added_toppings.push("saus: tomatensaus");
       price = price + t_Sauce;
       document.getElementById('bodem').style.display = "none";
       document.getElementById('bodemS').style.display = "block";
       document.getElementById('noSauce').style.display = "none";
       selectSauceBoolean = true;
       sauceBoolean = true;
     }

      if(ingredient === "none" && sauceBoolean === false){

        added_toppings.push("saus: geen");
        document.getElementById('bodemS').style.display = 'none';
        document.getElementById('bodem').style.display = 'block';
        document.getElementById('tomatoS').style.display = 'none';
        selectSauceBoolean = true;
        sauceBoolean = true;
     }

      if( selectSauceBoolean === false){

        base++;

      } 
     
  displayToppings();
  displayPrice();
}


function displayPrice() {

 var number = price;
 var gPrice = globalPrice;
 document.getElementById("price_display").innerHTML = "€" + number;
 document.getElementById("orderlist").innerHTML = "€" + gPrice;

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
}


function order() {
 ordered = true;
 size = false;
 globalPrice = globalPrice + price;
 dataOrder.push(added_toppings);
 reset();
 displayPrice();
 displayToppings();
 showOrder();
}

  function payBy(method) {

    if (method === 'bank'  && discount === false && ordered === true) {

         discount = true;
         globalPrice = globalPrice - 0.50;
         document.getElementById('cash').style.display = 'none';
     }

    if (method ==='cash' && ordered === true) {

    document.getElementById("bank").style.display = "none";
   }

  displayPrice();
  showOrder();
  }

  function method(method) {
   
    if (method === 'deliver'  && del_fee === false && ordered === true) {

      del_fee = true;
      globalPrice = globalPrice + 4;
      document.getElementById('takeAway').style.display = 'none';
    }

    if (method ==='takeAway' && ordered === true) {

    document.getElementById("bank").style.display = "none";
    
   }
    displayPrice();
    showOrder();
  }

