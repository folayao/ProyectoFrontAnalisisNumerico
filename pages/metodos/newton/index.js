import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import Newton from '../../../utils/metodos/newton';
const Index  = () => {
  const [consFunction, setconsFunction] = useState('');
  const [consFunctionSD, setconsFunctionSD] = useState('');
  const [xi, setxi] = useState(0);
  const [maxIter, setmaxIter] = useState(0);
  const [tol, setTol] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);
  //consFunction, xi, maxIter, tol
  const resetStates = () => {
    setButtonShowTables(false);
    setxi(0);
    setmaxIter(0);
    settError(0);
    setconsFunction('');
    setTol(0);
    setconsFunctionSD('');
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
          labelTitle={'f \''}
          setFunction={setconsFunctionSD}
          typeInput={'text'}
          value={consFunctionSD}
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
          <Newton consFunction={consFunction} consFunctionSD={consFunctionSD} xi={xi} maxIter={maxIter} tol={tol} tError={tError} />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default Index ;
