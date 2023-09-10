/* ****************************************************************************
1- Dynamic types
******************************************************************************* */
/*
let a = 1;
console.log(a);
a = '1';
console.log(a);
a = true;
console.log(a);
a = [ '1', '2', '3' ];
console.log(a);
*/

/* ****************************************************************************
2- Mix types operations
******************************************************************************* */
/*
console.log(1 + '1');
console.log(1 - '1');
console.log('a' + 1);
console.log(1 + 'a');
console.log('a' +  true);
console.log(true + 'a');
console.log(false + 1);
console.log(true + 1);
console.log('a' + 1 + true);
console.log(true + 1 + 'a');
*/
/* ****************************************************************************
3- Expression evaluation
******************************************************************************* */

console.log(true ? 'Es true' : 'Es false');
console.log(false ? 'Es true' : 'Es false');
console.log(1 ? 'Es true' : 'Es false');
console.log(0 ? 'Es true' : 'Es false');
console.log('' ? 'Es true' : 'Es false');
console.log(undefined ? 'Es true' : 'Es false');
console.log(null ? 'Es true' : 'Es false');
console.log([1].length ? 'Es true' : 'Es false');
console.log([].length ? 'Es true' : 'Es false');
