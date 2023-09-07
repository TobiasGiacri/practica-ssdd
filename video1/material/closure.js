function myFunctionGenerator() {
  let iterator; // cuando la ejecución de la función termina este contexto se termina y por ende deberia eliminarse.
  let functionsArray = [];

  for(iterator = 0; iterator < 10; iterator += 1) {
    functionsArray.push(
      function() {
        console.log(iterator);
      }
    )
  }

  return functionsArray;
}

const myFunctions = myFunctionGenerator();

for(let i = 0; i < myFunctions.length; i += 1) {
  myFunctions[i]();
}
