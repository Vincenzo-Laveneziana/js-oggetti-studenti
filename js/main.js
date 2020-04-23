$(document).ready(function (){
  //console.log("ok");
  

  var studente = {

    nome : "Vincenzo",
    cognome : "Laveneziana",
    età : "26"
  }

  console.log(studente);
  
  for (var key in studente){
    console.log(key + ": " + studente[key])
  }



});//fine ready
