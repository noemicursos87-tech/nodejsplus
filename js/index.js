//console.log('Hello, World!');
// console.log(window);  //Dará errores porque no se puede poner un navegador
// console.log(global);    //Puede que el servidor no lo entienda, hay otra que es un termino medio entr este y el anterior
//console.log(globalThis); //Esta es la forma correcta de hacerlo, ya que funciona en ambos entornos. Global this es de donde salen todas las instrucciones de código de navegación de node.
//globalThis.console.log('Hola, Mundo!');   //Esto también funcionaría.


//Importar las funciones desde el modulo de operaciones-aritmeticas.mjs
import { suma, resta, multiplica, divide } from './operaciones-aritmeticas.mjs';

//Seleccionar los elementos del DOM
 // Zona numeros aleatorios
 const numeroIzquierda = document.getElementById('numeroIz');
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


//Funcion para generar numeros aleatorios entre 1 y 100 o bien escribir don numeros especificos entre 1 y 100
function generarNumerosAleatorios() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    numeroIzquierda.textContent = num1;
    numeroDerecha.textContent = num2;
}

//Generar numeros aleatorios al cargar la pagina
generarNumerosAleatorios();

//Event listener para el boton de nuevos numeros
btnNuevosNumeros.addEventListener('click', generarNumerosAleatorios);

//Event listeners para las operaciones
btnSumar.addEventListener('click', () => {
    const num1 = parseInt(numeroIzquierda.textContent);
    const num2 = parseInt(numeroDerecha.textContent);
    resultadoSumar.textContent = suma(num1, num2);
});

btnRestar.addEventListener('click', () => {
    const num1 = parseInt(numeroIzquierda.textContent);
    const num2 = parseInt(numeroDerecha.textContent);
    resultadoRestar.textContent = resta(num1, num2);
});

btnMultiplicar.addEventListener('click', () => {
    const num1 = parseInt(numeroIzquierda.textContent);
    const num2 = parseInt(numeroDerecha.textContent);
    resultadoMultiplicar.textContent = multiplica(num1, num2);
});

btnDividir.addEventListener('click', () => {
    const num1 = parseInt(numeroIzquierda.textContent);
    const num2 = parseInt(numeroDerecha.textContent);
    resultadoDividir.textContent = divide(num1, num2);
});

