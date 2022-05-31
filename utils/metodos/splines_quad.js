
import { columna, dot, eye, zero, zeroV } from './auxiliares.js';
import { eliminacion_gausiana_piv_parcial } from './egpp';
import { arrayX, arrayY } from '../jsontoarray';


function splines_quad({json, long}) {
  let first = arrayX(json, long);
  let x = first.ar;
  let y = arrayY(first.objeto).ar;
  var cont, contX, m, matriz, n, vector_terminos;
  n = x.length - 1;
  m = 3 * n;
  cont = 0;
  contX = 0;
  matriz = zero(m);                     //Math
  vector_terminos = zeroV(m);
  matriz[0][0] = Math.pow(x[contX], 2);
  matriz[0][1] = Math.pow(x[contX], 1);
  matriz[0][2] = 1;
  vector_terminos[0] = y[contX];
  contX += 1;

  for (var i = 1, _pj_a = 2 * n; i < _pj_a; i += 1) {
    matriz[i][cont * 3] = Math.pow(x[contX], 2);
    matriz[i][cont * 3 + 1] = Math.pow(x[contX], 1);
    matriz[i][cont * 3 + 2] = 1;
    vector_terminos[i] = y[contX];

    if (i % 2 === 0) {
      contX += 1;
    }

    if (i % 2 !== 0) {
      cont += 1;
    }
  }

  cont = 0;
  contX = 1;
  console.log();

  for (var i = 0, _pj_a = n - 1; i < _pj_a; i += 1) {
    matriz[2 * n + i][cont * 3] = 2 * x[contX];
    matriz[2 * n + i][cont * 3 + 1] = 1;
    cont += 1;
    matriz[2 * n + i][cont * 3] = -2 * x[contX];
    matriz[2 * n + i][cont * 3 + 1] = -1;
    contX += 1;
    vector_terminos[2 * n + i] = 0;
  }

  matriz[m - 1][0] = 2;
  vector_terminos[m - 1] = 0;
  console.log(matriz);
  console.log();
  console.log(vector_terminos);
  console.log();
 let resultados = eliminacion_gausiana_piv_parcial(matriz,vector_terminos)
  
 return (
  <ul>
    {resultados.map((e) => {
      return <li>{e}</li>;
    })}
  </ul>
);
}

export default splines_quad



// var X, Y;
// X = [1, 2, 4];
// Y = [141, 112.7, 125.63];
// splines_quad(X, Y);
