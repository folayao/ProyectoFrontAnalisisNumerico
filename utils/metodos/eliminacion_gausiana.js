import { arrayA, arrayB } from '../jsontoarray';
const eliminacion_gausiana = ({ json, long }) => {
  console.log(json, long);
  let jsonA = arrayA(json, long);
  let jsonB = arrayB(json, long);
  let A = jsonA
  let b = jsonB
  
  console.log(A, "A");
  console.log(b, "b");
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
