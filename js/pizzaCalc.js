

var dataOrder = [];
var dataOrderT = ["Quattro Stagion","Romana","Frute di Mare","Tonno (e cipolla)"];

   var pizzaArrayCV = [
          "Margherita",
          "Marinara",
          "Quattro Formaggi",
          "Verdure / Vegetariana",
          "Carciofi",
          "Funghi"
          ];


  var pizzaArrayMeat = [
         "Quattro Stagioni",
          "Calzone",
          "Capricciosa",
          "Prosciutto",
          "Diavola / Piccante"
          ];    

  var pizzaArrayFish = [
         "Napoli",
          "Romana",
          "Tonno (e cipolla)",
          "Frute di Mare"
          ];
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
       
          function mouseOver (){


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

            // var imgI = document.createElement("img");

            // imgI.setAttribute("src", "images/info.png");
            // imgI.setAttribute("id", "imgI"+i);
            // imgI.setAttribute("height", "15");
            // imgI.setAttribute("width", "15");
            // imgI.setAttribute("alt", " info symbol");
            // document.getElementById("CV"+i).appendChild(imgI);
            
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

            //var imgI = document.createElement("img");

            // imgI.setAttribute("src", "images/info.png");
            // imgI.setAttribute("id", "imgI"+i);
            // imgI.setAttribute("height", "15");
            // imgI.setAttribute("width", "15");
            // imgI.setAttribute("alt", " info symbol");
            // document.getElementById("M"+i).appendChild(imgI);


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

          // var imgI = document.createElement("img");

          // imgI.setAttribute("src", "images/info.png");
          // imgI.setAttribute("id", "imgI"+i);
          // imgI.setAttribute("height", "15");
          // imgI.setAttribute("width", "15");
          // imgI.setAttribute("alt", " info symbol");
          // document.getElementById("F"+i).appendChild(imgI);


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

           for (var i = 0; i < dataOrderT.length; i++) {

          var listItemOrder = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(dataOrderT[i]);     // Create a text node
           listItemOrder.setAttribute("id", "Order"+i);
          listItemOrder.appendChild(t);                            // Append the text to <li>   
          document.getElementById("orderList").appendChild(listItemOrder);

          var imgMin = document.createElement("img");

          imgMin.setAttribute("src", "images/minus.png");
          imgMin.setAttribute("height", "17");
          imgMin.setAttribute("width", "17");
          imgMin.setAttribute("alt", "minus symbol");
          document.getElementById("Order"+i).appendChild(imgMin); 
           

          }
 

          }
      


