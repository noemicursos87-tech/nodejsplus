//console.log('Hello, World!');
// console.log(window);  //Dará errores porque no se puede poner un navegador
// console.log(global);    //Puede que el servidor no lo entienda, hay otra que es un termino medio entr este y el anterior
//console.log(globalThis); //Esta es la forma correcta de hacerlo, ya que funciona en ambos entornos. Global this es de donde salen todas las instrucciones de código de navegación de node.
//globalThis.console.log('Hola, Mundo!');   //Esto también funcionaría.


//Importar las funciones desde el modulo de operaciones-aritmeticas.mjs
import { suma, resta, multiplica, divide } from './operaciones-aritmeticas.mjs';

//Seleccionar los elementos del DOM
 // Zona numeros aleatorios
 const numeroIzquierda = document.getElementById('numeroIzq');
 const numeroDerecha = document.getElementById('numeroDer');    

//Zona boton de nuevos numeros
 const btnNuevosNumeros = document.getElementById('btnNuevosNúmeros');  

//Zona botones y resultados sumar y restar
const resultadoSumar = document.getElementById('resultadoSumar');
const resultadoRestar = document.getElementById('resultadoRestar'); 
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');

//Zona botones y resultados multiplicar y dividir
const resultadoMultiplicar = document.getElementById('resultadoMultiplicar');
const resultadoDividir = document.getElementById('resultadoDividir');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');


//Funcion para generar numeros aleatorios entre 1 y 99 
function numeroAleatorio() {
    return Math.floor(Math.random() * 100); 
}
//cuando voy a necesitar dos num aleatorios , cada uno en una variable, voy a necesitar cargar la pagina y al pulsar el boton de nuevos numeros
let aleatorioIzq = numeroAleatorio();   
let aleatorioDer = numeroAleatorio();
numeroIzq.textContent = aleatorioIzq;
numeroDer.textContent = aleatorioDer;   
    
    
    
    
//Evento para el boton de nuevos numeros
btnNuevosNumeros.addEventListener('click', () => {
    aleatorioIzq = numeroAleatorio();   
    aleatorioDer = numeroAleatorio();
    numeroIzq.textContent = aleatorioIzq;
    numeroDer.textContent = aleatorioDer;       

    //Limpiar los resultados anteriores al generar nuevos numeros
    resultadoSumar.textContent = '';
    resultadoRestar.textContent = '';
    resultadoMultiplicar.textContent = '';
    resultadoDividir.textContent = '';
}); 



