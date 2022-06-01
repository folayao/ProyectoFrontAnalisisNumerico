import { eliminacion_gausiana_piv_parcial } from './egpp';
import { arrayX, arrayY } from '../jsontoarray';
import {zeros} from 'mathjs';

function splines_lineal({json, long}) {
  let first = arrayX(json, long);
  let x = first.ar;
  let y = arrayY(first.objeto).ar;
  let cont, contX, m, matriz, n, vector_terminos;
  n = x.length - 1;
  m = 2 * n;
  cont = 0;
  contX = 0;

  matriz = zeros([m, m]);
  vector_terminos = zeros(m);
  matriz[0][0] = x[contX];
  matriz[0][1] = 1;
  vector_terminos[0] = y[contX];
  contX += 1;

  for (var i = 1; i < 2 * n; i += 1) {
    matriz[i][cont * 2] = x[contX];
    matriz[i][cont * 2 + 1] = 1;
    vector_terminos[i] = y[contX];

    if (i % 2 === 0) {
      contX += 1;
    }

    if (i % 2 !== 0) {
      cont += 1;
    }
  }

  console.log(matriz);
  console.log();
  console.log(vector_terminos);
  console.log();
  x = eliminacion_gausiana_piv_parcial(matriz, vector_terminos);
  console.log(x);
  return (
    <>
    <ul>
      {x.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
    </>
  );
}

export default splines_lineal

// X = [1, 2, 4];
// Y = [141, 112.7, 125.63];
// splines_lineal(X, Y);
