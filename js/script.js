clock();

function clock() {
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


    AIGUILLEHR.style.transform = `rotate(${hour}deg) `;

    AIGUILLEMIN.style.transform = `rotate(${minute}deg)`;

    AIGUILLESEC.style.transform = `rotate(${second}deg)`;
}
setInterval(clock ,1000);
// Séléctionner les aiguilles de montre

//Extraire l'heure actuelle à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 





// Exercuter la fonction chaque second
