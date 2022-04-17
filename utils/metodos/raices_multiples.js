import tabulate from 'tabulate';
import TableGenerator from './../../components/TableGenerator';
const raices_multiples = ({
  consFunction,
  xi,
  tol,
  consFunctionSD,
  consFunctionTD,
  maxIter,
  tError
}) => {
  console.log('_____ raices multiples js ______');
  console.log(consFunction, xi, tol, consFunctionSD, consFunctionTD, maxIter, tError);
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
    let result = tabulate(table, headers);

    if (error < tol) {
      console.log(`${xi} es raiz con tolerancia ${tol + '.1E'} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.stream} />;
    } else {
      console.log('No llegamos');
    }
  }
};

export default raices_multiples;