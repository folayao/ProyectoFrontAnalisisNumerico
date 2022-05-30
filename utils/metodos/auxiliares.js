

//Obtiene la matriz identidad
function eye(n) {
  var filai, x;
  x = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    filai = [];

    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      if (i === j) {
        filai.push(1);
      } else {
        filai.push(0);
      }
    }

    x.push(filai);
  }

  return x;
}

function zero(n) {
  var filai, x;
  x = [];

  for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
    filai = [];

    for (var j = 0, _pj_b = n; j < _pj_b; j += 1) {
      filai.push(0);
    }

    x.push(filai);
  }

  return x;
}

function zeroV(n){
  var x = []
  for(var i = 0; i < n; i++){
    x.push(0) 
  }
  return x
}
function dot(x, xi, xf, y, yi, yf) {
  var dif, sum;
  sum = 0;
  dif = xi - yi;

  for (var i = xi; i < xf+1; i++) {
    sum += x[i] * y[i - dif];
  }
  return sum;
}

function dotM(x, y) {
  var n, sum;
  n = x.length;
  sum = 0;

  for (var i = 0; i < n; i++) {
    sum += x[i] * y[i];
  }

  return sum;
}

function columna(A, col) {
  var column;
  column = [];

  for (var i = 0, _pj_a = A.length; i < _pj_a; i += 1) {
    column.push(A[i][col]);
  }

  return column;
}

function factorizar(A) {
  var D, L, U, n;
  n = A.length;
  D = zero(n);
  L = zero(n);
  U = zero(n);

  for (var i = 0; i <  n; i++) {
    for (var j = 0; j < n; j++) {
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

  for (var i = 0; i < n; i++) {
    D[i][i] = 1 / D[i][i];
  }

  return D;
}

function suma_vectores(a, b) {
  var n, y;
  n = a.length;
  y = [];

  for (var i = 0; i < n; i++) {
    y.push(a[i] + b[i]);
  }

  return y;
}

function resta_vectores(a, b) {
  var n, y;
  n = a.length;
  y = [];

  for (var i = 0; i < n; i++) {
    y.push(a[i] - b[i]);
  }

  return y;
}

function suma_matrices(A, B) {
  var Y, n;
  n = A.length;
  Y = zero(n);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
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

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j ++) {
      Y[i][j] = dotM(A[i], columna(B, j));
    }
  }

  return Y;
}


function prod_matriz_vector(A, b) {
  var n, y;
  n = A.length;
  y = [];

  for (var i = 0; i < n; i++) {
    y.push(dotM(A[i], b));
  }

  return y;
}

function norma(a) {
  var n, total;
  n = a.length;
  total = 0;

  for (var i = 0; i < n; i++) {
    total += a[i] * a[i];
  }

  total = Math.sqrt(total);
  return total;
}

function ampliar(A, b) {
  var Ab, n;
  Ab = [];
  n = A.length;

  for (var i = 0; i < n; i++) {
    A[i].push(b[i]);
  }

  Ab = A;
  return Ab;
}

export {
  ampliar,
  eye,
  zero,
  norma,
  prod_matrices,
  prod_matriz_vector,
  suma_matrices,
  suma_vectores,
  resta_matrices,
  resta_vectores,
  factorizar,
  inversa_D,
  dot,
  dotM,
  columna,
  zeroV,
};