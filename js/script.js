// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");



// Séléctionner les aiguilles de montre

//Extraire l'heure actuelle à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 

function demarrerLaMontre() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6

    
    AIGUILLEHR.style.transform = `rotate(${hour}deg) `;

    AIGUILLEMIN.style.transform = `rotate(${minute}deg)`;

    AIGUILLESEC.style.transform = `rotate(${second}deg)`;
}
/* fonction qui fait bouger une aiguille definie, d'un certain nombre d'impulsion */
function rotationAiguille (aiguille,impulsions) {


}
/* fonction qui initialise l'heure actuelle */
function horlogeInit(){
    
}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);