$(document).ready(function () {
  
/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare (scelto da voi), le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
*/

 
var squadre = [
  {
    nome: "milan",
    puntiFatti: 0,
    falliSubiti: 0
  },

  {
    nome: "juve",
    puntiFatti: 0,
    falliSubiti: 0
  },

  {
    nome: "inter",
    puntiFatti: 0,
    falliSubiti: 0
  },

  {
    nome: "roma",
    puntiFatti: 0,
    falliSubiti: 0
  }
]

for(var i = 0; i < squadre.length; i++){

  squadre[i].puntiFatti = random();
  squadre[i].falliSubiti = random();

}

console.log(squadre);



function random(){
  var random = Math.floor(Math.random()* 10)+1
  return random;
}



});
