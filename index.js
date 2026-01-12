//console.log('Hello, World!');
// console.log(window);  //Dará errores porque no se puede poner un navegador
// console.log(global);    //Puede que el servidor no lo entienda, hay otra que es un termino medio entr este y el anterior
//console.log(globalThis); //Esta es la forma correcta de hacerlo, ya que funciona en ambos entornos. Global this es de donde salen todas las instrucciones de código de navegación de node.
//globalThis.console.log('Hola, Mundo!');   //Esto también funcionaría.


//Importar las funciones desde el modulo de operaciones-aritmeticas.mjs
import { suma, resta, multiplica, divide } from './operaciones-aritmeticas.mjs';
console.log(suma(4, 2));
