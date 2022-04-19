import MathJax from 'react-mathjax2';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/pages/raices_multiples.module.scss';
import RaicesMultiples from '../../utils/metodos/raices_multiples';
import { ContainerInputs } from '../../components/Containers';
import Inputs from '../../components/Inputs';
import Biseccion from '../../utils/metodos/biseccion'
import BusquedaIncremental from '../../utils/metodos/busqueda_incremental';
const index = () => {
  const [consFunction, setconsFunction] = useState('');
  const [xi, setxi] = useState(0);
  const [maxIter, setmaxIter] = useState(0);
  const [deltaX, setdeltaX] = useState(0);
  const [tError, settError] = useState(0);
  const [buttonShowTables, setButtonShowTables] = useState(false);
  //consFunction, xi, maxIter, deltaX
  const resetStates = () => {
    setButtonShowTables(false);
    setxi(0);
    setmaxIter(0);
    settError(0);
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
          labelTitle={'maxIter'}
          setFunction={setmaxIter}
          typeInput={'number'}
          value={maxIter}
        />
        <br />
        <Inputs
          labelTitle={'deltaX'}
          setFunction={setdeltaX}
          typeInput={'number'}
          value={deltaX}
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
          <BusquedaIncremental consFunction={consFunction} xi={xi} maxIter={maxIter} deltaX={deltaX}  />
        </>
      ) : (
        <>NADA</>
      )}
    </>
  );
};

export default index;
