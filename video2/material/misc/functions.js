/* ****************************************************************************
1- Pass-by-??
******************************************************************************* */

// part 1
/*
function myFn(_a) {
  _a = 2;
}

let a = 1;
myFn(a);
console.log(a)
*/

// part 2
/*
function myFn(_a) {
  _a.prop = 2;
}

let a = {
  prop: 1
};
myFn(a);
console.log(a)
*/

// part 3
/*
function myFn(_a) {
  _a = { prop: 3 };
}

let a = {
  prop: 1
};
myFn(a);
console.log(a)
*/

/* ****************************************************************************
2- IIFE
******************************************************************************* */

// part 1
/*
(function iife() {
  var text = 'Hello world';
  console.log(text);
})();

//console.log(text);
*/

// part 2
/*
(function iife(text) {
  console.log(text);
})('Bye bye!');
*/

/* ****************************************************************************
3- Funciones anonimas
******************************************************************************* */
/*
const myArray = [ 1, 2, 3, 4, 5, 6 ];

const acumulado = myArray.reduce(function (acc, value, index) {
  return acc + value;
}, 0);
console.log(acumulado);

function acumuladorNoAnonimo(acc, value, index) {
  return acc + value;
}
const acumuladoNoAnonimo = myArray.reduce(acumuladorNoAnonimo, 0);
console.log(acumuladoNoAnonimo);
*/

/* ****************************************************************************
4- Callbacks & funciones anonimas
******************************************************************************* */
// parte 1
/*
fs = require('fs')
fs.readFile('./text.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
*/

// parte 2
/*
fs = require('fs')

function imprimeArchivo(err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}

fs.readFile('./text.txt', 'utf8', imprimeArchivo);
*/

/* ****************************************************************************
5- Arrow functions
******************************************************************************* */

// part 1
/*
const myFn = function () {
  console.log('classic');
}

const myFn2 = () => {
  console.log('modern');
}

myFn();
myFn2();
*/

// part 2
/*
const suma = function (a, b) {
  return a + b;
}

const suma2 = (a, b) => a + b;

console.log(suma(1, 2));
console.log(suma2(1, 2));
*/

// part 3
/*
const persona = function (nombre) {
  this.nombre = nombre;
};

(function () {

  this.nombre = 'Pedro';

  persona.prototype.saludo = () => {
    console.log(`Hola ${this.nombre}`);
  }

})();

const persona1 = new persona('Juan');
persona1.saludo();
*/
