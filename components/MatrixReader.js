import { React, useRef } from 'react';
import { useForm } from 'react-hook-form';

const MatrixReader = ({ matrix, headersN }) => {
  console.log('LA MATRIZ', matrix);
  const form = useRef(null);
  const { register, handleSubmit, getValues } = useForm({});

  const onSubmit = () => {
    let values = getValues();
    console.log(values);
  };
  return (
    <>
      <form>
        <table summary='Los grupos de música punk más famosos del Reino Unido'>
          <thead>
            <tr>
              {matrix == undefined
                ? null
                : (headersN) => {
                    for (let index = 0; index < headersN; index++) {
                      console.log(index);
                      if (index == headersN) {
                        return <th key={`head-${index}`}>X{index}</th>;
                        
                      }
                      return <th key={`head-${index}`}>X{index}</th>;
                    }
                  }}
            </tr>
          </thead>
          <tbody>
            {matrix == undefined
              ? null
              : matrix.map((row, indexrow) => {
                  return (
                    <tr key={`${indexrow}-tr`}>
                      {row.map((col, indexcol) => {
                        console.log(`${indexrow} + ${indexcol}`);
                        return (
                          <td key={`${indexcol}-${indexrow}td`}>
                            <input type='number' {...register(`${indexcol}-${indexrow}td`)} />;
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
