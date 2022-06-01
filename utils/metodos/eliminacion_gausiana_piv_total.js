import { arrayA, arrayB } from '../jsontoarray';
 
function pivoteo_total(Ab, n, k) {
  var columna2, fila2, mayor;
  mayor = fila2 = columna2 = 0;

  for (var i = k; i < n; i += 1) {
    for (var j = k; j < n; j += 1) {
      [fila2, columna2] = Math.abs(mayor) < Math.abs(Ab[i][j]) ? [i, j] : [fila2, columna2];
      mayor = Math.abs(mayor) < Math.abs(Ab[i][j]) ? Ab[i][j] : mayor;
    }
  }

  return [mayor, fila2, columna2];
}

function cambio_fila(Ab, fila1, fila2) {
  var Ab_aux;
  Ab_aux = Object.values(Ab);
  Ab[fila1] = Ab[fila2];
  Ab[fila2] = Ab_aux[fila1];
  return Ab;
}

function cambio_columna(Ab, columna1, columna2, x_aux, n) {
  var columna_aux, x_aux_copy;
  columna_aux = 0;
  x_aux_copy = Object.values(x_aux);
  x_aux[columna1] = x_aux[columna2];
  x_aux[columna2] = x_aux_copy[columna1];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    columna_aux = Ab[i][columna1];
    Ab[i][columna1] = Ab[i][columna2];
    Ab[i][columna2] = columna_aux;
  }

  return Ab;
}

function eliminacion_gausiana_piv_total({json, long}) {
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject,long);
  let b = jsonB.ar;
  var Ab, M, columna2, fila2, mayor, sum, x, x_aux,n;
  console.log("Empezo el metodo:");
  n = A.length
  Ab = [];
  x = [];
  x_aux = [];

  for (var i = 0; i < n; i += 1) {
    x_aux.push(i);
  }

  sum = 0;

  for (var i = 0; i < n; i += 1) {
    A[i].push(b[i]);
    x.push(0);
  }

  Ab = A;

  for (var k = 0; k < n; k += 1) {
    for (var i = k + 1; i < n; i += 1) {
      ma_fila_colum = pivoteo_total(Ab, n, k);
      Ab = cambio_fila(Ab, k, ma_fila_colum[1]);
      Ab = cambio_columna(Ab, k, ma_fila_colum[2], x_aux, n);
      M = Ab[i][k] / Ab[k][k];
      Ab[i][k] = 0;

      for (var j = k + 1; j < n+1; j += 1) {
        Ab[i][j] = Ab[i][j] - M * Ab[k][j];
      }
    }
  }

  console.log("Empezo el sustituci\u00f3n:");

  for (var k = n; k > 0; k += -1) {
    sum = 0;

    for (var j = k; j < n; j += 1) {
      sum += Ab[k - 1][j] * x[j];
    }

    x[k - 1] = (Ab[k - 1][n] - sum) / Ab[k - 1][k - 1];
  }

  return (
    <>
      {x.map((item, i) => {
        return <p>{`x+${i.toString()} + = ${item.toString()}`}</p>;
      })}
    </>
  );
}

export default eliminacion_gausiana_piv_total;

