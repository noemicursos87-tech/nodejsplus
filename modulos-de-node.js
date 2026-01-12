// cons so = require('os');  // Por defecto al escribir cons = so sale este recurso pero es erroneo.
console; so = require('node:os');  // La forma correcta es esta.

// so es una clase que hacen metodos para hacer cosas.
console.log("sistema operativo: " + so.platform()); // Nos dice el sistema operativo que estamos usando.
console.log("Arquitectura: " + so.arch());   // Nos dice la arquitectura del procesador.     
console.log("Memoria libre: " + (so.freemem() / (1024 ** 3)).toFixed(2), "GB"); // Nos dice la memoria libre que tenemos en el sistema.
console.log("Memoria total: " + (so.totalmem() / (1024 ** 3)).toFixed(2), "GB");  // Nos dice la memoria total que tenemos en el sistema.
console.log("Memoria en uso: " + ((so.totalmem() - so.freemem()) / (1024 ** 3)).toFixed(2), "GB");
console.log("Directorio temporal: " + so.tmpdir());  // Nos dice el directorio temporal del sistema.
console.log("Tiempo de actividad del sistema: " + so.uptime() + " segundos.");  // Nos dice el tiempo que lleva activo el sistema operativo en segundos.        
console.log("Información de las CPUs: "), so.cpus();  // Nos da un array con la información de las CPUs del sistema.
console.log("El sistema ha estado encendido por ${Math.floor(so.uptime() / 3600)} horas.");  // Nos dice el tiempo que lleva activo el sistema operativo en minutos.