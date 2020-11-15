// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.
var biglietto = document.getElementById("genera-biglietto");

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener("click",

function() {

  // // form utente nome
  var nomeUtente = document.getElementById("nome").value;
  // form utente il numero di chilometri
  var numeroKM = parseInt(document.getElementById("km").value);
  // form utente eta
  var etaPasseggero = document.getElementById("eta").value;

  // calcolare prezzo totale del viaggio
  var prezzoBiglietto = numeroKM * 0.21;
  // calcolare prezzo minorenni
  var minorenne = prezzoBiglietto - (prezzoBiglietto * 0.2);
  // calcolare prezzo over65
  var over65 = prezzoBiglietto - (prezzoBiglietto * 0.4);

  var totale = "";

  if (etaPasseggero == "Minorenne") {
  totale = minorenne.toFixed(2);
  document.getElementById("sconto-value").innerHTML = "Sconto under18 -20%";
} else if (etaPasseggero == "Over65") {
  totale = over65.toFixed(2);
  document.getElementById("sconto-value").innerHTML = "Sconto over65 -40%";
} else {
    totale = prezzoBiglietto.toFixed(2);
    document.getElementById("sconto-value").innerHTML = "Biglietto regular";
  }

  document.getElementById("totale-value").innerHTML = totale + " €";

  // stampiamo biglietto
  var nomeUtenteValue = document.getElementById("nome-value").innerHTML = nomeUtente;

  // var scontoValue = document.getElementById("sconto-value").innerHTML = etaPasseggero;

  var nomeUtenteValore = document.getElementById("nome-value").innerHTML = nomeUtente;
  var carrozzaValue = Math.floor((Math.random() * 9 ) + 1);
  document.getElementById("carrozza-value").innerHTML = carrozzaValue;
  var codiceCp = Math.floor((Math.random() * 10000 ) + 90000);
  document.getElementById("codice-cp-value").innerHTML = codiceCp;

  // biglietto show

  biglietto.classname = "show";

  console.log(biglietto);

}
);
