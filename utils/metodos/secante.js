import tabulate from 'tabulate';
import TableGenerator from './../../components/TableGenerator';
function Secante({ constFunction, x0, x1, tol, maxIter, tError }) {
  let f = Function('x', 'return ' + constFunction);
  let den, error, headers, ite, table, x2;
  headers = ['ite', 'x', 'f(x)', 'Error'];
  table = [];

  if (f(x0) === 0) {
    console.log(`El valor ${x0} es raiz`);
  } else {
    ite = 0;
    error = parseFloat(tol) + 1;
    console.log(f(x1), 'f');
    den = f(x1) - f(x0);
    table.push([parseFloat(ite), parseFloat(x0), f(x0), parseFloat(error)]);
    ite += 1;
    table.push([parseFloat(ite), parseFloat(x1), f(x1), parseFloat(error)]);

    while (
      parseFloat(error) >= tol &&
      f(x1) !== 0 &&
      parseFloat(den) !== 0 &&
      parseFloat(ite) < parseFloat(maxIter)
    ) {
      x2 = parseFloat(x1) - (f(x1) * (x1 - x0)) / parseFloat(den);
      console.log(x2, 'x2');
      if (tError === 0) {
        error = Math.abs(parseFloat(x2) - parseFloat(x1));
      } else {
        error = Math.abs((parseFloat(x2) - parseFloat(x1)) / parseFloat(x2));
      }

      x0 = parseFloat(x1);
      x1 = parseFloat(x2);
      den = f(x1) - f(x0);
      console.log('DEN', den);
      ite += 1;
      console.log(parseFloat(ite), parseFloat(x1), f(x1), parseFloat(error));
      table.push([parseFloat(ite), parseFloat(x1), f(x1), parseFloat(error)]);
    }

    console.log(tabulate(table, headers));
    let result = tabulate(table, headers);

    if (f(x1) == 0) {
      console.log(`El valor ${x1} es raiz`);
    } else {
      if (parseFloat(error) < parseFloat(tol)) {
        return (
          <>
            <h1>{`${x1} es raiz con tolerancia ${format(tol, '.1E')} en iter ${ite}`}</h1>
            <TableGenerator headers={headers} table={result} />;
          </>
        );
      } else {
        if (parseFloat(den) === 0) {
          console.log(`Hay una posible raiz multiple`);
          return <h1>Hay una posible raiz multiple</h1>;
        } else {
          console.log(`No llegamos en ${ite}`);
          return <h1>{`No llegamos en ${ite}`}</h1>;
        }
      }
    }
  }
}

export default Secante;
