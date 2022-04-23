import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import RaicesMultiples from '../../../utils/metodos/raices_multiples';
const Index = () => {
  const [consFunction, setconsFunction] = useState('');
  const [consFunctionSD, setconsFunctionSD] = useState('');
  const [consFunctionTD, setconsFunctionTD] = useState('');
  const [buttonShowTables, setButtonShowTables] = useState(false);

  const resetStates = () => {
    setButtonShowTables(false);
    setconsFunction('');
    setconsFunctionSD('');
    setconsFunctionTD('');
  };

  return (
    <>
      <ContainerInputs>
        <Inputs
          labelTitle={'f'}
          setFunction={setconsFunction}
          typeInput={'text'}
          value={consFunction}
        />
        <br />
        <Inputs
          labelTitle={'x1'}
          setFunction={setconsFunctionSD}
          typeInput={'number'}
          value={consFunctionSD}
        />
        <br />
        <Inputs
          labelTitle={'xf'}
          setFunction={setconsFunctionTD}
          typeInput={'number'}
          value={consFunctionTD}
        />
       
      </ContainerInputs>
      <button
        onClick={() => {
          setButtonShowTables(true);
        }}
      >
        Calcular
      </button>
      <button onClick={resetStates}>Restablecer</button>
      {buttonShowTables ? (
        <>
          <RaicesMultiples
            consFunction={consFunction}
            consFunctionSD={consFunctionSD}
            consFunctionTD={consFunctionTD}
            xi={0.5}
            tol={5e-7}
            maxIter={1000}
            tError={0}
          />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default Index;
