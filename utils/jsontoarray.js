const arrayA = (json, long) => {
  let arregloA = new Array();
  for (let index = 0; index < long; index++) {
    delete json[`VTIp${index}`];
  }

  console.log(json, 'JSON');

  for (let counter = 0; counter < long; counter++) {
    let ar = new Array();

    arregloA.push(ar);
    console.log(arregloA);
  }

  let arregloFinal = Array(long)
    .fill([])
    .map((row, indexrow) => {
      console.log('ROW : ', row);
       let arreglo = Array()
       Object.entries(json).forEach((element, indexcol) => {
        console.log(element);
        if (indexrow == parseInt(element[0].split('p')[1])) {
          console.log('Index row: ', indexrow, 'INDEX col', indexcol, 'ELEMENT[1]: ', element[1]);
          let ultimo = element.pop();
          console.log(ultimo, 'ultimo');
          arreglo.push(ultimo)
        }
      });
      return arreglo
    });


  console.log('ARREGLO A', arregloFinal);
  return arregloA;
};

const arrayB = (json, long) => {
  let arreglob = [];

  for (let index = 0; index < long; index++) {
    Object.entries(json).forEach((ent) => {
      let row = ent[0].split('-');
      console.log(ent[0], ent[0].includes('VTI'), 'B');

      if (ent[0].includes('VTI')) {
        arreglob.push(parseFloat(ent[1]));
      }
    });
  }
  console.log('ARREGLO B', arreglob);
  return arreglob;
};

export { arrayA, arrayB };
