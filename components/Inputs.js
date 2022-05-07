import React from 'react';
import styles from '../styles/components/Inputs.module.scss'
const Inputs = ({ labelTitle, value, setFunction, typeInput }) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor='' className={styles['input-container__label']}>{labelTitle}</label>
      <input
        type={typeInput}
        onChange={(e) => {
          e.preventDefault();
          setFunction(e.target.value);
        }}
        value={value}
        className={styles['input-container__input']}
      />
    </div>
  );
};

export default Inputs;
