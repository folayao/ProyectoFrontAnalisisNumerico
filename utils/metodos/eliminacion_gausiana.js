import { arrayA, arrayB } from '../jsontoarray';
const eliminacion_gausiana = ({ json, long }) => {
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject,long);
  let b = jsonB.ar;
  let n = A.length;
  let Ab = [];
  let x = [];
  let sum = 0;

  console.log(".........................................::");
  console.log(A, b);
  console.log(".........................................::");
  for (let i = 0; i < n; i++) {
    A[i].push(b[i]);
    x.push(0);
  }
  Ab = A;

  for (let k = 0; k < n; k++) {
    for (let i = k + 1; i < n; i++) {
      let M = Ab[i][k] / Ab[k][k];
      Ab[i][k] = 0;

      for (let j = k + 1; j < n + 1; j++) {
        Ab[i][j] = Ab[i][j] - M * Ab[k][j];
      }
    }
  }

  for (let k = n; k > 0; k--) {
    sum = 0;

    for (let j = k; j < n; j++) {
      sum += Ab[k - 1][j] * x[j];
    }

    x[k - 1] = (Ab[k - 1][n] - sum) / Ab[k - 1][k - 1];
  }
  console.log(x, "X");
  return (
    <>
      {x.map((item, i) => {
        console.log("ITEM", item);
        return <p>{`x+${i.toString()} + = ${item.toString()}`}</p>;
      })}
    </>
  );

  // for (let i = 0; i < n; i++) {
  //   console.log('x' + i.toString() + '=' + x[i].toString());
  //   return <p>{`x  + ${i.toString()} + = ${x[i].toString()}`}</p>;
  // }
};
export default eliminacion_gausiana;
