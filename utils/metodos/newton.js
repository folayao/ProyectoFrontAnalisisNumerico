import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';

function Newton({ consFunction, xi, tol, consFunctionSD, maxIter, tError }) {
  let error, headers, ite, table, xn;
  let f = Function('x', 'return ' + consFunction);
  let fi = Function('x', 'return ' + consFunctionSD);
  headers = ['ite', 'x', 'f(x)', 'fi(x)', 'Error'];
  table = [];

  if (f(xi) === 0) {
    console.log(`El valor ${xi} es raiz`);
    return <h1>{`El valor ${xi} es raiz`}</h1>;
  } else {
    ite = 0;
    error = parseFloat(tol) + 1;
    table.push([ite, xi, f(xi), fi(xi), error + '.1']);

    while (error >= parseFloat(tol) && parseFloat(ite) < parseFloat(maxIter)) {
      xn = parseFloat(xi) - f(parseFloat(xi)) / fi(parseFloat(xi));

      if (tError === 0) {
        error = Math.abs(parseFloat(xn) - parseFloat(xi));
      } else {
        error = Math.abs((parseFloat(xn) - parseFloat(xi)) / parseFloat(xn));
      }

      ite += 1;
      xi = parseFloat(xn);
      table.push([parseFloat(ite), parseFloat(xi), f(parseFloat(xi)), fi(parseFloat(xi)), error + '.1']);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);

    if (error < tol) {
      console.log(`${xi} es raiz con tolerancia ${tol + '.1E'} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.stream} />;
    } else {
      console.log('No llegamos');
      return <h1>NO LLEGAMOS</h1>;
    }
  }
}

export default Newton;
