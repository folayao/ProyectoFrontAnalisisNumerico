function pivoteo_parcial(Ab, n, k) {
  var fila2, mayor;
  mayor = fila2 = 0;

  for (var i = k; i < n; i++) {
    fila2 = Math.abs(mayor) < Math.abs(Ab[i][k]) ? i : fila2;
    mayor = Math.abs(mayor) < Math.abs(Ab[i][k]) ? Ab[i][k] : mayor;
  }

  return [mayor, fila2];
}

function cambio_fila(Ab, fila1, fila2) {
  var Ab_aux;
  Ab_aux = Object.values(Ab);
  Ab[fila1] = Ab[fila2];
  Ab[fila2] = Ab_aux[fila1];
  return Ab;
}

function eliminacion_gausiana_piv_parcial(A, b) {
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

  for (var i = 0; i < n; i++) {
    console.log("x" + i.toString() + "=" + x[i].toString());
  }

  return x;
}

// let A = [
//   [4,-1,0,3],
//   [1,15.5,3,8],
//   [0,-1.3,-4,1.1],
//   [14,5,-2,30],
// ]

// let b = [1,1,1,1]

// eliminacion_gausiana_piv_parcial(A,b)

export {
  cambio_fila,
  pivoteo_parcial,
  eliminacion_gausiana_piv_parcial,
}