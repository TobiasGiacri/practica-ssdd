const fs = require('fs');

const fileContent = fs.readFileSync('./leeme.txt');

console.log(fileContent.toString());
