import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';

function ReglaFalsa({ xi, constFunction, xf, tol, tError }) {
  let f = Function('x', 'return ' + constFunction);
  const interceptoX = (xi, xf, yi, yf) => {
    var m;
    m = (parseFloat(yf) - parseFloat(yi)) / (parseFloat(xf) - parseFloat(xi));
    return parseFloat(xi) - parseFloat(yi) / parseFloat(m);
  };

  var error, headers, ite, table, xm;
  headers = ['ite', 'xi', 'f(xi)', 'xm', 'f(xm)', 'xf', 'f(xf)', 'Error'];
  table = [];
  ite = 0;

  if (f(parseFloat(xi)) * f(parseFloat(xf)) === 0) {
    if (f(parseFloat(xi)) === 0) {
      console.log(`xi: ${xi} es raiz`);
      return <h1>{`xi: ${xi} es raiz`}</h1>;
    } else {
      console.log(`xf: ${xf} es raiz`);
      return <h1>{`xf: ${xf} es raiz`}</h1>;
    }
  } else {
    if (f(parseFloat(xi)) * f(parseFloat(xf)) > 0) {
      console.log('Intervalo no valido');
      return <h1>Intervalo no valido</h1>;
    } else {
      xm = interceptoX(parseFloat(xi), parseFloat(xf), f(parseFloat(xi)), f(parseFloat(xf)));
      error = parseFloat(tol) + 1;
      ite = 0;
      table.push([
        parseFloat(ite),
        parseFloat(xi),
        f(parseFloat(xi)),
        parseFloat(xm),
        f(parseFloat(xm)),
        parseFloat(xf),
        f(parseFloat(xf)),
        parseFloat(error) + '.1E',
      ]);

      while (parseFloat(error) >= parseFloat(tol) && f(parseFloat(xm)) !== 0) {
        if (f(xi) * f(parseFloat(xm)) < 0) {
          xf = parseFloat(xm);
        } else {
          xi = parseFloat(xm);
        }

        xm = interceptoX(parseFloat(xi), parseFloat(xf), f(parseFloat(xi)), f(parseFloat(xf)));

        if (tError === 0) {
          error = abs(parseFloat(xm) - parseFloat(xi));
        } else {
          error = abs((parseFloat(xm) - parseFloat(xi)) / parseFloat(xm));
        }

        ite += 1;
        table.push([parseInt(ite), parseFloat(xi), f(parseFloat(xi)), parseFloat(xm), f(parseFloat(xm)), parseFloat(xf), f(parseFloat(xf)), error + '.1E']);
      }

      console.log(tabulate(table, headers));
      let result = tabulate(table, headers);

      if (f(parseFloat(xm)) === 0) {
        console.log(`El valor ${xm} es raiz en la iteracion ${ite}`);
        return <TableGenerator headers={headers} table={result} />;
      } else {
        console.log(`El valor ${xm} es raiz con tolerancia ${(tol, '.1E')} en la iteracion ${ite}`);
        return (
          <h1>{`El valor ${xm} es raiz con tolerancia ${(tol, '.1E')} en la iteracion ${ite}`}</h1>
        );
      }
    }
  }
}

export default ReglaFalsa;
