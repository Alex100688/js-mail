"use strict";
const mail= ["marco@gmail.com", "luca@gmail.com", "sandro@libero.it"];
let askEmail= prompt("Inserisci la tua email");
for (let i = 0; i < mail.length; i++) {
    const element = mail[i];
    let askEmail=mail;
    if(askEmail==mail){
        alert("Sei registrato");
        break;
        
    }
    else if(askEmail!=mail.length){
        alert("Non sei registrato");
    }
}