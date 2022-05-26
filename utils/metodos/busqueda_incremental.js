import tabulate from 'tabulate';
import TableGenerator from '../../components/TableGenerator';

function BusquedaIncremental({consFunction, xi, maxIter, deltaX}) {
    let funcion = Function('x', 'return ' + consFunction); //LAMDA
    console.log("FUNCION BUSQUEDA INCREMENTAL", funcion);
    let headers, ite, table, xf;
    headers = ["ite", "x", "f(x)"];
    table = [];
  
    if (funcion(xi) === 0) {
        console.log(`${xi} es raiz`);
        return <h1>{`${xi} es raiz`}</h1>
    } else {
      xf = parseInt(xi + deltaX);
      ite = 0;
      table.push([ite, parseInt(xi), parseInt(funcion(xi))]);
  
      while (funcion(xi) * funcion(xf) > 0 && ite < maxIter) {
        console.log(xi, xf, ite, table)
        xi = parseInt(xf);
        xf =parseInt(xi)+ parseInt(deltaX);
        ite += 1;
        table.push([ite, parseInt(xi), Number(funcion(xi))]);
      }
      ite += 1;
      
      table.push([ite, parseInt(xf), parseInt(funcion(xf))]);
      let resultado = tabulate(table, headers)

      return <TableGenerator headers={headers} table={resultado.stream}/>
  
    //   if (funcion(xi) * funcion(xf) === 0) {
    //     console.log(`${xf} es raiz`);
    //     console.log(`La iteración final fue ${ite}`);
    //   } else {
    //     if (funcion(xi) * funcion(xf) < 0) {
    //       console.log(`Entre ${xi} y ${xf} hay una raiz`);
    //       console.log(`La iteración final fue ${ite}`);
    //     } else {
    //       console.log(`Maximo de iteraciones alcanzado (${ite})`);
    //       console.log(`xf: ${xf}`);
    //     }
    //   }

    }
  }

  export default BusquedaIncremental