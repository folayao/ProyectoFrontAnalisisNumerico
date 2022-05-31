import { React, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import EG from '../../utils/metodos/splines_lineal';

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tbody>           
            <h3>X</h3>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <>
                      <tr key={`${indexrow}-tr`}>
                        <input type='number' {...register(`x-${indexrow}`)} />
                      </tr>
                    </>
                  );
                })}
            
            <h3>Y</h3>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <>
                      <tr key={`${indexrow}-tr`}>
                        <input type='number' {...register(`y-${indexrow}`)} />
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

      {showFunc ? <EG json={getValues()} long={long} /> : null}
    </>
  );
};

export default MatrixReader;
