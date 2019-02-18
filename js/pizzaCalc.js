var dataOrder = []; // bestelling array, houdt de bestelling bij
var price = 5; // houdt de prijs van zelfgemaakte pizza bij
var globalPrice = 0; // globale bestelling prijs
var topping_prices = [1, 0.75, 0.75, 0.50, 1, 0.50]; //cheese,mozzarella mushroom, salami, pineapple, ham
var toppingBoolean = [false, false, false, false, false, false]; //booleans voor de ingredienten
var added_toppings = []; // array waar de geselcteerde toppings in worden gezet
var base = 0; //houdt het aantal toppings bij 
var selectIngredient = false; //controleert of je een ingrediënt geselecteerd hebt
var ingredientCheck = false;  //controleert in de order functie of je iets geselecteerd had
var discount = false; //controleert of de korting al gegeven is
var selectSizeBoolean = false; // controleert of de korting al gegeven is
var ordered = false; //controleert of je iets besteld hebt
var del_fee = false; // deliver fee, controleert of je de deliver fee al bij de totale prijs(globalPrice) opgeteld is
var sauceBoolean = false; //controleert of er een saus geselecteerd is 
var size = false; // controleer of je een formaat gekozen hebt


            //---algemeen---\\

 //display and update the price
function displayPrice() {

    var number = price;
    var gPrice = globalPrice;
    document.getElementById("price_display").innerHTML = "€" + number;
    document.getElementById("orderlist").innerHTML = "€" + gPrice;
    console.log('price updated');
}
 //alert notification function by argument
function alertNotification(alertArgument) {

    if (alertArgument === 'menuAlert') {

        console.log('show notification: menu');
        document.getElementById('fromMenu').style.display = "block";
        setTimeout(function() {
        document.getElementById('fromMenu').style.display = "none";
        }, 900);
    }
    if (alertArgument === 'added2order') {

        console.log('show notification: create own');
        document.getElementById('added2order').style.display = "block";
        setTimeout(function() {
        document.getElementById('added2order').style.display = "none";
        }, 900);
    }
    if (alertArgument === 'error') {

        console.log('show notification: create own');
        document.getElementById('added2orderError').style.display = "block";
        setTimeout(function() {
        document.getElementById('added2orderError').style.display = "none";
        }, 2000);
    }

}

                //---menu---\\

  // voegt de pizza toe aan de bestelling
function addFromMenu(pizza) {

    if (pizza === "margerita") {

        dataOrder.push("margerita");
        globalPrice = globalPrice + 10.50;
        ordered = true;
        alertNotification('menuAlert');
        console.log('magherita from menu added to order');

    }

    if (pizza === "hawaii") {

        dataOrder.push("pizza Hawaii");
        globalPrice = globalPrice + 11.50;
        ordered = true;
        alertNotification('menuAlert');
        console.log('Hawaii from menu added to order');

    }

    if (pizza === "salami") {

        dataOrder.push("salami");
        globalPrice = globalPrice + 10.50;
        ordered = true;
        alertNotification('menuAlert');
        console.log('Salami from menu added to order');

    }

    if (pizza === "funghi") {

        dataOrder.push("funghi");
        globalPrice = globalPrice + 13.50;
        ordered = true;
        alertNotification('menuAlert');
        console.log('Funghi from menu added to order');
    }

    if (pizza === "quattro-formaggi") {

        dataOrder.push("quattro-formaggi");
        globalPrice = globalPrice + 14.50;
        ordered = true;
        alertNotification('menuAlert');
        console.log('quattro formaggi from menu added to order');
    }

    if (pizza === "vegetarian") {

        dataOrder.push("vegetarian");
        globalPrice = globalPrice + 10;
        ordered = true;
        alertNotification('menuAlert');
        console.log('Vegetarian from menu added to order');

    }
    displayPrice();
    showOrder();

}
         //---zelgemaakte pizza---\\
 // functie bepaalt de pizza grootte
function selectedSize(selected) {


    if (selected === "normal" && size === false) {

        added_toppings.push(" formaat: normaal");
        document.getElementById('largeSizeB').style.display = 'none';
        document.getElementById('xlargeSizeB').style.display = 'none';
        selectSizeBoolean = true;
        size = true;
        console.log('Selected size: normal  added to  added_toppings');
    }

    if (selected === "large" && size === false) {

        added_toppings.push(" formaat: groot");
        document.getElementById('normalSizeB').style.display = 'none';
        document.getElementById('xlargeSizeB').style.display = 'none';
        price = price + 3;
        selectSizeBoolean = true;
        size = true;
        console.log('Selected size: large  added to  added_toppings');
    }

    if (selected === "xlarge" && size === false) {

        added_toppings.push(" formaat: extra groot");
        document.getElementById('largeSizeB').style.display = 'none';
        document.getElementById('normalSizeB').style.display = 'none';
        price = price + 5;
        selectSizeBoolean = true;
        size = true;
        console.log('Selected size: extra large  added to  added_toppings');
    }

    if (selectSizeBoolean === false) {

        base++;

    }
    displayToppings();
    displayPrice();
}

 // bepaalt welke saus of geen saus
function Sauce(sauce) {


    if (sauce === "tomato" && sauceBoolean === false) {

        added_toppings.push("saus: tomatensaus");
        price = price + 1.50;
        document.getElementById('bodem').style.display = "none";
        document.getElementById('bodemS').style.display = "block";
        document.getElementById('noSauce').style.display = "none";
        selectSauceBoolean = true;
        sauceBoolean = true;
        ingredientCheck = true;
        console.log('Selected sauce: no sauce added to  added_toppings');
    }

    if (sauce === "none" && sauceBoolean === false) {

        added_toppings.push("saus: geen");
        document.getElementById('bodemS').style.display = 'none';
        document.getElementById('bodem').style.display = 'block';
        document.getElementById('tomatoS').style.display = 'none';
        selectSauceBoolean = true;
        ingredientCheck = true;
        sauceBoolean = true;
        console.log('Selected sauce: tomato sauce added to  added_toppings');
    }

    if (selectSauceBoolean === false) {

        base++;

    }

    displayToppings();
    displayPrice();
}
 // voegt de ingredienten toe aan de toppings array
function addIngredient(ingredient) {

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
 // update de toppings lijst
function displayToppings() {

    document.getElementById("toppings").innerHTML = "gekozen beleg: ";

    for (var i = base; i < added_toppings.length; i++) {

        var Li = document.createElement("li"); // Create a <li> element

        var added_top = document.createTextNode(added_toppings[i] + ","); // Create a text node
        Li.setAttribute('style', 'display:inline-block;');
        Li.appendChild(added_top); // Append the text to <li>   
        document.getElementById("toppings").appendChild(Li);
    }
    console.log('toppings updated');
}
// reset de zelfgemaakte pizza interface and variables
function reset() {

    price = 5;
    base = 0;
    toppingBoolean = [false, false, false, false, false, false];
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

        //---bestelling---\\
     // update de bestelling   
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
 //bevestigt de bestelling 
function order() {
    if (ingredientCheck === true) {
        ordered = true;
        globalPrice = globalPrice + price;
        dataOrder.push(added_toppings);
        reset();
        displayPrice();
        displayToppings();
        showOrder();
        alertNotification('added2order');
        console.log('order added to dataOrder');
    } else {

        alertNotification('error');
    }

}
 // bepaalt de betaalmethode
function payBy(method) {

    if (method === 'bank' && discount === false && ordered === true) {

        discount = true;
        globalPrice = globalPrice - 0.50;
        document.getElementById('cash').style.display = 'none';
        console.log('pay by bank selected');
    }

    if (method === 'cash' && ordered === true) {

        document.getElementById("bank").style.display = "none";
        console.log('pay by cash selected');
    }

    displayPrice();
    showOrder();
}
 // bepaalt of je het wilt ophalen of laten bezorgen
function method(method) {

    if (method === 'deliver' && del_fee === false && ordered === true) {

        del_fee = true;
        globalPrice = globalPrice + 4;
        document.getElementById('takeAway').style.display = 'none';
        console.log(' selected method  is delivery');
    }

    if (method === 'takeaway' && ordered === true) {

        document.getElementById("deliver").style.display = "none";
        console.log(' selected method  is takeaway');

    }
    displayPrice();
    showOrder();
}