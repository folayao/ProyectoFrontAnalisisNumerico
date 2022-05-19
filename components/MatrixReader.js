import {React, useState} from 'react';
import index from '../pages/metodos/eliminaciongaussiana/index';
import Inputs from '../components/Inputs';

const MatrixReader = () => {
  let matrix = Math.matrix();
  const [matrixX, setmatrixX] = useState(2);
  const [matrixY, setmatrixY] = useState(2);

  return (
    <>
      <Inputs labelTitle={'x'} setFunction={setmatrixX} typeInput={'X'} value={matrixX} />
      <Inputs labelTitle={'y'} setFunction={setmatrixY} typeInput={'Y'} value={matrixY} />
      <table summary='Los grupos de música punk más famosos del Reino Unido'>
        <thead>
          <tr>
            {matrix.map((headerVariable, index) => {
              console.log(index);
              return <th key={`head-${index}`}>X {index}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {matrix.map((headerVariable, index) => {
            console.log(index);
            return (
              <tr key={`${index}-tr`}>
                {headerVariable.map((input, index) => {
                  return (
                    <td key={`${index}-td`}>
                      <input />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MatrixReader;
