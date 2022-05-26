import { React, useRef} from 'react';
import index from '../pages/metodos/eliminaciongaussiana/index';
import Inputs from '../components/Inputs';

const MatrixReader = ({ matrix }) => {
  console.log('LA MATRIZ', matrix);
  const form = useRef(null);

  const Submit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    console.log(data, "DATA");
  };
  return (
    <>
    <form ref={form} onSubmit={Submit}>
      <table summary='Los grupos de música punk más famosos del Reino Unido'>
        <thead>
          <tr>
            {matrix == undefined
              ? null
              : matrix.map((headerVariable, index) => {
                  console.log(index);
                  return <th key={`head-${index}`}>X {index}</th>;
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
                        console.log(`${indexrow} + ${indexcol}`);
                        return (
                          <td key={`${indexcol}-${indexrow}td`}>
                            <input type='number' key={name} name={name} />;
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
        </tbody>
      </table>
          </form>
          <button type='submit' onClick={Submit}>REALIZAR CALCULO</button>
    </>
  );
};

export default MatrixReader;
