import tabulate from 'tabulate';
import TableGenerator from './../../components/TableGenerator';
function Secante({constFunction, x0, x1, tol, maxIter, tError}) {
  let f = Function('x', 'return ' + constFunction);
  let den, error, headers, ite, table, x2;
  headers = ['ite', 'x', 'f(x)', 'Error'];
  table = [];

  if (f(x0) === 0) {
    console.log(`El valor ${x0} es raiz`);
  } else {
    ite = 0;
    error = tol + 1;
    den = f(x1) - f(x0);
    table.push([ite, x0, f(x0), error]);
    ite += 1;
    table.push([ite, x1, f(x1), error]);

    while (error >= tol && f(x1) !== 0 && den !== 0 && ite < maxIter) {
      x2 = x1 - (f(x1) * (x1 - x0)) / den;

      if (tError === 0) {
        error = Math.abs(x2 - x1);
      } else {
        error = Math.abs((x2 - x1) / x2);
      }

      x0 = x1;
      x1 = x2;
      den = f(x1) - f(x0);
      ite += 1;
      table.push([ite, x1, f(x1), error + '.1E']);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);

    if (f(x1) === 0) {
      console.log(`El valor ${x1} es raiz`);
    } else {
      if (error < tol) {
        console.log(`${x1} es raiz con tolerancia ${format(tol, '.1E')} en iter ${ite}`);
        return <TableGenerator headers={headers} table={result} />
      } else {
        if (den === 0) {
          console.log(`Hay una posible raiz multiple`);
          return <h1>Hay una posible raiz multiple</h1>
        } else {
          console.log(`No llegamos en ${ite}`);
          return <h1>{`No llegamos en ${ite}`}</h1>
        }
      }
    }
  }
}

export default Secante;