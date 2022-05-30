import { React, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import EG from '../../utils/metodos/eliminacion_gausiana';
import { jsontoarray } from '../../utils/jsontoarray';

const MatrixReader = ({ matrix, long }) => {
  const { register, getValues, reset } = useForm({});
  const [headerslong, setHeaderslong] = useState([]);
  const [showFunc, setshowFunc] = useState(false);
  const [a, seta] = useState([]);
  const [b, setb] = useState([]);

  useEffect(() => {
    let arreglo = [];
    for (let index = 0; index < long; index++) {
      arreglo.push(index);
    }
    setHeaderslong(arreglo);
    reset();
  }, [long]);

  let arregloA = [];
  let arreglob = [];
  for (let index = 0; index <= long-1; index++) {
    arregloA.push([]);
  }

  const onSubmit = () => {
    let v = getValues();

    console.log(v, "V");
    setshowFunc(!showFunc);
  };

  return (
    <>
      <form>
        <table>
          <thead>
            <tr>
              {matrix == undefined
                ? null
                : headerslong.map((i, index) => {
                    return <th key={`head-${index}`}>X{index}</th>;
                  })}
            </tr>
          </thead>
          <tbody>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <>
                      <tr key={`${indexrow}ptr`}>
                        {row.map((col, indexcol) => {
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
      </form>

      <button type='button' onClick={onSubmit}>
        REALIZAR CALCULO
      </button>

      {showFunc ? <EG json={getValues()} long={long}/> : null}
    </>
  );
};

export default MatrixReader;
