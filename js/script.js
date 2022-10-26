"use strict";
const mail= ["marco@gmail.com", "luca@gmail.com", "sandro@libero.it"];
let askEmail= prompt("Inserisci la tua email");
for (let i = 0; i < mail.length; i++) {
    const element = mail[i];
    if(register==askEmail){
        alert("Sei registrato");
       
    }
    else if(register!=askEmail){
        alert("Non sei registrato");
    }
}