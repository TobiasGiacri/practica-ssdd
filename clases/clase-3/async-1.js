/* ****************************************************************************
1- Sincronismo vs Asincronismo
********************************************************************************/

// parte 1

/*
// sincronismo
const fs = require('fs');
const data = fs.readFileSync('./text.txt');
console.log('1', data.toString());
console.log('2', '¿Cuándo imprime esto?');

// asincronismo
fs.readFile('./text.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('3', data);
});
console.log('4', '¿Cuándo imprime esto?');
*/

// parte 2
/*
setTimeout(function () {
  console.log('Hola');
}, 2000);
console.log('¿Cuándo imprime esto?');
*/
/*
setInterval(function () {
  console.log('Hola');
}, 1000);
console.log('¿Cuándo imprime esto?');
*/
/*
setImmediate(function () {
  console.log('Hola');
});
console.log('¿Cuándo imprime esto?');
*/
