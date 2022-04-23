import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import PuntoFijo from '../../../utils/metodos/punto_fijo';

const Index = () => {
  const [constFunction, setconstFunction] = useState('');
  const [constFunctionG, setconstFunctionG] = useState('');
  const [xi, setxi] = useState(0);
  const [maxIter, setmaxIter] = useState(0);
  const [tol, setTol] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);
  //constFunction, xi, maxIter, tol
  const resetStates = () => {
    setButtonShowTables(false);
    setxi(0);
    setmaxIter(0);
    settError(0);
    setconstFunction('');
    setTol(0);
    setconstFunctionG('');
  };

  return (
    <>
      <ContainerInputs>
        <Inputs
          labelTitle={'f'}
          setFunction={setconstFunction}
          typeInput={'text'}
          value={constFunction}
        />
        <br />
        <Inputs
          labelTitle={'g'}
          setFunction={setconstFunctionG}
          typeInput={'text'}
          value={constFunctionG}
        />
        <br />
        <Inputs
          labelTitle={'xi'}
          setFunction={setxi}
          typeInput={'number'}
          value={xi}
        />
        <br />
        <Inputs
          labelTitle={'maxIter'}
          setFunction={setmaxIter}
          typeInput={'number'}
          value={maxIter}
        />
        <br />
        <Inputs
          labelTitle={'tol'}
          setFunction={setTol}
          typeInput={'number'}
          value={tol}
        />
        <br />
        <Inputs
          labelTitle={'Tol error'}
          setFunction={settError}
          typeInput={'number'}
          value={tError}
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
          <PuntoFijo constFunction={constFunction} constFunctionG={constFunctionG} xi={xi} maxIter={maxIter} tol={tol} tError={tError} />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default Index;
