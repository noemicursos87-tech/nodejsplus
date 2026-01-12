//Simulacion del comportamiento de Mono hilo en Node.js
//Módulo os de Node.js de lectura y escritura de archivos del sistema operativo llamado fs(FileSystem), importante poner node:fs
const fs = require('node:fs');

//De manera sincronica o modo sincrono Uno
console.log ("/n"+"*", repeat(50))
console.log('Inicio de la lectura del archivo de manera sincrónica UNO.');
console.log ("*", repeat(50))
const datosSincronoUno = fs.readFileSync('archivos/lectura1.txt', 'utf-8');    // ReadFileync es de archivo sincromatico.
console.log("Datos leídos de manera sincrónica,datosSincronoUno");
console.log('Fin de la lectura sincrónica UNO.');
//--------------------------------------------------------
console.log("Trabajando en un tema importante mientrass se lee el archivo..."); //Esto sera mentira 
//--------------------------------------------------------

//De manera sincronica o modo sincrono Dos
console.log ("/n"+"*", repeat(50))
console.log('Inicio de la lectura del archivo de manera sincrónica DOS.');
console.log ("*", repeat(50))
const datosSincronoDos = fs.readFileSync('archivos/lectura2.txt', 'utf-8');
console.log("Datos leídos de manera sincrónica,datosSincronoDos");  
console.log('Fin de la lectura del archivo de manera sincrónica DOS.');

