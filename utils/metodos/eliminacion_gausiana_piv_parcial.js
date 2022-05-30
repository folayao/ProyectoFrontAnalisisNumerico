import { arrayA, arrayB } from '../jsontoarray';

export function pivoteo_parcial(Ab, n, k) {
  var fila2, mayor;
  mayor = fila2 = 0;

  for (var i = k; i < n; i++) {
    fila2 = Math.abs(mayor) < Math.abs(Ab[i][k]) ? i : fila2;
    mayor = Math.abs(mayor) < Math.abs(Ab[i][k]) ? Ab[i][k] : mayor;
  }

  return [mayor, fila2];
}

export function cambio_fila(Ab, fila1, fila2) {
  var Ab_aux;
  Ab_aux = Object.values(Ab);
  Ab[fila1] = Ab[fila2];
  Ab[fila2] = Ab_aux[fila1];
  return Ab;
}

function eliminacion_gausiana_piv_parcial({json, long}) {
  console.log(json);
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject,long);
  let b = jsonB.ar;
  var Ab, M, fila2, mayor, sum, x,n;

  console.log("Empezo el metodo:");
  Ab = [];
  x = [];
  sum = 0;
  n = A.length;

  for (var i = 0; i < n; i ++) {
    A[i].push(b[i]);
    x.push(0);
  }

  Ab = A;

  for (var k = 0; k < n; k ++) {
    for (var i = k + 1; i < n; i++) {
      var arr = pivoteo_parcial(Ab, n, k);
      mayor = arr[0]
      fila2 = arr[1]
      Ab = cambio_fila(Ab, k, fila2);
      M = Ab[i][k] / Ab[k][k];
      Ab[i][k] = 0;

      for (var j = k + 1; j < n+1; j++) {
        Ab[i][j] = Ab[i][j] - M * Ab[k][j];
      }
    }
  }

  console.log("Empezo el sustituci\u00f3n:");

  for (var k = n; k > 0; k--) {
    sum = 0;

    for (var j = k; j < n; j ++) {
      sum += Ab[k - 1][j] * x[j];
    }

    x[k - 1] = (Ab[k - 1][n] - sum) / Ab[k - 1][k - 1];
  }

  return (
    <>
      {x.map((item, i) => {
        console.log("ITEM", item);
        return <p>{`x  + ${i.toString()} + = ${item.toString()}`}</p>;
      })}
    </>
  );
}
export default eliminacion_gausiana_piv_parcial;
// let A = [
//   [4,-1,0,3],
//   [1,15.5,3,8],
//   [0,-1.3,-4,1.1],
//   [14,5,-2,30],
// ]

