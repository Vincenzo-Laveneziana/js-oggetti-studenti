$(document).ready(function () {
  
/* 
Creare un oggetto palla che abbia le seguenti proprietà:
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

var oggetto = {
  nome: "palla",
  peso: 10
}

console.log(oggetto.peso)

alert("Ora cambieremo il peso dell'oggetto");

oggetto.peso = parseInt(prompt("Inserisci un nuovo peso"));
  
console.log(oggetto.peso)
});
