

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
          "Prosciutto",
          "Frute di Mare"
          ];    
       
       var orderList = [];


        function showPizzaCV () {

      for (var i = 0; i < pizzaArrayCV.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayCV[i]);     // Create a text node
          listItem.setAttribute("id", "CV"+i);
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_CV").appendChild(listItem);     
            

        }
  }

          function showPizzaM () {

      for (var i = 0; i < pizzaArrayMeat.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayMeat[i]);     // Create a text node
          listItem.setAttribute("id", "M"+i);
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_M").appendChild(listItem);     
            

        }
  }
          function showPizzaF () {

      for (var i = 0; i < pizzaArrayFish.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(pizzaArrayFish[i]);     // Create a text node
          listItem.setAttribute("id", "F"+i);
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_F").appendChild(listItem);     
            

        }
  }

          function showOrder() {
           
             for (var i = 0; i < orderList.length; i++) {

          var listItem = document.createElement("LI");        // Create a <li> element
          var t = document.createTextNode(orderList[i]);     // Create a text node
          listItem.appendChild(t);                            // Append the text to <li>   
          document.getElementById("list_order").appendChild(listItem);     

           }

          }
      
      // var link_CV = document.getElementById("list_CV");

      //   attachEvent(link_CV, "click", EventHandler);

      //   function attachEvent(element, type, handler) {
      //       if (element.addEventListener) element.addEventListener(type, handler, false);
      //       else element.attachEvent("on"+type, handler);
      //   }

      //   function EventHandler(e) {
      //       console.log(e.target.id);
      //   }

