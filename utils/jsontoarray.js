const arrayA = (json, long) => {
  for (let index = 0; index < long; index++) {
    delete json[`VTIp${index}`];
  }

  let arregloFinal = Array(long)
    .fill([])
    .map((row, indexrow) => {
      //   console.log('ROW : ', row);
      let arreglo = Array();
      Object.entries(json).forEach((element, indexcol) => {
        // console.log(element);
        if (indexrow == parseInt(element[0].split('p')[1])) {
          //   console.log('Index row: ', indexrow, 'INDEX col', indexcol, 'ELEMENT[1]: ', element[1]);
          let ultimo = element.pop();
          //   console.log(ultimo, 'ultimo');
          arreglo.push(parseFloat(ultimo));
        }
      });
      return arreglo;
    });

  console.log('ARREGLO A', arregloFinal);
  return { ar: arregloFinal };
};

const arrayB = (json, long) => {
    console.log(".------------------------------------------------------------------");
  let arreglo = Array();
  for (let i = 0; i < long; i++) {
    for (let j = 0; j < long; j++) {
      delete json[`${i}p${j}`];
    }
  }

  console.log(json);
  const obj = Object.entries(json);
  console.log(obj);
  for (let index = 0; index < long; index++) {
    // console.log(row, ent[0].includes('VTI'), row, 'B');
  }
  if (ent[0].includes('VTI')) {
    arreglo.push(parseFloat(ent[1]));
  }

  return { ar: arreglo };
};

// const arrayB = (json, long) => {
//   let arreglob = [];

//   for (let index = 0; index < long; index++) {
//     Object.entries(json).forEach((ent) => {
//       let row = ent[0].split('-');
//       console.log(ent[0], ent[0].includes('VTI'), 'B');

//       if (ent[0].includes('VTI')) {
//         arreglob.push(parseFloat(ent[1]));
//       }
//     });
//   }
//   console.log('ARREGLO B', arreglob);
//   return arreglob;
// };

export { arrayA, arrayB };
