import tabulate from 'tabulate';
const raices_multiples = (consFunction, xi, tol, consFunctionSD, consFunctionTD, maxIter, tError) => {
  console.log(f, 'funcion');
  let f = Function('x', 'return ' + consFunction);
  let fi = Function('x', 'return ' + consFunctionSD);
  let fii = Function('x', 'return ' + consFunctionTD);
  var error, headers, ite, table, xn;
  headers = ['ite', 'x', 'f(x)', 'fi(x)', 'fii(x)', 'Error'];
  table = [];

  if (f(xi) === 0) {
    console.log(`El valor ${xi} es raiz`);
  } else {
    ite = 0;
    error = tol + 1;
    table.push([ite, xi, f(xi), fi(xi), fii(xi), error]);

    while (error >= tol && ite < maxIter) {
      xn = xi - (f(xi) * fi(xi)) / (Math.pow(fi(xi), 2) - f(xi) * fii(xi));

      if (tError === 0) {
        error = Math.abs(xn - xi);
      } else {
        error = Math.abs((xn - xi) / xn);
      }

      ite += 1;
      xi = xn;
      table.push([ite, xi, f(xi), fi(xi), fii(xi), error]);
    }

    console.log(tabulate(table, headers));
    

    if (error < tol) {
      console.log(`${xi} es raiz con tolerancia ${tol + '.1E'} en iter ${ite}`);
    } else {
      console.log('No llegamos');
    }
  }
};

// f = (x) => {
//   return math.exp(-x) - Math.pow(x, 2) * math.cos(2 * x - 4) + 6 * x + 3;
// };

// fi = (x) => {
//   return -math.exp(-x) - 2 * x * math.cos(2 * x - 4) - 2 * Math.pow(x, 2) * math.sin(2 * x - 4) + 6;
// };

// fii = (x) => {
//   return (
//     math.exp(-x) -
//     4 * Math.pow(x, 2) * math.cos(2 * x - 4) +
//     8 * x * math.sin(2 * x - 4) -
//     2 * math.cos(2 * x - 4)
//   );
// };

// f = (x) => {
//   return x * math.exp(x) - math.exp(x) + 1;
// };

// fi = (x) => {
//   return x * math.exp(x);
// };

// fii = (x) => {
//   return x * math.exp(x) + math.exp(x);
// };

// raices_multiples(f, 0.5, 5e-7, fi, fii, 1000, 0);
module.exports = {
  raices_multiples,
};
