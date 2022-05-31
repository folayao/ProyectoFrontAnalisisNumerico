import { useState } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import MatrixReader from '../../../components/MatrixReaders/MatrixReaderJacobi';

const Index = () => {
  const [yMatrixLength, setYMatrixLength] = useState(2);
  const [matrix, setmatrix] = useState(null);
  const [showMatriz, setshowMatriz] = useState(false);
  const [x, setx] = useState(0)
  const [tol, settol] = useState(0)
  const [iter, setiter] = useState(0)

  const createMatrix = (e) => {
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
    setmatrix(arrayToSet)
    setshowMatriz(true);
  };
  
  const ResetMatrix = (e) =>{
    e.preventDefault();
    setYMatrixLength(0);
    setmatrix(null);
  }
 
  return (
    <>
      <ContainerInputs>
      
        <Inputs
          labelTitle={'x'}
          typeInput='number'
          setFunction={setx}
          value={x}
        />  
        <Inputs
          labelTitle={'iteraciones'}
          typeInput='number'
          setFunction={setiter}
          value={iter}
        />
        <Inputs
          labelTitle={'tolerancia'}
          typeInput='number'
          setFunction={settol}
          value={tol}
        />
        <Inputs
          labelTitle={'TAMAÑO DE LA MATRIZ A'}
          typeInput='number'
          setFunction={setYMatrixLength}
          value={yMatrixLength}
        />

        <button onClick={createMatrix} type>
          {' '}
          CREAR MATRIZ
        </button>
        <button onClick={ResetMatrix} type>
          {' '}
          Reset
        </button>

        {showMatriz != false ? <MatrixReader matrix={matrix} long={yMatrixLength} x={x} tol={tol} iter={iter}/> : null}
      </ContainerInputs>
    </>
  );
};

export default Index;
