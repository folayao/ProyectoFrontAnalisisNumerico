import { useState } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import MatrixReader from '../../../components/MatrixReaders/MatrixReader';

const Index = () => {
  const [yMatrixLength, setYMatrixLength] = useState(2);
  const [matrix, setmatrix] = useState(null);
  const [b, setb] = useState(null);
  const [showMatriz, setshowMatriz] = useState(false);
  const [vti, setVti] = useState(false);
  const CreateMatrix = (e) => {
    e.preventDefault();
    let arrayToSet = new Array();
    for (let rowIndex = 0; rowIndex < yMatrixLength; rowIndex++) {
      let row = new Array();
      for (let columnIndex = 0; columnIndex < yMatrixLength; columnIndex++) {
        let col = 0;
        row.push(col);
      }
      arrayToSet.push(row);
    }
    setmatrix(arrayToSet);
    setshowMatriz(true);
  };
  
  const ResetMatrix = (e) =>{
    e.preventDefault();
    setYMatrixLength(0);
    setmatrix(null);
  }
  const agregarVTI = (e) => {
    if (yMatrixLength > 0) {
      if (vti == false) {
        setVti(true);
        setYMatrixLength(yMatrixLength + 1);
        setshowMatriz(false);
      }

      if (vti == true) {
        setVti(false);
        setYMatrixLength(yMatrixLength - 1);
        setshowMatriz(false);
      }
    }
  };
  return (
    <>
      <ContainerInputs>
      
        <Inputs
          labelTitle={'TAMAÑO DE LA MATRIZ A'}
          typeInput='number'
          setFunction={setYMatrixLength}
          value={yMatrixLength}
        />
        <button type='button' onClick={agregarVTI}>
          Agregar vector de terminos independientes
        </button>
        <button onClick={CreateMatrix} type>
          {' '}
          CREAR MATRIZ
        </button>
        <button onClick={ResetMatrix} type>
          {' '}
          Reset
        </button>

        {showMatriz != false ? <MatrixReader matrix={matrix} headersN={yMatrixLength}/> : null}
      </ContainerInputs>
    </>
  );
};

export default Index;
