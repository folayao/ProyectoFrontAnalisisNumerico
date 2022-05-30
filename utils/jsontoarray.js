const arrayA = (json, long) => {
  let objeto = {};
  for (let index = 0; index < long; index++) {
    let indexx = `VTIp${index}`;
    objeto[indexx] = json[`VTIp${index}`];
  }

  for (let index = 0; index < long; index++) {
    delete json[`VTIp${index}`];
  }
  console.log(json, long);

  let arregloFinal = Array(parseInt(long))
    .fill([])
    .map((row, indexrow) => {
      let arreglo = new Array();
      Object.entries(json).forEach((element) => {
        if (indexrow == parseInt(element[0].split('p')[1])) {
            console.log("PARSE ELEMENT", element[0], element[1]);
          let ultimo = element.pop();
          console.log(ultimo);
          arreglo.push(parseFloat(ultimo));
        }
      });
      return arreglo;
    });
    console.log(arregloFinal);
  return { ar: arregloFinal, objeto: objeto };
};

const arrayB = (json, long) => {
    console.log(json, "FAFsd");
  let arreglo = Array()
  Object.values(json).map((element) => {
      console.log(element);
    arreglo.push(parseFloat(element));
  });
  console.log(arreglo);
  return { ar: arreglo};
};

export { arrayA, arrayB };
