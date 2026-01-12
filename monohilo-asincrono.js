const fs = require('node:fs');
// sistema asincrono -Metodos de trabajo: promesas(lo mas ultilizado, node las acepta, cachea errores) - callbacks(muy antiguos, ya no se usan)-async/await
console.log("\n"); // Salto de línea para separar
//sistema en segundo plano que no vemos

// Función asíncrona para demostrar secuencialidad con async/await
async function leerArchivosAsincronicamente() {
    try {
        //De manera asincrónica UNO
        console.log("*".repeat(50));
        console.log('Inicio de la lectura del archivo de manera asincrónica UNO.');
        console.log("*".repeat(50));
        const datosAsincronosUno = await fs.promises.readFile('archivos/lectura1.txt', 'utf-8');
        console.log("Datos leídos asincronamente con Promesas:", datosAsincronosUno);
        console.log('Fin de la lectura del archivo de manera asincrónica UNO.');

        //--------------------------------------------------------
        console.log("Trabajando en un tema importante mientras se lee el archivo..."); // Simulación de trabajo entre lecturas
        //--------------------------------------------------------

        //De manera asincrónica DOS
        console.log("\n" + "*".repeat(50));
        console.log('Inicio de la lectura del archivo de manera asincrónica DOS.');
        console.log("*".repeat(50));
        const datosAsincronosDos = await fs.promises.readFile('archivos/lectura2.txt', 'utf-8');
        console.log("Datos leídos asincronamente con Promesas:", datosAsincronosDos);
        console.log('Fin de la lectura del archivo de manera asincrónica DOS.');
    } catch (error) {
        console.error('Error al leer los archivos:', error);
    }
}

// Llamar a la función
leerArchivosAsincronicamente();
    