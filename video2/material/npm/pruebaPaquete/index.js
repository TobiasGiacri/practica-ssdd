const suma = require('./suma');
const prefijos = require('prefijos-telefonicos-argentina');

const resultado = suma(1, 2);

const localidades = prefijos.filter('codigo', '2291');

console.log(resultado);
console.log(localidades);
