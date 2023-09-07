/****************************************************************
 * 1- Global
 ****************************************************************/
// part 1
/*
//module.exports.miVariable = 'Hola Mundo';
console.log(this);
*/

// part 2
/*
console.log(global);

const n1 = global.Math.pow(2,3);
const n2 = Math.pow(2,3);

console.log(n1);
console.log(n2);

global.console.log('Hola Mundo');

function myFn() {
  console.log(this);
}

myFn();
*/

/****************************************************************
 * 2- Metodos
 ****************************************************************/

// part 1
/*
const persona = {
  nombre: "Juan",
  miMetodo: function () {
    console.log(this);
  }
};
persona.miMetodo();
*/

// part 2
/*
const persona = function (nombre) {
  this.nombre = nombre,
  this.miMetodo = function () {
    console.log(this);
  }
};

const persona1 = new persona('Juan');
persona1.miMetodo();
*/
