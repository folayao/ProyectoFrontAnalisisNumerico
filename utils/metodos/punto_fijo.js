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
    error = parseFloat(tol) + 1;
    table.push([parseInt(ite), parseFloat(xi), parseFloat(error)]);

    while (parseFloat(error) >= parseFloat(tol) && parseInt(ite) < parseInt(maxIter)) {
      xn = g(parseFloat(xi));

      if (tError === 0) {
        error = abs(parseFloat(xn) - parseFloat(xi));
      } else {
        error = abs((parseFloat(xn) - parseFloat(xi)) / parseFloat(xn));
      }

      ite += 1;
      xi = parseFloat(xn);
      table.push([parseInt(ite),parseFloat(xi), parseFloat(error)]);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);
    if (parseFloat(error) < parseFloat(tol)) {
      console.log(`${xi} es raiz con tolerancia ${format(tol, '.1E')} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.streeam} />;
    } else {
      console.log('No llegamos');
      return <h1>No Llegamos</h1>;
    }
  }
}

export default PuntoFijo;
