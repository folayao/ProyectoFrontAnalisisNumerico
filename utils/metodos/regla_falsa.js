import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';

function ReglaFalsa({ xi, constFunction, xf, tol, tError }) {
  let f = Function('x', 'return ' + constFunction);
  const interceptoX = (xi, xf, yi, yf) => {
    var m;
    m = (yf - yi) / (xf - xi);
    return xi - yi / m;
  };

  var error, headers, ite, table, xm;
  headers = ['ite', 'xi', 'f(xi)', 'xm', 'f(xm)', 'xf', 'f(xf)', 'Error'];
  table = [];
  ite = 0;

  if (f(xi) * f(xf) === 0) {
    if (f(xi) === 0) {
      console.log(`xi: ${xi} es raiz`);
      return <h1>{`xi: ${xi} es raiz`}</h1>;
    } else {
      console.log(`xf: ${xf} es raiz`);
      return <h1>{`xf: ${xf} es raiz`}</h1>;
    }
  } else {
    if (f(xi) * f(xf) > 0) {
      console.log('Intervalo no valido');
      return <h1>Intervalo no valido</h1>;
    } else {
      xm = interceptoX(xi, xf, f(xi), f(xf));
      error = tol + 1;
      ite = 0;
      table.push([ite, xi, f(xi), xm, f(xm), xf, f(xf), error + '.1E']);

      while (error >= tol && f(xm) !== 0) {
        if (f(xi) * f(xm) < 0) {
          xf = xm;
        } else {
          xi = xm;
        }

        xm = interceptoX(xi, xf, f(xi), f(xf));

        if (tError === 0) {
          error = abs(xm - xi);
        } else {
          error = abs((xm - xi) / xm);
        }

        ite += 1;
        table.push([ite, xi, f(xi), xm, f(xm), xf, f(xf), error+ '.1E']);
      }

      console.log(tabulate(table, headers));
      let result = tabulate(table, headers);

      if (f(xm) === 0) {
        console.log(`El valor ${xm} es raiz en la iteracion ${ite}`);
        return <TableGenerator headers={headers} table={result} />;
      } else {
        console.log(
          `El valor ${xm} es raiz con tolerancia ${tol, '.1E'} en la iteracion ${ite}`
        );
        return (
          <h1>{`El valor ${xm} es raiz con tolerancia ${(tol, '.1E')} en la iteracion ${ite}`}</h1>
        );
      }
    }
  }
}

export default ReglaFalsa;
