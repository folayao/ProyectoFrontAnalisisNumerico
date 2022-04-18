import tabulate from 'tabulate';
import TableGenerator from './../../components/TableGenerator';
function PuntoFijo({ constFunction, xi, tol, constFunctionG, maxIter, tError }) {
  let f = Function('x', 'return ' + constFunction);
  let g = Function('x', 'return ' + constFunctionG);
  var error, headers, ite, table, xn;
  headers = ['ite', 'x', 'Error'];
  table = [];

  if (f(xi) === 0) {
    console.log(`El valor ${xi} es raiz`);
    return <h1>{`El valor ${xi} es raiz`}</h1>;
  } else {
    ite = 0;
    error = tol + 1;
    table.push([ite, xi, error]);

    while (error >= tol && ite < maxIter) {
      xn = g(xi);

      if (tError === 0) {
        error = abs(xn - xi);
      } else {
        error = abs((xn - xi) / xn);
      }

      ite += 1;
      xi = xn;
      table.push([ite, xi, error]);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);
    if (error < tol) {
      console.log(`${xi} es raiz con tolerancia ${format(tol, '.1E')} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.streeam} />;
    } else {
      console.log('No llegamos');
      return <h1>No Llegamos</h1>;
    }
  }
}

export default PuntoFijo;
