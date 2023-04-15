const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: 'Es la lista de la tabla'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    default: 10,
    describe: 'Es hata que numero llega la tabla'
  })
  .check((argv, optional) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    else if(isNaN(argv.h))
    {
      throw 'El hasta debe de ser un numero'
    }
    return true;
  }).argv;


module.exports = argv;