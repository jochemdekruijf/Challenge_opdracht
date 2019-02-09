

var dataOrder = [];
var dataOrderT = ["Quattro Stagion","Romana","Frute di Mare","Tonno (e cipolla)"];
var slices = 0;
var price = 7;
var globalPrice = 0;
var topping_prices = [0.75,0.75,0.50,1,0.50,0.75]; //cheese,mozzarella mushroom, salami, pineapple, ham, mozzarella
var added_toppings = [];

var p_Sauce = 1;
var pizzaArrayCV = [ "Margherita","Marinara","Quattro Formaggi","Verdure / Vegetariana","Carciofi", "Funghi"];
var pizzaArrayMeat = ["Quattro Stagioni","Calzone","Capricciosa","Prosciutto","Diavola / Piccante" ];          
var pizzaArrayFish = ["Napoli","Romana","Tonno (e cipolla)",  "Frute di Mare"];
var base = 0;
var discount = false;
var ordered = false;
var emptied = false;
var del_fee = false;
var addedSauce = false;
var size = false;
var pizzaList = {pizza:"Margherita", price:10};



                  
 var descript_CV = [
     "tomaat, mozzarella, basilicum",
      "tomaat, knoflook, olie en oregano (pas als de pizza uit de oven komt)",
      "gorgonzola, mozzarella, pecorino en taleggio. In Nederland wordt de pecorino en taleggio vaak vervangen door Parmezaanse kaas en gewone Hollandse (Goudse) kaas",
      "tomaat, mozzarella, paprika en (gegrilde) courgette en aubergine. Soms ook broccoli of spinazie.",
      "tomaat, mozzarella en artisjok",
      "tomaat, mozzarella en (verse) champignons"
      ];
 var descript_M = [
      "tomaat, mozzarella, ham, champignons, olijven, artisjokken (soms doperwten in plaats van artisjok)",
      "tomaat, mozzarella, champignons en ham.",
      "tomaat, mozzarella, artisjokken, zwarte olijven, ham en champignons.",
      "tomaat, mozzarella en prosciutto (let op: de rauwe ham pas na het bakken op de pizza leggen). Desgwenst ook rucola en Parmezaanse kaas.",
      "tomaat, mozzarella, pikante salami"
      ];

 var descriptions_F = [
     "tomaat, mozzarella, kappertjes en ansjovis",
      "tomaat, mozzarella, ansjovis en na het bakken oregano",
      "tomaat, mozzarella, tonijn (met of zonder ui)",
      "tomaat, mozzarella, vongole, garnalen, mosselen, inktvis, langoustine en peterselie (na het bakken van de pizza)"
      ];     
       
                function addMag (){
               ordered = true;
               globalPrice = globalPrice + pizzaList.price;
               dataOrder.push(pizzaList.pizza);
               displayPrice();
               showOrder();
               
               
             
           }

     
        function showPizzaCV () {

      for (var i = 0; i < pizzaArrayCV.length; i++) {
           
          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayCV[i]);    // Create a text node
          listItem.setAttribute("id", "CV"+i);
          listItem.appendChild(t);    
          document.getElementById("list_CV").appendChild(listItem);  

           var img = document.createElement("img");
            img.setAttribute("src", "images/plus_symbol.png");
            img.setAttribute("height", "17");
            img.setAttribute("width", "17");
            img.setAttribute("alt", "plus symbol");
            document.getElementById("CV"+i).appendChild(img);
            
            var divI = document.createElement("div");

            var text_info = document.createTextNode( descript_CV[i]); 

            divI.appendChild(text_info); 
            divI.setAttribute("id", "divICV"+i);
            divI.setAttribute("height", "100");
            divI.setAttribute("width", "100");
            divI.setAttribute("width", "100");
            divI.setAttribute("alt", " info symbol");
            document.getElementById("CV"+i).appendChild(divI);   



             }
            } 
        
      

          function showPizzaM () {

      for (var i = 0; i < pizzaArrayMeat.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayMeat[i]);     // Create a text node
          listItem.setAttribute("id", "M"+i);
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_M").appendChild(listItem);

            var img = document.createElement("img");

            img.setAttribute("src", "images/plus_symbol.png");
            img.setAttribute("height", "17");
            img.setAttribute("width", "17");
            img.setAttribute("alt", "plus symbol");
            document.getElementById("M"+i).appendChild(img);

             var divI = document.createElement("div");

            var text_info = document.createTextNode( descript_M[i]); 

            divI.appendChild(text_info); 
            divI.setAttribute("id", "divIM"+i);
            divI.setAttribute("height", "100");
            divI.setAttribute("width", "100");
            divI.setAttribute("width", "100");
            divI.setAttribute("alt", " info symbol");
            document.getElementById("M"+i).appendChild(divI);


             }
            } 
             
 
  
          function showPizzaF () {

      for (var i = 0; i < pizzaArrayFish.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayFish[i]);     // Create a text node
          listItem.setAttribute("id", "F"+i);
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_F").appendChild(listItem);     
            
          var img = document.createElement("img");

          img.setAttribute("src", "images/plus_symbol.png");
          img.setAttribute("height", "17");
          img.setAttribute("width", "17");
          img.setAttribute("alt", "plus symbol");
          document.getElementById("F"+i).appendChild(img); 


          var divI = document.createElement("div");

          var text_info = document.createTextNode( descriptions_F[i]); 

          divI.appendChild(text_info); 
          divI.setAttribute("id", "divIF"+i);
          divI.setAttribute("height", "100");
          divI.setAttribute("width", "100");
          divI.setAttribute("width", "100");
          divI.setAttribute("alt", " Info Div");
          document.getElementById("F"+i).appendChild(divI); 




        }
  }

          function showOrder() {
           // if(dataOrderT.length > 0){

           //  document.getElementById("orderList").innerHTML = "Bestelling is leeg"; 

           //  }else

           for (var i = 0; i < dataOrder.length; i++) {

          var listItemOrder = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(dataOrder[i]);     // Create a text node
          listItemOrder.setAttribute("id", "Order"+i);
          listItemOrder.appendChild(t);                            // Append the text to <li>   
          document.getElementById("orderlist").appendChild(listItemOrder);

          // var imgMin = document.createElement("img");

          // imgMin.setAttribute("src", "images/minus.png");
          // imgMin.setAttribute("height", "17");
          // imgMin.setAttribute("width", "17");
          // imgMin.setAttribute("alt", "minus symbol");
          // document.getElementById("Order"+i).appendChild(imgMin);            
           }
          }

           function normal(){
            if(size === false){
               size = true;
               added_toppings.push(" formaat = normal");
               document.getElementById('largeSizeB').style.display = 'none';
               document.getElementById('xlargeSizeB').style.display = 'none';
               displayToppings();
               displayPrice();
               base++; 
             }
                
             
           }

            function large(){

             if(size === false){
               size = true;
               price = price +5;
               added_toppings.push(" formaat = groot");
               document.getElementById('normalSizeB').style.display = 'none';
               document.getElementById('xlargeSizeB').style.display = 'none';
               displayToppings();
               displayPrice();
               base++;

             }
           }

            function xlarge(){

            if(size === false){
               size = true;
               price = price +7;
               added_toppings.push(" formaat = extra groot");
               document.getElementById('normalSizeB').style.display = 'none';
               document.getElementById('largeSizeB').style.display = 'none';
               displayToppings();
               displayPrice();
               base++;
             }  
             
           }

           function addCheese (){

               price = price + topping_prices[0];
               added_toppings.push("Kaas");
               displayPrice();
               displayToppings();
               base++;
         }

           function addMushroom (){

               price = price + topping_prices[1];
               added_toppings.push("Champignon");
               displayPrice();
               displayToppings();
               base++;  
             
           }

             function addMozzarella (){

               price = price + topping_prices[5];
               added_toppings.push("mozzarella");
               displayPrice();
               displayToppings();
               base++;  
             
           }

            function addSalami(){

               price = price + topping_prices[2];
               added_toppings.push("Salami");
               displayPrice();
               displayToppings();
               base++;  
             
           }

             function addPineapple (){

               price = price + topping_prices[3];
               added_toppings.push("Ananas");
               displayPrice();
               displayToppings();
               base++;  
             
           }
             function addHam(){

               price = price + topping_prices[4];
               added_toppings.push("Ham");
               displayPrice();
               displayToppings();
               base++;  
             
           }

           function addSauce (){
            if( addedSauce === false ){
               addedSauce = true;
               added_toppings.push("tomatensaus"); 
               document.getElementById('bodem').style.display = "none";
               document.getElementById('bodemS').style.display = "block";
               document.getElementById('tomato').style.display = "none";
               displayToppings();
               base++;   
               price = price + p_Sauce;
               displayPrice();
            }
           }

         function noSauce (){
          if (addedSauce ===false){
               added_toppings.push("geen saus");  
               document.getElementById('tomatoS').style.display = "none";
               displayToppings(); 
               base++
               }
           }


         function displayPrice(){
          
           var number = price;
           var gPrice = globalPrice;
           document.getElementById("price_display").innerHTML = "€" + number;
           document.getElementById("orderlist").innerHTML = "€" + gPrice;

         }

         function displayToppings(){
          // if(emptied === true){
          // price = price;
          // base = 0;
          // added_toppings = [];
          // }
         
          for (var i = base ; i < added_toppings.length; i++) {

          var Li = document.createElement("li");        // Create a <li> element

          var added_top = document.createTextNode(added_toppings[i] + ",");     // Create a text node
          //Li.setAttribute("id", "F"+i);
          Li.setAttribute('style', 'display:inline-block;');
          Li.appendChild(added_top);                            // Append the text to <li>   
          document.getElementById("toppings").appendChild(Li);
          }

       }

        function reset() {
          
         price = 7;
         base = 0;
         added_toppings = [];
         emptied = true;
         document.getElementById('bodem').style.display = "block";
         document.getElementById('bodemS').style.display = "none";
         document.getElementById('tomatoS').style.display = "inline-block";
         document.getElementById('tomato').style.display = "inline-block"; 
         document.getElementById('normalSizeB').style.display = 'inline-block';
         document.getElementById('largeSizeB').style.display = 'inline-block';
         document.getElementById('xlargeSizeB').style.display = 'inline-block';
         displayPrice();
         displayToppings();
         
     
      }

      function order () {
       ordered = true;
       size = false;
       globalPrice = globalPrice + price; 
       dataOrder.push(added_toppings);
       reset();
       displayPrice();
       displayToppings();
       showOrder();
      }

      function  payBank() {
        
   
      if (discount === false && ordered === true) {
        discount = true;
        globalPrice = globalPrice - 0.50;
        document.getElementById('cash').style.display = 'none';
        displayPrice();
        showOrder();
        }
        document.getElementById('cash').style.display = 'none';
        displayPrice();
        showOrder();
       
      }

       function  payCash() {
        showOrder();
       if(ordered=== true) {
       document.getElementById("bank").style.display = "none";
       displayPrice();
       
       }

      }

      function  deliver() {
        
      if (del_fee === false && ordered === true) {

        Del_fee = true;
        globalPrice = globalPrice + 4;
        document.getElementById('takeAway').style.display = 'none';
        displayPrice();
        showOrder();

        }
        document.getElementById('takeAway').style.display = 'none';
        displayPrice();
        showOrder();
       
      }


     function  takeAway() {
        
      document.getElementById("deliver").style.display = "none";
      displayPrice();
      showOrder();
      }
        
 


