var L, b, z;

function sustitucion_progresiva(L, n, b) {
  var sum;
  z = [];
  sum = 0;

  for (var k = 0; k < n; k++) {
    sum = 0;

    for (var j = 0; j < k; j ++) {
      sum += L[k][j] * z[j];
    }

    z.push((b[k] - sum) / L[k][k]);
  }

  return z;
}

// L = [[1, 0, 0, 0], 
//      [0.75, 1, 0, 0], 
//      [0.5, 0.15, 1, 0], 
//      [0.25, -0.28, 0.19, 1]];
// b = [20, 18, 31, 12];
// z = sustitucion_progresiva(L, 4, b);
// console.log(z);


function sustitucion_regresivaLU(U, z) {
  var n, sum, x;
  n = U.length;
  x = [];

  for (var i = 0; i < n; i++) {
    U[i].push(z[i]);
    x.push(0);
  }

  for (var k = n; k > 0; k--) {
    sum = 0;

    for (var j = k; j < n; j++) {
      sum += U[k - 1][j] * x[j];
    }

    x[k - 1] = (U[k - 1][n] - sum) / U[k - 1][k - 1];
  }

  return x;
}

var U = [
    [1,2,5,10,12],
    [0,1,6,8,30],
    [0,0,1,14,6],
    [0,0,0,1,4],
]

var b = [12,30,6,4]

// r = sustitucion_regresivaLU(U,b)
// console.log(r)


export {sustitucion_progresiva, sustitucion_regresivaLU};