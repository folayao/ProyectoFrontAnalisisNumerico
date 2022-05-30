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

  if (f(parseFloat(xi)) === 0) {
    console.log(`El valor ${xi} es raiz`);
  } else {
    ite = 0;
    error = parseFloat(tol) + 1;
    table.push([parseInt(ite), parseFloat(xi), f(parseFloat(xi)), fi(parseFloat(xi)), fii(parseFloat(xi)), parseFloat(error)]);

    while (parseFloat(error) >= parseFloat(tol) && parseInt(ite) < parseFloat(maxIter)) {
      xn = parseFloat(xi) - (f(parseFloat(xi)) * fi(parseFloat(xi))) / (Math.pow(fi(parseFloat(xi)), 2) - f(parseFloat(xi)) * fii(parseFloat(xi)));

      if (tError === 0) {
        error = Math.abs(parseFloat(xn) - parseFloat(xi));
      } else {
        error = Math.abs((parseFloat(xn) - parseFloat(xi)) / parseFloat(xn));
      }

      ite += 1;
      xi = parseFloat(xn);
      table.push([parseInt(ite), parseFloat(xi), f(parseFloat(xi)), fi(parseFloat(xi)), fii(parseFloat(xi)), error]);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);

    if (parseFloat(error) < parseFloat(tol)) {
      console.log(`${xi} es raiz con tolerancia ${tol + '.1E'} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.stream} />;
    } else {
      console.log('No llegamos');
    }
  }
};

export default raices_multiples;