import React from 'react';
import index from '../pages/metodos/eliminaciongaussiana/index';

const MatrixReader = () => {
  let matrix = [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]];

  return (
    <>
      <table summary='Los grupos de música punk más famosos del Reino Unido'>
        <thead>
          <tr>
            {
                matrix.map((headerVariable, index) => {
                    console.log(index);
                    return (
                        <th key={`head-${index}`}>
                            X {index}
                        </th>
                    )
                })
            }
          </tr>
        </thead>
        <tbody>
        {
                matrix.map((headerVariable, index) => {
                    console.log(index);
                    return (
                        <tr key={`${index}-tr`}>
                            {
                                headerVariable.map((input, index)=>{
                                    return(
                                        <td key={`${index}-td`}>
                                            <input/>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    
      </table>


    </>
  );
};

export default MatrixReader;
