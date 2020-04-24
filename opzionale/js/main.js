$(document).ready(function (){
  
  //Referenze
  var input = $(".mess-input");
  var btn = $(".mess-btn");
  var chat = $(".chat");
  var msg = input.val().trim();


  //handlebars
  var source = $("#message-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);


  //messaggi sample memorizzati in unarraycontenente       object
  var msgSample = [
    {
      userClass: "sent",
      testo: "Ciao",
      ora: "15:95"
    },
    {
      userClass: "received",
      testo: "Riciao",
      ora: "15:96"
    },
    {
      userClass: "sent",
      testo: "Riciao del ciao",
      ora: "15:96"
    }
  ];


  //ins
  for (var i = 0; i < msgSample.length; i++){
    console.log(msgSample[i]);

    var msgPronti = template(msgSample[i]);
    
    chat.append(msgPronti);
  }


  //alla pressione del tasto invio
  input.keyup(function(event){
    msg = input.val().trim();

    if(event.which == 13){
      if(msg !== ""){
        invia();
        setTimeout(risposta, 1000);
      };
      
    };

  });

  //al click inserisco un nuovo msg
  btn.click(function (){
    msg = input.val().trim();

    if(msg !== ""){
      invia();
      setTimeout(risposta, 1000);
    };
    
  });


  function invia (){
    msg = input.val().trim();
    //console.log(msg);
    
    var data = {
      testo: msg,
      ora: "15:39",
      userClass: "sent"
    };

    var html = template(data)
    //console.log(html);

    chat.append(html);
    
    input .val("");
  };

  function risposta(){
    var data = {
      testo: "yes",
      ora: "15:39",
      userClass: "received"
    };
  
    var html = template(data);
      //console.log(html);
  
    chat.append(html);

  };


});//fine ready


