import tabulate from 'tabulate';
import TableGenerator from './../../components/TableGenerator';
function Secante({ constFunction, x0, x1, tol, maxIter, tError }) {
  let f = Function('x', 'return ' + constFunction);
  var den, error, headers, ite, table, x2;
  headers = ["ite", "x", "f(x)", "Error"];
  table = [];
  console.log(x0);
  if (f(x0) === 0) {
    console.log(`El valor ${x0} es raiz`);
  } else {
    ite = 0;
    error = parseFloat(tol) + 1;
    den = f(x1) - f(x0);
    table.push([ite, x0, f(x0), error]);
    ite += 1;
    table.push([ite, x1, f(x1), error]);
    while (error >= tol && f(x1) !== 0 && den !== 0 && ite < maxIter) {
      console.log(x0);
      x2 = parseFloat(x1) - f(x1) * (parseFloat(x1) - x0) / den;
      if (tError === 0) {
        console.log(error, x1, x2);
        error = Math.abs(parseFloat(x2) - parseFloat(x1));
        console.log(error);
      } else {
        error = Math.abs((x2 - x1) / x2);
      }
      x0 = x1;
      x1 = x2;
      den = f(x1) - f(x0);
      ite += 1;
      table.push([ite, x1, f(x1), error]);
    }
   
    let result = tabulate(table, headers);
  
    console.log(error);

    if (f(parseFloat(x1)) == 0) {
      console.log(`El valor ${x1} es raiz`);
    } else {
      console.log(parseFloat(error), parseFloat(tol),"IF");
      if (error < parseFloat(tol)) {
        return (
          <>
            <h1>{`${x1} es raiz con tolerancia ${tol} en iter ${ite}`}</h1>
            <TableGenerator headers={headers} table={result} />;
          </>
        );
      } else {
        if (parseFloat(den) == 0) {
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
