

const suma = (a, b) => a + b;
console.log(suma(2, 3)); // Resultado: 5


const multiplicar = function (a, b) {
    return a * b;
};
console.log(multiplicar(4, 5)); // Resultado: 20

function dividir(x, y) {
    return x / y;
}
console.log(dividir(10, 2)); // Resultado: 5

(function () {
    const mensaje = "Hola, mundo!";
    console.log(mensaje);
})(); // Resultado: Hola, mundo!


//===============================================================
const prompt = require('prompt-sync')();

function saludar(nombre) {
    console.log('Hola ' + nombre);
}
function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    return callback(nombre);
}
setTimeout(procesarEntradaUsuario,4000,saludar)
console.log('Gracias, hasta luego.');