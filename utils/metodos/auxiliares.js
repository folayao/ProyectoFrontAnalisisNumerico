import * as math from 'Math';

function eye(n) {
  var filai, x;
  x = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    filai = [];

    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      if (i === j) {
        filai.append(1);
      } else {
        filai.append(0);
      }
    }

    x.append(filai);
  }

  return x;
}

function zero(n) {
  var filai, x;
  x = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    filai = [];

    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      filai.append(0);
    }

    x.append(filai);
  }

  return x;
}

function dot(x, xi, xf, y, yi, yf) {
  var dif, sum;
  sum = 0;
  dif = xi - yi;

  for (var i = xi, _pj_a = xf + 1; i < _pj_a; i += 1) {
    sum += x[i] * y[i - dif];
  }

  return sum;
}

function dotM(x, y) {
  var n, sum;
  n = x.length;
  sum = 0;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    sum += x[i] * y[i];
  }

  return sum;
}

function columna(A, col) {
  var column;
  column = [];

  for (var i = 0, _pj_a = A.length; i < _pj_a; i += 1) {
    column.append(A[i][col]);
  }

  return column;
}

function factorizar(A) {
  var D, L, U, n;
  n = A.length;
  D = zero(n);
  L = zero(n);
  U = zero(n);

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      if (i === j) {
        D[i][j] = A[i][j];
      } else {
        if (i > j) {
          L[i][j] = -A[i][j];
        } else {
          U[i][j] = -A[i][j];
        }
      }
    }
  }

  return [D, L, U];
}

function inversa_D(D) {
  var n;
  n = D.length;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    D[i][i] = 1 / D[i][i];
  }

  return D;
}

function suma_vectores(a, b) {
  var n, y;
  n = a.length;
  y = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    y.append(a[i] + b[i]);
  }

  return y;
}

function resta_vectores(a, b) {
  var n, y;
  n = a.length;
  y = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    y.append(a[i] - b[i]);
  }

  return y;
}

function suma_matrices(A, B) {
  var Y, n;
  n = A.length;
  Y = zero(n);

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      Y[i][j] = A[i][j] + B[i][j];
    }
  }

  return Y;
}

function resta_matrices(A, B) {
  var Y, n;
  n = A.length;
  Y = zero(n);

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      Y[i][j] = A[i][j] - B[i][j];
    }
  }

  return Y;
}

function prod_matrices(A, B) {
  var Y, n;
  n = A.length;
  Y = zero(n);

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      Y[i][j] = dot(A[i], columna(B, j));
    }
  }

  return Y;
}

function prod_matriz_vector(A, b) {
  var n, y;
  n = A.length;
  y = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    y.append(dot(A[i], b));
  }

  return y;
}

function norma(a) {
  var n, total;
  n = a.length;
  total = 0;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    total += a[i] * a[i];
  }

  total = math.sqrt(total);
  return total;
}

function ampliar(A, b) {
  var Ab, n;
  Ab = [];
  n = A.length;

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    A[i].append(b[i]);
  }

  Ab = A;
  return Ab;
}
