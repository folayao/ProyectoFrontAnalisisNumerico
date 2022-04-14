import MathJax from 'react-mathjax2';
import React, { useState, useEffect} from 'react';
import styles from '../../styles/pages/raices_multiples.module.scss'
import { raices_multiples } from '../../utils/metodos/raices_multiples';
const index = () => {

  const [consFunction, setconsFunction] = useState('')
  const [consFunctionSD, setconsFunctionSD] = useState('')
  const [consFunctionTD, setconsFunctionTD] = useState('')

  const onChangeInputMathFunction = () =>{
    raices_multiples(consFunction, 0.5, 5e-7, consFunctionSD, consFunctionTD, 1000, 0);
  }
  
  return (
    <>
      <section className={styles['section-container-input']}>
        <label htmlFor="" className={styles['label']} >F</label>
        <input type='' onChange={(e)=>{
          setconsFunction(e.target.value)
        }} className={styles['input']}/>
      </section>
      <section className={styles['section-container-input']}>
        <label htmlFor="" className={styles['label']} >F'</label>
        <input type='text' onChange={(e)=>{
          e.preventDefault()
          setconsFunctionSD(e.target.value)
        }} className={styles['input']}/>
      </section>
      <section className={styles['section-container-input']}>
        <label htmlFor="" className={styles['label']} >F''</label>
        <input type='text' onChange={(e)=>{
          e.preventDefault()
          setconsFunctionTD(e.target.value)
        }} className={styles['input']}/>
      </section>
      <button onClick={onChangeInputMathFunction}>press</button>
    </>
  );
};

export default index;
