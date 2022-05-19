import {React, useState} from 'react';
import index from '../pages/metodos/eliminaciongaussiana/index';
import Inputs from '../components/Inputs';

const MatrixReader = () => {
 
  const [matrixX, setmatrixX] = useState([]);
  const [matrixY, setmatrixY] = useState([]);

  return (
    <>      
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
