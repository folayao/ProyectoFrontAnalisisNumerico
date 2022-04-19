import MathJax from 'react-mathjax2';
import React, { useState, useEffect } from 'react';
import { ContainerInputs } from '../../components/Containers';
import Inputs from '../../components/Inputs';
import Biseccion from '../../utils/metodos/biseccion'
const index = () => {
  const [consFunction, setconsFunction] = useState('');
  const [xi, setxi] = useState(0);
  const [xf, setxf] = useState(0);
  const [tol, setTol] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);

  const resetStates = () => {
    setButtonShowTables(false);
    setxi(0);
    setxf(0);
    settError(0);
    setTol(0);
    setconsFunction('');
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
          labelTitle={'tolerancia'}
          setFunction={setTol}
          typeInput={'number'}
          value={tol}
        />
        <br />
        <Inputs
          labelTitle={'tolerancia Error'}
          setFunction={settError}
          typeInput={'number'}
          value={tError}
        />
      <br />
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
          <Biseccion consFunction={consFunction} xi={xi} xf={xf} tol={tol} tError={0} />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default index;
