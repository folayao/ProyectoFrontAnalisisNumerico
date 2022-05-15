import React from 'react';

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
                        <th >
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
                        <tr >
                            {
                                headerVariable.map(input=>{
                                    return(
                                        <td>
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
