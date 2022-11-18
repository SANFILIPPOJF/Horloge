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


}
interval