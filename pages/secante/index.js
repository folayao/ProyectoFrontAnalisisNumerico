import React, { useState, useEffect } from 'react';
import styles from '../../styles/pages/raices_multiples.module.scss';
import RaicesMultiples from '../../utils/metodos/raices_multiples';
import { ContainerInputs } from '../../components/Containers';
import Inputs from '../../components/Inputs';
import ReglaFalsa from '../../utils/metodos/regla_falsa';
import Secante from '../../utils/metodos/secante';

const index = () => {
  const [constFunction, setconstFunction] = useState('');
  const [x1, setx1] = useState(0);
  const [xf, setxf] = useState(0);
  const [tol, setTol] = useState(0);
  const [maxIter, setMaxIter] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);
  //constFunction, x1, xf, tol
  const resetStates = () => {
    setButtonShowTables(false);
    setx1(0);
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
          labelTitle={'x1'}
          setFunction={setx1}
          typeInput={'number'}
          value={x1}
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
          labelTitle={'Max Iter'}
          setFunction={setMaxIter}
          typeInput={'number'}
          value={maxIter}
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
          <Secante constFunction={constFunction} x1={x1} xf={xf} tol={tol} maxIter={maxIter} tError={tError} />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default index;
