function WebSocketTest() {
      if ("WebSocket" in window) {
         console.log(location.host);
         var ws = new ReconnectingWebSocket('ws://' + location.host + '/');
         ws.onopen = function() {
             console.log("Open");
         };

         ws.onmessage = function (evt) {
             document.getElementById("img").src  = "data:image/jpg;base64," + evt.data;
         };

         ws.onclose = function() {
            document.getElementById("img").src  = "img/iphone.png";
         };
      } else {
         alert("WebSocket NOT supported by your Browser!");
      }
   }
