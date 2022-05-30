import { arrayA, arrayB } from '../jsontoarray';
const eliminacion_gausiana = ({ json, long }) => {
  console.log(json, long);
  const jsonA = arrayA(json, long);
  console.log(json);
  const jsonB = arrayB(json, long);
  let A = jsonA
  let b = jsonB

  
  // for (let index = 0; index < long; index++) {
  //   delete json[`VTIp${index}`];
  // }

  // console.log(json, 'JSON');

  // for (let counter = 0; counter < long; counter++) {
  //   let ar = new Array();

  // }

  // let arregloFinal = Array(long)
  //   .fill([])
  //   .map((row, indexrow) => {
  //     console.log('ROW : ', row);
  //      let arreglo = Array()
  //      Object.entries(json).forEach((element, indexcol) => {
  //       console.log(element);
  //       if (indexrow == parseInt(element[0].split('p')[1])) {
  //         console.log('Index row: ', indexrow, 'INDEX col', indexcol, 'ELEMENT[1]: ', element[1]);
  //         let ultimo = element.pop();
  //         console.log(ultimo, 'ultimo');
  //         arreglo.push(ultimo)
  //       }
  //     });
  //     return arreglo
  //   });


  // console.log('ARREGLO A', arregloFinal);





  
  console.log(A.ar, "A");
  console.log(b.ar, "b");
  let n = A.length
  
  console.log("Empezo el metodo:");
  let Ab = [];
  let x = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    A[i].push(b[i]);
    x.push(0);
  }
  Ab = A;
  
  for (let k = 0; k < n; k++) {
    for (let i = k+1; i < n; i++) {
      let M = Ab[i][k] / Ab[k][k];
      Ab[i][k] = 0;

      for (let j = k + 1; j < n+1; j++) {
        Ab[i][j] = Ab[i][j] - M * Ab[k][j];
      }
    }
  }

  console.log("Empezo el sustituci\u00f3n:");

  for (let k = n; k > 0; k--) {
    sum = 0;

    for (let j = k; j < n; j++) {
      sum += Ab[k - 1][j] * x[j];
    }

    x[k - 1] = (Ab[k - 1][n] - sum) / Ab[k - 1][k - 1];
  }

  for (let i = 0; i < n; i ++) {
    console.log("x" + i.toString() + "=" + x[i].toString());
    return <p>{`x  + ${i.toString()} + = ${x[i].toString()}`}</p>
  }
};
export default eliminacion_gausiana;
