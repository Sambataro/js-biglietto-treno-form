// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

// chiedere all'utente il numero di chilometri
var numeroKM = prompt("Quanti kilometri vuoi percorrere?");
console.log(numeroKM);


// chiedere all'utente età
var etaPasseggero = prompt("Quanti anni hai?")
console.log(etaPasseggero);

// sconto 40%
var over65 = etaPasseggero >= 65;
console.log(over65);

// sconto 20%
var under18 = etaPasseggero <= 17;
console.log(under18)

// calcolare il prezzo totale del viaggio
var prezzoBiglietto = (numeroKM * 0.21);
if (over65) {
  prezzoBiglietto = (numeroKM * 0.126);

} else if  (under18) {
  prezzoBiglietto = (numeroKM * 0.168);
}
console.log(prezzoBiglietto);

// stringa risultato
document.getElementById("prezzo-treno").innerHTML= "Ecco il prezzo su misura per te " + prezzoBiglietto + "€";
