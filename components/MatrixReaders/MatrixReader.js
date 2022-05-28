import { React, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const MatrixReader = ({ matrix, headersN, rowsLength }) => {
  const { register, getValues, reset } = useForm({});
  const [headersLength, setHeadersLength] = useState([]);

  useEffect(() => {
    let arreglo = [];
    for (let index = 0; index < headersN; index++) {
      arreglo.push(index);
    }
    setHeadersLength(arreglo);
    reset();
  }, [headersN]);

  const onSubmit = () => {
    let v = getValues();
    console.log(v);
    let col;
    let arreglo = [];

    for (let index = 0; index < headersN; index++) {
      arreglo.push([]);
    }
    for (let index = 0; index < headersN; index++) {
      Object.entries(v).forEach((ent) => {
        let row = ent[0].split('-'); // [1] fila a la cual se hará el push
        if (index == row[1]) {
        arreglo[index].push(parseFloat(ent[1]))
        }
      });
    }
    console.log(arreglo)
  };

  return (
    <>
      <form>
        <table>
          <thead>
            <tr>
              {matrix == undefined
                ? null
                : headersLength.map((i, index) => {
                    console.log(i);
                    return <th key={`head-${index}`}>X{index}</th>;
                  })}
            </tr>
          </thead>
          <tbody>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <tr key={`${indexrow}-tr`}>
                      {row.map((col, indexcol) => {
                        return (
                          <td key={`${indexcol}-${indexrow}td`}>
                            <input type='number' {...register(`${indexcol}-${indexrow}`)} />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <button type='button' onClick={onSubmit}>
          REALIZAR CALCULO
        </button>
      </form>
    </>
  );
};

export default MatrixReader;
