/* ****************************************************************************
1- Arrays
******************************************************************************* */
/*
const myArray = [ 1, 2, 3, 4, 5, 6 ];

//console.log(myArray.length);

// Agregar elementos
myArray.push(7);
//console.log(myArray);

// Acceder a elemento por índice
const el = myArray[1];
//console.log(el);

// Eliminar un element
//console.log(myArray);
myArray.splice(6, 1);
//console.log(myArray);

// Iterar
myArray.forEach(function(value, index) {
//  console.log(`posicion ${index}: ${value}`)
});

// transformar
const transformedArray = myArray.map(function(value, index) {
  return Math.pow(value, 2);
});
transformedArray.forEach(function(value, index) {
//  console.log(`posicion ${index}: ${value}`)
});

// filtrar
const filteredArray = myArray.filter(function(value, index) {
  return value % 2 === 0
});
filteredArray.forEach(function(value, index) {
//  console.log(`posicion ${index}: ${value}`)
});

// encontrar
const findInArray1 = myArray.find(function(value, index) {
  return value === 4
});
//console.log(findInArray1);
const findInArray2 = myArray.find(function(value, index) {
  return value === 7
});
//console.log(findInArray2);

// reducir
const acumulado = myArray.reduce(function(acc, value, index) {
  return acc + value;
}, 0);
//console.log(acumulado);
*/
/* ****************************************************************************
2- Maps
******************************************************************************* */
/*
const myMap = new Map();

console.log('Maps');
myMap.set('clave1', 1);
console.log(myMap.get('clave1'));
myMap.set('clave2', 1);
console.log(myMap.get('clave1'));
console.log(myMap.get('clave2'));
myMap.set('clave1', 2);
console.log(myMap.get('clave1'));
console.log(myMap.get('clave2'));
*/
/* ****************************************************************************
2- Sets
******************************************************************************* */
/*
const mySet = new Set();

console.log('Sets');
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.values());
console.log(mySet.has(3));
*/
