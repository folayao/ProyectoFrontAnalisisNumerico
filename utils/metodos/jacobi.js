import { factorizar, inversa_D } from './auxiliares.js';
import {
  norma,
  prod_matrices,
  prod_matriz_vector,
  resta_vectores,
  suma_matrices,
  suma_vectores,
} from './auxiliares.js';
import { arrayA2, arrayX2, arrayVTIB } from '../jsontoarray';

function jacobi({ json, long, iter, tol }) {
  const jsonA = arrayA2(json, long);
  let bObject = jsonA.objeto;
  const jsonB = arrayVTIB(bObject, long);
  let xObject = jsonB.objeto;
  const jsonX = arrayX2(xObject, long);
  let A = jsonA.ar;
  let b = jsonB.ar;
  let x = jsonX.ar;
  console.log('A', A);
  console.log('B', b);
  console.log('x', x);

  var C, D, Di, L, T, U, cont, error, x_ant;
  var arr = factorizar(A);
  D = arr[0];
  L = arr[1];
  U = arr[2];
  cont = 0;
  error = tol + 1;
  Di = inversa_D(D);
  T = prod_matrices(Di, suma_matrices(L, U));
  C = prod_matriz_vector(Di, b);
  x_ant = x;

  while (error > tol && cont < iter) {
    x = suma_vectores(prod_matriz_vector(T, x), C);
    error = norma(resta_vectores(x, x_ant));
    x_ant = x;
    cont += 1;
  }

  console.log(`Ite: ${cont}
x: ${x}
Error: ${error}`);

  return (
    <>
      <table>
        <tbody>
          <td>{`Ite: ${cont}`}</td>
          <td>{`x: ${x} `}</td>
          <td>{`Error: ${error}`}</td>
        </tbody>
      </table>
    </>
  );
}

export default jacobi;

// var A = [[4, 3, -2, -7],
//      [3, 12, 8, -3],
//      [2, 3, -9, 3],
//      [1, -2, -5, 6],]

// var b = [20, 18, 31, 12]

// jacobi(A, b, [2,2,2,2], 10000, 0.0005)
