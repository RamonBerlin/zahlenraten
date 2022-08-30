"use strict";


let zahl;

const zufallsZahl = (Math.floor(Math.random() * 101)).toFixed(0);

console.log("Zufallszahl:", zufallsZahl);

zahl = prompt("Geben Sie eine Zahl zwischen 0 und 100 ein");
console.log(zahl);

for (let i=1; i <= 10; i++) {
  if (zahl === zufallsZahl) {
    alert("du hast "+ i+ " Versuche gebraucht");
    break;
  } else if (zahl < zufallsZahl) {
    zahl = prompt("Versuch: " + i + " Die gesuchte Zahl ist größer");
    console.log(zahl);
  } else if (i >= 11) {
    alert("Versuch: " + i + " Du hast keine versuche mehr übrig");
  } else {
    zahl = prompt("Versuch: " + i + " Die gesuchte Zahl ist kleiner");
    console.log(zahl);
  }
}
