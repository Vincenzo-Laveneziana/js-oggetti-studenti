$(document).ready(function (){
  
  //Referenze
  var input = $(".mess-input");
  var btn = $(".mess-btn");
  var chat = $(".chat");


  //handlebars
  var source = $("#message-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);



  //al click inserisco un nuovo msg
  btn.click(function (){
  
    invia();

    setTimeout(risposta, 1000);
  })


  function invia (){
    var msg = input.val().trim();
    //console.log(msg);
    
    var data = {
      testo: msg,
      ora: "15:39",
      userClass: "sent"
    }

    var html = template(data)
    //console.log(html);

    chat.append(html)
    
    input .val("")
  }

  
  function risposta(){
    var data = {
      testo: "yes",
      ora: "15:39",
      userClass: "received"
    }
  
    var html = template(data)
      //console.log(html);
  
    chat.append(html)

  }


});//fine ready


