/* ****************************************************************************
1- Intro to variables
******************************************************************************* */

// Part 1
/*
let miVariable1 = 'primera';
const miVariable2 = 'segunda';
var miVariable3 = 'tercera';

console.log(miVariable1);
console.log(miVariable2);
console.log(miVariable3);
*/


// Part 2
/*
let miVariable1 = 'primera';
const miVariable2 = 'segunda';
var miVariable3 = 'tercera';

console.log(miVariable1);
console.log(miVariable2);
console.log(miVariable3);

let miVariable1 = 'primera';
const miVariable2 = 'segunda';
var miVariable3 = 'tercera';
*/

/* ****************************************************************************
2- Constants
******************************************************************************* */

// Part 1
/*
const miConstante = 'constant value';
let miVarMutable1 = 'mutable var 1';
var miVarMutable2 = 'mutable var 2';

miVarMutable1 = 'other value 1';
miVarMutable2 = 'other value 2';
*/

// Part 2

//miConstante = 'other value';



/* ****************************************************************************
1- Block scope vs global scope
******************************************************************************* */

/*
// Part 1

if(true) {
  var globalVar = 1;
  let scopeVar = 1;
  console.log('1) Detro del block var: ', globalVar);
  console.log('2) Dentro del block let: ', scopeVar);
}


// Part 2

console.log('3) Fuera del block var: ', globalVar);
console.log('4) Fuera del block let: ', scopeVar);
*/

/* ****************************************************************************
3- undefined
******************************************************************************* */
/*
let nonDefined;

console.log(nonDefined);
*/

/* ****************************************************************************
4- Functions as vars
******************************************************************************* */
/*
function example(name) {
  console.log('Hello!!!, ', name);
}

const exampleAsVar = function (name) {
  console.log('Hello!!!, ', name);
}

console.log(' *************************************** ');
example('SSDD 2020');
exampleAsVar('SSDD 2020');
console.log(' *************************************** ');
*/
