import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import RaicesMultiples from '../../../utils/metodos/raices_multiples';
const Index = () => {
  const [consFunction, setconsFunction] = useState('');
  const [consFunctionSD, setconsFunctionSD] = useState('');
  const [consFunctionTD, setconsFunctionTD] = useState('');
  const [consXI, setconsXI ] = useState(0);
  const [consTOL, setconsTOL] = useState(0);
  const [consMAXITER, setconsMAXITER] = useState(0);
  const [constERROR, setconstERROR] = useState(0);
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
          labelTitle={'primera derivada'}
          setFunction={setconsFunctionSD}
          typeInput={'text'}
          value={consFunctionSD}
        />
        <br />
        <Inputs
          labelTitle={'segundaDerivada'}
          setFunction={setconsFunctionTD}
          typeInput={'text'}
          value={consFunctionTD}
        />
        <br />
        <Inputs
          labelTitle={'xi'}
          setFunction={setconsXI}
          typeInput={'number'}
          value={consXI}
        />
        <br />
        <Inputs
          labelTitle={'tol'}
          setFunction={setconsTOL}
          typeInput={'number'}
          value={consTOL}
        />
        <br />
        <Inputs
          labelTitle={'max iter'}
          setFunction={setconsMAXITER}
          typeInput={'number'}
          value={consMAXITER}
        />
        <br />
        <Inputs
          labelTitle={'Tipo error'}
          setFunction={setconstERROR}
          typeInput={'number'}
          value={constERROR}
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
            xi={consXI}
            tol={consTOL}
            maxIter={consMAXITER}
            tError={constERROR}
          />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default Index;
