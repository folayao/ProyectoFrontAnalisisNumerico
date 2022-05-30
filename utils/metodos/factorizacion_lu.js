import { eye } from "./auxiliares.js";
// eye = require('auxiliares');
import { sustitucion_progresiva, sustitucion_regresivaLU } from './sustituciones.js';
// sustitucion_progresiva = require('sustituciones');
// sustitucion_regresiva = require('sustituciones');import { arrayA, arrayB } from '../jsontoarray';
import { arrayA, arrayB } from '../jsontoarray';

function pivoteo_parcial(A, n, k) {
  var fila2, mayor;
  mayor = fila2 = 0;

  for (var i = k; i < n; i ++) {
    fila2 = Math.abs(mayor) < Math.abs(A[i][k]) ? i : fila2;
    mayor = Math.abs(mayor) < Math.abs(A[i][k]) ? A[i][k] : mayor;
  }

  return [mayor, fila2];
}

function cambio_fila(A, fila1, fila2) {
  var A_aux;
  A_aux = Object.values(A);
  A[fila1] = A[fila2];
  A[fila2] = A_aux[fila1];
  return A;
}

function factorizacion_LU({json, long}) {
  const jsonA = arrayA(json, long);
  let A = jsonA.ar;
  let bObject = jsonA.objeto;
  const jsonB = arrayB(bObject,long);
  let b = jsonB.ar;
  let n = A.length

  var L, M, P, fila2, mayor, x, z;
  console.log("Empezo el metodo:");
  L = eye(4);
  P = eye(4);

  for (var k = 0; k < n; k += 1) {
    for (var i = k + 1; i < n; i += 1) {
      [mayor, fila2] = pivoteo_parcial(A, n, k);
      A = cambio_fila(A, k, fila2);
      P = cambio_fila(P, k, fila2);
      b = cambio_fila(b, k, fila2);
      M = A[i][k] / A[k][k];
      L[i][k] = M;
      A[i][k] = 0;

      for (var j = k + 1; j < n; j += 1) {
        A[i][j] = A[i][j] - M * A[k][j];
      }
    }
  }

  console.log("Empezo la sustitucion:");
  z = sustitucion_progresiva(L, n, b);
  x = sustitucion_regresivaLU(A, z);
  return (
    <div>
      <ul>
        <li><h3>A : </h3>{A}</li>
        <li><h3>L : </h3>{L}</li>
        <li><h3>z : </h3>{z}</li>
        <li><h3>x : </h3>{x}</li>
      </ul>
    </div>
  )

}

export default factorizacion_LU;

