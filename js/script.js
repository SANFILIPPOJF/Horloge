// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
const date = new Date();

// reglage de la fluidité de l'horloge (1000 normal, 100 fluide)
let delaiCompteur = 1000;

//Stocker l'heure , minute , seconde  dans des varaiables
let heure = date.getHours();
let minute = date.getMinutes();
let seconde = date.getSeconds();
console.log(`il est ${heure}h${minute}min${seconde}sec`);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
const angleSeconde = 360/60;
const angleMinute = angleSeconde/60;
const angleHeure = angleMinute/12;
console.log(`Les secondes avancent de ${angleSeconde} degrés, minutes de ${angleMinute} et heures de ${angleHeure}`);

// Position initiale des aiguilles, horloge à l'heure 
let positionSeconde = angleSeconde*seconde;
let positionMinute = angleMinute*((60*minute)+seconde);
let positionHeure = angleHeure*((3600*heure)+(60*minute)+seconde);

AIGUILLEHR.style.transform = `rotate(${positionHeure}deg)`;
AIGUILLEMIN.style.transform = `rotate(${positionMinute}deg)`;
AIGUILLESEC.style.transform = `rotate(${positionSeconde}deg)`;

// Déplacer les aiguilles 
function demarrerLaMontre() {
    positionSeconde+= angleSeconde*delaiCompteur/1000;
    positionMinute+= angleMinute*delaiCompteur/1000;
    positionHeure+= angleHeure*delaiCompteur/1000;
    AIGUILLEHR.style.transform = `rotate(${positionHeure}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${positionMinute}deg)`;
    AIGUILLESEC.style.transform = `rotate(${positionSeconde}deg)`;
    return;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, delaiCompteur);


/* version du code "validée" vendredi

var interval = setInterval(demarrerLaMontre, 1000);

demarrerLaMontre();

function demarrerLaMontre() {

    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");

    AIGUILLEHR.style.transform = `rotate(${hour}deg)`;

    AIGUILLEMIN.style.transform = `rotate(${minute}deg)`;

    AIGUILLESEC.style.transform = `rotate(${second}deg)`;
} */