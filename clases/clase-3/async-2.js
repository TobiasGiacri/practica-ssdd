/* ****************************************************************************
1- Callbacks
********************************************************************************/

// parte 1
/*
function myFn(cb) {
  console.log('1');
  cb();
}

function myCb() {
  console.log('2');
}

myFn(myCb);
console.log('3', '¿Cuándo imprime esto?');
*/
// parte 2
/*
const fs = require('fs');
fs.readFile('./text.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('3', data);
});
console.log('4', '¿Cuándo imprime esto?');
*/

/* ****************************************************************************
2- Promesas
********************************************************************************/
/*
const miPromesa = function () {
  return new Promise(function (resolve, reject) {
    // acá puede ir una operación bloqueante
    if (true)
      resolve('Hola');
    else
      reject('Chau');
  });
}

miPromesa()
  .then(function (result) {
    console.log(result, '1');
    return miPromesa()
  })
  .then(function (result) {
    console.log(result, '2');
    return miPromesa()
  })
  .then(function (result) {
    console.log(result, '3');
    return miPromesa()
  })
  .catch(function (error) {
    console.error('Error capturado:');
    console.error(error);
  });

console.log('¿Cuándo imprime esto?');
*/

/* ****************************************************************************
3- Async/Await
********************************************************************************/

// parte 1

async function miFuncionAsyncronica() {
  if (false)
    return 'Hola';
  else
    throw Error();
}
/*
miFuncionAsyncronica()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Error capturado:');
    console.error(error);
  })
*/

// parte 2

async function containerFunction() {
  try {
    const result = await miFuncionAsyncronica();
    console.log(result);
  } catch (e) {
    console.error('Error capturado:');
    console.error(e);
  }
}
containerFunction();

