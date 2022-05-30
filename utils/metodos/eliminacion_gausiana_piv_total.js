function pivoteo_total(Ab, n, k) {
  var columna2, fila2, mayor;
  mayor = fila2 = columna2 = 0;

  for (var i = k, _pj_a = n; i < _pj_a; i += 1) {
    for (var j = k, _pj_b = n; j < _pj_b; j += 1) {
      [fila2, columna2] = abs(mayor) < abs(Ab[i][j]) ? [i, j] : [fila2, columna2];
      mayor = abs(mayor) < abs(Ab[i][j]) ? Ab[i][j] : mayor;
    }
  }

  return [mayor, fila2, columna2];
}

function cambio_fila(Ab, fila1, fila2) {
  var Ab_aux;
  Ab_aux = Ab.copy();
  Ab[fila1] = Ab[fila2];
  Ab[fila2] = Ab_aux[fila1];
  return Ab;
}

function cambio_columna(Ab, columna1, columna2, x_aux, n) {
  var columna_aux, x_aux_copy;
  columna_aux = 0;
  x_aux_copy = x_aux.copy();
  x_aux[columna1] = x_aux[columna2];
  x_aux[columna2] = x_aux_copy[columna1];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    columna_aux = Ab[i][columna1];
    Ab[i][columna1] = Ab[i][columna2];
    Ab[i][columna2] = columna_aux;
  }

  return Ab;
}

function eliminacion_gausiana_piv_total(A, b, n) {
  var Ab, M, columna2, fila2, mayor, sum, x, x_aux;
  console.log("Empezo el metodo:");
  Ab = [];
  x = [];
  x_aux = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    x_aux.append(i);
  }

  sum = 0;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    A[i].append(b[i]);
    x.append(0);
  }

  Ab = A;

  for (var k = 0, _pj_a = n; k < _pj_a; k += 1) {
    for (var i = k + 1, _pj_b = n; i < _pj_b; i += 1) {
      [mayor, fila2, columna2] = pivoteo_total(Ab, n, k);
      Ab = cambio_fila(Ab, k, fila2);
      Ab = cambio_columna(Ab, k, columna2, x_aux, n);
      M = Ab[i][k] / Ab[k][k];
      Ab[i][k] = 0;

      for (var j = k + 1, _pj_c = n + 1; j < _pj_c; j += 1) {
        Ab[i][j] = Ab[i][j] - M * Ab[k][j];
      }
    }
  }

  console.log("Empezo el sustituci\u00f3n:");

  for (var k = n, _pj_a = 0; k < _pj_a; k += -1) {
    sum = 0;

    for (var j = k, _pj_b = n; j < _pj_b; j += 1) {
      sum += Ab[k - 1][j] * x[j];
    }

    x[k - 1] = (Ab[k - 1][n] - sum) / Ab[k - 1][k - 1];
  }

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    console.log("x" + x_aux[i].toString() + "=" + x[i].toString());
  }
}
