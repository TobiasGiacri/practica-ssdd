/* ****************************************************************************
1- Creacion de objetos - literales
******************************************************************************* */

// part 1
/*
const persona = {
  nombre: 'Juan',
  edad: 30,
  saludar: function () {
    console.log('Hola!');
  }
};

console.log(persona);

persona.saludar();

persona.nombre = 'Martin';
console.log(persona);

delete persona.nombre;
console.log(persona);
*/
// part 2
/*
const nombre = 'Juan';
const edad = 30;

const persona = {
  nombre,
  edad
};

console.log(persona);
*/

// part 3
/*
const persona = {}

persona.nombre = 'Juan';
persona.edad = 30;

console.log(persona);
*/

// part 4
/*
const persona = {}

const var1 = 'nombre';
const var2 = 'edad';

persona[var1] = 'Juan';
persona[var2] = 30;

console.log(persona);
*/

/* ****************************************************************************
2- Creacion de objetos - funciones constructoras
******************************************************************************* */

// part 1
/*
const persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log('Hola');
  }
};

const persona1 = new persona('Juan', 30);
console.log(persona1);
persona1.saludar();
*/

// part 2
/*
const persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola ${this.nombre}`);
  }
};

const persona1 = new persona('Juan', 30);
console.log(persona1);
persona1.saludar();
*/

/* ****************************************************************************
2- Instancias & prototipos
******************************************************************************* */

// part 1
/*
const persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola ${this.nombre}`);
  }
};

const persona1 = new persona('Juan', 30);
const persona2 = new persona('Martin', 25);

persona1.saludar();
persona2.saludar();
*/

// part 2
/*
const persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola ${this.nombre}`);
  }
};

persona.prototype.saludar = function () {
  console.log(`Hola ${this.nombre}`);
}

const persona1 = new persona('Juan', 30);
const persona2 = new persona('Martin', 25);

//persona.prototype.saludar = function () {
//  console.log(`Chau ${this.nombre}`);
//}

persona1.saludar();
persona2.saludar();

//console.log(persona1.__proto__.saludar.toString());
//console.log(persona.prototype.saludar.toString());

//console.log(persona1.hasOwnProperty('apellido'));

console.log(persona1 instanceof persona);
console.log(persona1 instanceof Object);
console.log(persona1 instanceof Function);
*/
/* ****************************************************************************
3- Clases post ES6
******************************************************************************* */
/*
class Persona {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hola soy ${this.firstName} ${this.lastName}`);
  }
}

const juan = new Persona('Juan', 'Perez');
const pedro = new Persona('Pedro', 'Perez');

juan.sayHello();
pedro.sayHello();
*/

/* ****************************************************************************
4- Herencia
******************************************************************************* */
/*
class Driver extends Persona {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  trabajar() {
    console.log('Voy a manajer');
  }
}

const conductor = new Driver('El', 'Conductor');

//conductor.sayHello();
//conductor.trabajar();

class Doctor extends Persona {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  trabajar() {
    console.log('Voy a curar');
  }
}

const doctor = new Doctor('El', 'Doctor');

//doctor.sayHello();
//doctor.trabajar();
*/
/* ****************************************************************************
4- Herencia multiple... mixins
******************************************************************************* */
/*
const AmauteurFootballPlayer = {
  kick: () => {
    console.log('Patea la pelota');
  },

  pass: () => {
    console.log('Pasa la pelota');
  }
};

Object.assign(conductor, AmauteurFootballPlayer);
Object.assign(doctor, AmauteurFootballPlayer);

conductor.sayHello();
conductor.trabajar();
conductor.kick();
conductor.pass();

doctor.sayHello();
doctor.trabajar();
doctor.kick();
doctor.pass();
*/
