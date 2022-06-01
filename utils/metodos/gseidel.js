import { factorizar, resta_matrices } from './auxiliares.js';
import { norma, prod_matrices, prod_matriz_vector, resta_vectores, suma_matrices, suma_vectores } from './auxiliares.js';
import { arrayA2, arrayX2, arrayVTIB } from '../jsontoarray';
import {matrix, inv, multiply, norm, add, subtract} from 'mathjs'
function gseidel({json,long, iter, tol}) {
  const jsonA = arrayA2(json, long);
  let bObject = jsonA.objeto;
  const jsonB = arrayVTIB(bObject, long);
  let xObject = jsonB.objeto;
  const jsonX = arrayX2(xObject, long);
  let A = jsonA.ar;
  let b = jsonB.ar;
  let x = jsonX.ar;
  var C, D, DL, DLi, L, T, U, cont, error, x_ant;
  [D, L, U] = factorizar(A);
  cont = 0;
  error = tol + 1;
  DL = resta_matrices(D, L);
  DL = matrix(DL); //  console.log(DL) 
  DLi = inv(DL);   //  console.log(DLi)
  T = multiply(DLi,U);
  C = multiply(DLi, b);
  x_ant = x;
  console.log(T);
  console.log(C);
  while (error > tol && cont < iter) {
    x = add(multiply(T, x), C);
    error = norm(subtract(x, x_ant));
    x_ant = x;
    cont += 1;
  }

  console.log(`Ite: ${cont} 
  x: ${x} 
  Error: ${error}`);
  return (
    <>
      <ul>
        <li>{`Ite: ${cont}`}</li>
        <li>{`x: ${x} `}</li>
        <li>{`Error: ${error}`}</li>
      </ul>
    </>
  );
}
export default gseidel;

// A = [[4, -1, 0, 3], [1, 15.5, 3, 8], [0, -1.3, -4, 1.1], [14, 5, -2, 30]];
// b = [1, 1, 1, 1];
// gseidel(A, b, [2, 2, 2, 2], 20, 0.0005);