$(document).ready(function () {
  
/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso.
Stampare a schermo la bici con peso minore.
*/

  var biciCorsa = [
    {
      nome: "biciRossa",
      peso: 15
    },

    {
      nome: "biciGialla",
      peso: 10
    },

    {
      nome: "biciVerde",
      peso: 20
    },

    {
      nome: "biciNera",
      peso: 5
    }
  ]

  var biciLeggera = biciCorsa[0];

  for( var i = 0; i < biciCorsa.length; i ++ ) {

    if(biciCorsa[i].peso < biciLeggera.peso){
      biciLeggera = biciCorsa[i];
    }
  }

  console.log(biciLeggera);
  



});
