import { React, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import EG from '../../utils/metodos/eliminacion_gausiana_piv_parcial';

const MatrixReader = ({ matrix, long }) => {
  const { register, getValues, handleSubmit } = useForm({});
  const [headerslong, setHeaderslong] = useState([]);
  const [showFunc, setshowFunc] = useState(false);

  useEffect(() => {
    let arreglo = [];
    for (let index = 0; index < long; index++) {
      arreglo.push(index);
    }
    setHeaderslong(arreglo);
  }, [long]);

  let arregloA = [];
  let arreglob = [];
  for (let index = 0; index <= long - 1; index++) {
    arregloA.push([]);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setshowFunc(!showFunc);
  };
  console.log(matrix);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              {matrix == undefined
                ? null
                : headerslong.map((i, index) => {
                  console.log(i);
                    return <th key={`head-${index}`}>X{index}</th>;
                  })}
            </tr>
          </thead>
          <tbody>
            {matrix == null
              ? null
              : matrix.map((row, indexrow) => {
                console.log(row);
                  return (
                    <>
                      <tr key={`${indexrow}ptr`}>
                        {row.map((col, indexcol) => {
                          console.log(col);
                          return (
                            <>
                              <td key={`${indexcol}p${indexrow}td`}>
                                <input type='number' {...register(`${indexcol}p${indexrow}`)} />
                              </td>
                            </>
                          );
                        })}
                      </tr>
                    </>
                  );
                })}
            <h3>VTI</h3>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <>
                      <tr key={`${indexrow}-tr`}>
                        <input type='number' {...register(`VTIp${indexrow}`)} />
                      </tr>
                    </>
                  );
                })}
          </tbody>
        </table>

        <button
          type='submit'
          onClick={(e) => onSubmit(e)}
        >
          REALIZAR CALCULO
        </button>
      </form>

      {showFunc ? <EG json={getValues()} long={long}  /> : null}
    </>
  );
};

export default MatrixReader;
