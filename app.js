//5 * 1
const { crearArchivo } = require("./helpers/multiplicas");
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
// console.log(process.argv)
// const [,,arg3='base=5'] = process.argv

// console.log(arg3)
// const [,base = 1] = arg3.split('=');

// console.log(process.argv)
console.log(argv);

// console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombre) => console.log("archivo creado correctamente".rainbow, nombre))
  .catch((err) => console.log("ERROR", err));
