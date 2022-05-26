import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';
// var funcion;

function Biseccion({ consFunction, xi, xf, tol, tError }) {
  console.log('_____ raices multiples js ______');
  console.log(consFunction, xi, xf, tol, tError);

  let error, headers, ite, table, xm;
  let f = Function('x', 'return ' + consFunction);

  headers = ['ite', 'xi', 'f(xi)', 'xm', 'f(xm)', 'xf', 'f(xf)', 'Error'];
  table = [];
  ite = 0;

  if (f(xi) * f(xf) === 0) {
    if (f(xi) === 0) {
      console.log(`xi: ${xi} es raiz`);
      return <h1>{`xi: ${xi} es raiz`}</h1>;
    } else {
      console.log(`xf: ${xf} es raiz`);
      return <h1>{`xi: ${xf} es raiz`}</h1>;
    }
  } else {
    if (f(xi) * f(xf) > 0) {
      console.log('Intervalo no valido');
      return <h1>Intervalo no valido, {f(xi) * f(xf)} es mayor que cero</h1>;
    } else {
      xm = (parseInt(xi) + parseInt(xf)) / 2;
      error = parseInt(tol) + 1;
      ite = 0;
      table.push([
        parseInt(ite),
        parseInt(xi),
        f(parseInt(xi)),
        parseInt(xm),
        f(parseInt(xm)),
        parseInt(xf),
        f(parseInt(xf)),
        error + '.1E',
      ]);

      while (error >= tol && f(xm) !== 0) {
        if (f(parseInt(xi)) * f(parseInt(xm)) < 0) {
          xf = parseInt(xm);
        } else {
          xi = parseInt(xm);
        }

        xm = (parseInt(xi) + parseInt(xf)) / 2;

        if (tError === 0) {
          error = abs(parseInt(xm) - parseInt(xi));
        } else {
          error = abs((parseInt(xm) - parseInt(xi)) / parseInt(xm));
        }

        ite += 1;
        table.push([parseInt(ite), parseInt(xi), f(parseInt(xi)), parseInt(xm), f(parseInt(xm)), parseInt(xf), f(parseInt(xf)), format(error, '.1E')]);
      }

      let result = tabulate(table, headers);

      if (f(xm) === 0) {
        console.log(`El valor ${xm} es raiz en la iteracion ${ite}`);
        return <TableGenerator headers={headers} table={result.stream} />;
      } else {
        console.log(
          `El valor ${xm} es raiz con tolerancia ${format(tol, '.1E')} en la iteracion ${ite}`
        );
        return (
          <h1>{`El valor ${xm} es raiz con tolerancia ${format(
            tol,
            '.1E'
          )} en la iteracion ${ite}`}</h1>
        );
      }
    }
  }
}

export default Biseccion;

// funcion = x => {
//  x^3 - 7.51 * x^2 + 18.4239 * x - 14.8331
// };

// biseccion(funcion, 3, 3.5, 5e-05, 1);
