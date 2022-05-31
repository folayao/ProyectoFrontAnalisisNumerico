import { columna, dot, eye, zero } from './auxiliares.js';
import {arrayA, arrayB} from '../jsontoarray'

import { sustitucion_progresiva, sustitucion_regresivaLU } from './sustituciones.js';

function crout({ json, long }) {
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject, long);
  let b = jsonB.ar;
  var L, U, n, x, z;
  n = A.length;
  L = zero(n);
  U = eye(n);

  for (var i = 0, _pj_a = n - 1; i < _pj_a; i += 1) {
    for (var j = i, _pj_b = n; j < _pj_b; j += 1) {
      L[j][i] = A[j][i] - dot(L[j], 0, i - 1, columna(U, i), 0, i - 1);
    }

    for (var j = i + 1, _pj_b = n; j < _pj_b; j += 1) {
      U[i][j] = (A[i][j] - dot(L[i], 0, i - 1, columna(U, j), 0, i - 1)) / L[i][i];
    }
  }
  L[n - 1][n - 1] = A[n - 1][n - 1] - dot(L[n - 1], 0, n - 1, columna(U, n - 1), 0, n - 1);
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
// A = [[4, 3, -2, -7], [3, 12, 8, -3], [2, 3, -9, 3], [1, -2, -5, 6]];
// b = [20, 18, 31, 12];

// let A = [
//   [4,-1,0,3],
//   [1,15.5,3,8],
//   [0,-1.3,-4,1.1],
//   [14,5,-2,30],
// ]

// let b = [1,1,1,1]
export default crout;
