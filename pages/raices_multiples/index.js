import MathJax from 'react-mathjax2';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/pages/raices_multiples.module.scss';
import RaicesMultiples from '../../utils/metodos/raices_multiples';
const index = () => {
  const [consFunction, setconsFunction] = useState('');
  const [consFunctionSD, setconsFunctionSD] = useState('');
  const [consFunctionTD, setconsFunctionTD] = useState('');
  const [buttonShowTables, setButtonShowTables] = useState(false)


  return (
    <>
      <section className={styles['section-container-input']}>
        <label htmlFor='' className={styles['label']}>
          F
        </label>
        <input
          type=''
          onChange={(e) => {
            setconsFunction(e.target.value);
          }}
          className={styles['input']}
        />
      </section>
      <section className={styles['section-container-input']}>
        <label htmlFor='' className={styles['label']}>
          F'
        </label>
        <input
          type='text'
          onChange={(e) => {
            e.preventDefault();
            setconsFunctionSD(e.target.value);
          }}
          className={styles['input']}
        />
      </section>
      <section className={styles['section-container-input']}>
        <label htmlFor='' className={styles['label']}>
          F''
        </label>
        <input
          type='text'
          onChange={(e) => {
            e.preventDefault();
            setconsFunctionTD(e.target.value);
          }}
          className={styles['input']}
        />
      </section>
      <button onClick={()=>{setButtonShowTables(true)}}>press</button>
      {
        buttonShowTables ? (

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
        ) : (<>NADA</>)
      }
    </>
  );
};

export default index;
