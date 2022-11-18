// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuelle à l'aide de l'objet Date()
const date = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
const hours = ((date.getHours() + 11) % 12 + 1);
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${hours}h ${minutes}min ${seconds}sec`);
const nbSecondMinute = 60;
const nbSecondHour = 3600;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

const angleSEC = 360 / 60;
const angleMIN = angleSEC / 60;
const angleHR = angleMIN / 12;
console.log(`${angleSEC}°/sec ${angleMIN}°/minute ${angleHR}°/heure`);

// Déplacer les aiguilles 

function demarrerLaMontre() {
    AIGUILLEHR.style.transform = `rotate(${impulsions*angleHR}deg) `;
}

/* fonction qui initialise l'heure actuelle */
function horlogeInit(){
    
}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);