import { ampliar, zero } from './auxiliares.js';
import { eliminacion_gausiana } from './eg';
import eg from './eliminacion_gausiana';
import { arrayX, arrayY } from '../jsontoarray';

function vander_matrix(x) {
  var n, vander;
  n = x.length;
  vander = zero(n);

  for (var j = 0; j < n; j += 1) {
    for (var i = 0; i < n; i += 1) {
      vander[i][j] = Math.pow(x[i], n - 1 - j);
    }
  }

  return vander;
}

function vandermonde({ json, long }) {
  let first = arrayX(json, long);
  let x = first.ar;
  let y = arrayY(first.objeto).ar;
  console.log(x, y);
  var vander, xy;
  vander = vander_matrix(x);
  xy = ampliar(vander, y);
  let valoresAPresentar = eliminacion_gausiana(vander, y, vander.length);
  return (
    <>
      {valoresAPresentar.map((item, i) => {
        console.log('ITEM', item);
        return <p>{`x  + ${i.toString()} + = ${item.toString()}`}</p>;
      })}
    </>
  );
}

export default vandermonde;

// X = [3, 2, 6, 7];
// Y = [5, 6, 7, 1];

// vandermonde(X, Y);
