function pivoteo_parcial(Ab, n, k) {
  var fila2, mayor;
  mayor = fila2 = 0;

  for (var i = k, _pj_a = n; i < _pj_a; i += 1) {
    fila2 = abs(mayor) < abs(Ab[i][k]) ? i : fila2;
    mayor = abs(mayor) < abs(Ab[i][k]) ? Ab[i][k] : mayor;
  }

  return [mayor, fila2];
}

function cambio_fila(Ab, fila1, fila2) {
  var Ab_aux;
  Ab_aux = Ab.copy();
  Ab[fila1] = Ab[fila2];
  Ab[fila2] = Ab_aux[fila1];
  return Ab;
}

function eliminacion_gausiana_piv_parcial(A, b, n) {
  var Ab, M, fila2, mayor, sum, x;
  console.log("Empezo el metodo:");
  Ab = [];
  x = [];
  sum = 0;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    A[i].append(b[i]);
    x.append(0);
  }

  Ab = A;

  for (var k = 0, _pj_a = n; k < _pj_a; k += 1) {
    for (var i = k + 1, _pj_b = n; i < _pj_b; i += 1) {
      [mayor, fila2] = pivoteo_parcial(Ab, n, k);
      Ab = cambio_fila(Ab, k, fila2);
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
    console.log("x" + i.toString() + "=" + x[i].toString());
  }
}
