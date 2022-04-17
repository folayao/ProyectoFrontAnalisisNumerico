import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';

function Newton({consFunction, xi, tol,consFunctionSD , maxIter, tError}) {
  let error, headers, ite, table, xn;
  let f = Function('x', 'return ' + consFunction);
  let fi = Function('x', 'return ' + consFunctionSD);
  headers = ['ite', 'x', 'f(x)', 'fi(x)', 'Error'];
  table = [];

  if (f(xi) === 0) {
    console.log(`El valor ${xi} es raiz`);
    return <h1>{`El valor ${xi} es raiz`}</h1>
  } else {
    ite = 0;
    error = tol + 1;
    table.push([ite, xi, f(xi), fi(xi), error+ '.1']);

    while (error >= tol && ite < maxIter) {
      xn = xi - f(xi) / fi(xi);

      if (tError === 0) {
        error = abs(xn - xi);
      } else {
        error = abs((xn - xi) / xn);
      }

      ite += 1;
      xi = xn;
      table.push([ite, xi, f(xi), fi(xi), error+ '.1']);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers)

    if (error < tol) {
      console.log(`${xi} es raiz con tolerancia ${tol +'.1E'} en iter ${ite}`);
      return <TableGenerator headers={headers} table={result.stream}/>
    } else {
      console.log('No llegamos');
        return <h1>NO LLEGAMOS</h1>
    }
  }
}

export default Newton