const fs = require("fs");
const colors = require('colors');
//funion con async
// const crearArchivo = async (base = 5) => {
//     try{
//         console.log('==================')
//         console.log(' tabla del', base)
//         console.log('==================')
//         let salida = '';
//         let name = ""

//         for(var i =0; i<=10; i++){

//             salida += `${base} * ${i} = ${base*i} \n`;

//         }

//         name = `tabla-${base}.txt`
//          fs.writeFileSync(name,salida)
//          console.log('tabla creada')
//         //  (err) => {
//         // if(err) throw err;
//         // console.log('tabla creada')
//         // })
//         console.log(salida)

//         return name

//     }catch(err){
//         throw(err)
//     }

// }

// funcion con promesa
const crearArchivo = (base = 1, listar = false, hasta) => {
  return new Promise((resolve, reject) => {
    let salida, consola = "";
    let name = "";

    for (var i = 0; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i} \n`;
      consola += `${base} ${'X'.green} ${i} = ${base * i} \n`;
    }

    name = `tabla-${base}.txt`;
    fs.writeFileSync('salida/'+ name, salida);
    console.log("tabla creada");

    if (listar) {
      console.log("==================");
      console.log(" tabla del", base);
      console.log("==================");
      console.log(consola);
    }

    resolve(name);
  });
};

module.exports = {
  crearArchivo,
};
