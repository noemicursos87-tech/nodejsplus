// funcion de sumar
export function suma(a, b) {
    return a + b;
}

// funcion de restar
export function resta(a, b) {
    return a - b;
}       

// funcion de multiplicar
export function multiplica(a, b) {
    return a * b;
}       

// funcion de dividir       
export function divide(a, b) {          
    if (b === 0) {
        throw new Error('Error: División por cero no está definida.');
    }
    return a / b;
}