/* ****************************************************************************
1- Function scope
******************************************************************************* */

// Part 1
/*
function myFn() {
  let myVar1 = 1;
  console.log('Dentro de función', myVar1);
}

myFn();

console.log('Fuera de función', myVar1);
*/

// Part 2
/*
if (true) {
  var myVar0 = 1;
}

function myFn() {
  var myVar1 = 1;
  console.log('Dentro de función', myVar0);
  console.log('Dentro de función', myVar1);
}

myFn();

console.log('Fuera de función', myVar0);
console.log('Fuera de función', myVar1);
*/

/* ****************************************************************************
2- Lexical scope & Scope Chain
******************************************************************************* */

/*
function myFn() {
  let myVar1 = 1;
  console.log('Dentro de función', myVar1);

  function myFn2() {
    console.log('Dentro de sub-función', myVar1);
  }

  myFn2();

}

myFn();
*/

/* ****************************************************************************
3-  Closures
******************************************************************************* */

// part 1
/*
function myFn() {
  var myVar1 = 1;
  console.log('Dentro de función', myVar1);

  return function () {
    console.log('Dentro de sub-función', myVar1);
  }
}

const fn = myFn();

console.log('Ya terminó de ejecutar myFn()');

fn();
*/
/* ****************************************************************************
4- Hoisting
******************************************************************************* */

// part 1
/*
console.log(' *************************************** ');
console.log('Antes');
hoistingExample1('Does this work?');
console.log(hoistingExample2);

function hoistingExample1(name) {
  console.log('Hello!!!, ', name);
}

//var hoistingExample1 = function (name) {
//  console.log('Hello!!!, ', name);
//}
//let hoistingExample2 = 'some value';

var hoistingExample2 = 'some value';

console.log('Despues');
hoistingExample1('Does this work?');
console.log(hoistingExample2);
console.log(' *************************************** ');
*/

// part 2

var scopeVar = 1;

function scopeExampleA() {
  console.log('Pre: ', scopeVar);
  console.log('Pre: ', scopeVarA);
  var scopeVar = 2;
  var scopeVarA = 2;
  console.log('Post: ', scopeVar);
  console.log('Post: ', scopeVarA);
  console.log('Post: ', scopeVarB);
}

function scopeExampleB() {
  console.log('Pre: ', scopeVar);
  console.log('Pre: ', scopeVarB);
  var scopeVar = 2;
  var scopeVarB = 2;
  console.log('Post: ', scopeVar);
  console.log('Post: ', scopeVarB);
  console.log('Post: ', scopeVarA);
}

console.log(' *************************************** ');
console.log('Fuera: ', scopeVar);
scopeExampleA();
scopeExampleB();
console.log(' *************************************** ');

