

//const eta = prompt("inserisci la tua età")
//const kmDaPercorrere = prompt("quanti chilometri devi percorrere?")


// formula calcolo prezzo 
const prezzoAlkm = 0.21;
let prezzoFinale = parseInt(km) * prezzoAlkm;

if(parseInt(eta) < 18) {
    prezzoFinale = prezzoFinale - prezzoFinale * 0.2;
} else if(parseInt(eta) > 65){
    prezzoFinale = prezzoFinale - prezzoFinale * 0.4;
}
console.log(prezzoFinale);

const generaElement = document.getElementById('genera')
const annullaElement = document.getElementById('annulla')
const nomeElement = document.getElementById('nome')
const kmElement = document.getElementById('km')
const etaElement = document.getElementById('eta')