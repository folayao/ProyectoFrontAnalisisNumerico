import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../../components/Containers';
import Inputs from '../../../components/Inputs';
import ReglaFalsa from '../../../utils/metodos/regla_falsa';

const Index = () => {
  const [constFunction, setconstFunction] = useState('');
  const [xi, setxi] = useState(0);
  const [xf, setxf] = useState(0);
  const [tol, setTol] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);
  //constFunction, xi, xf, tol
  const resetStates = () => {
    setButtonShowTables(false);
    setxi(0);
    setxf(0);
    settError(0);
    setconstFunction('');
    setTol(0);
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
          labelTitle={'xi'}
          setFunction={setxi}
          typeInput={'number'}
          value={xi}
        />
        <br />
        <Inputs
          labelTitle={'xf'}
          setFunction={setxf}
          typeInput={'number'}
          value={xf}
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
          <ReglaFalsa constFunction={constFunction} xi={xi} xf={xf} tol={tol} tError={tError} />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default Index;
