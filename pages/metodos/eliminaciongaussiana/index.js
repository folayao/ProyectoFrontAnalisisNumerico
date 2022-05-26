import { useState } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import MatrixReader from './../../../components/MatrixReader';

const Index = () => {
  const [xMatrixLength, setXMatrixLength] = useState(2);
  const [yMatrixLength, setYMatrixLength] = useState(2);
  const [matrix, setmatrix] = useState(null);
  const [showMatriz, setshowMatriz] = useState(false);

  const CreateMatrix = (e) => {
    e.preventDefault();
    let arrayToSet = new Array();
    for (let rowIndex = 0; rowIndex < xMatrixLength; rowIndex++) {
      let row = new Array();
      for (let columnIndex = 0; columnIndex < yMatrixLength; columnIndex++) {
        let col = 0;
        row.push(col);
      }
      arrayToSet.push(row);
    }

    setmatrix(arrayToSet);
    console.log(matrix);
    setshowMatriz(true);
  };

  return (
    <>
      <ContainerInputs>
        <input
          type='number'
          onChange={(e) => setXMatrixLength(e.target.value)}
          value={xMatrixLength}
        />
        <input
          type='number'
          onChange={(e) => setYMatrixLength(e.target.value)}
          value={yMatrixLength}
        />
        <button onClick={CreateMatrix} type>
          {' '}
          CREAR MATRIZ
        </button>

        {showMatriz != false ? <MatrixReader matrix={matrix} /> : null}
      </ContainerInputs>
    </>
  );
};

export default Index;
