var X, Y;
import { arrayX, arrayY } from '../jsontoarray';

function dif_divididas({ json, long }) {
  let first = arrayX(json, long);
  let x = first.ar;
  let y = arrayY(first.objeto).ar;
  var den, difdiv, diferencia, fila, n, num;
  n = x.length;
  difdiv = [];

  for (var i = 0; i < n; i += 1) {
    fila = [];
    fila.push(x[i]);
    fila.push(y[i]);

    if (i === 0) {
      difdiv.push(fila);
      continue;
    }

    for (var d = 1; d < i + 1; d += 1) {
      num = fila[fila.length - 1] - difdiv[i - 1][d];
      den = x[i] - x[i - d];
      diferencia = num / den;
      fila.push(diferencia);
    }

    difdiv.push(fila);
  }

  console.log(' ' * 80, 'TABLA');

  for (var i = 0; i < difdiv.length; i += 1) {
    console.log(`${difdiv[i]}`);
  }

  return (
    <ul>
      {difdiv.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
  );
}
export default dif_divididas;

// X = [1, 1.2, 1.4, 1.6, 1.8, 2];
// Y = [0.6747, 0.8491, 1.1214, 1.4921, 1.9607, 2.5258];
// dif_divididas(X, Y);
