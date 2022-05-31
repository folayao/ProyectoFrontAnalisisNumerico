import { columna, dot, eye, zero } from './auxiliares.js';
import { sustitucion_progresiva,  sustitucion_regresivaLU } from './sustituciones.js';
import {arrayA, arrayB} from '../jsontoarray'

function doolittle({json, long}) {
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject, long);
  let b = jsonB.ar;
  var L, U, n, x, z;
  n = A.length;
  L = eye(n);
  U = zero(n);

  for (var i = 0; i < n-1; i += 1) {
    for (var j = i; j < n; j += 1) {
      U[i][j] = A[i][j] - dot(L[i], 0, i - 1, columna(U, j), 0, i - 1);
    }

    for (var j = i + 1; j < n; j += 1) {
      L[j][i] = (A[j][i] - dot(L[j], 0, i - 1, columna(U, i), 0, i - 1)) / U[i][i];
    }
  }

  U[n - 1][n - 1] = A[n - 1][n - 1] - dot(L[n - 1], 0, n - 1, columna(U, n - 1), 0, n - 1);
  z = sustitucion_progresiva(L, n, b);
  x = sustitucion_regresivaLU(U, z);

  return (
    <>
      <div>
        <ul>
          <li>
            <h3>L :</h3>
            {L.map((e) => {
              return <p>{`  ${e}  `}</p>;
            })}
          </li>
          <li>
            <h3>U : </h3>
            {U.map((e) => {
              return <p>{`  ${e}  `}</p>;
            })}
          </li>
        </ul>
      </div>
      <h1>resultado: </h1>
      <div>
        <ul>
          <li>
            <h3>L :</h3>
            {L.map((e) => {
              return <p>{`  ${e}  `}</p>;
            })}
          </li>
          <li>
            <h3>U : </h3>
            {U.map((e) => {
              return <p>{`  ${e}  `}</p>;
            })}
          </li>
          <li>
            <h3>Z : </h3>
            {z.map((e) => {
              return <p>{`  ${e}  `}</p>;
            })}
          </li>
          <li>
            <h3>X : </h3>
            {x.map((e) => {
              return <p> {`  ${e}  `} </p>;
            })}
          </li>
        </ul>
      </div>
    </>
  );
}

export default doolittle


// var A = [[4, 3, -2, -7],
//      [3, 12, 8, -3],
//      [2, 3, -9, 3],
//      [1, -2, -5, 6],]
  
// var b = [20, 18, 31, 12]
