import React from 'react';
import styles from '../styles/Components/Buttons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * 
 * @param {Text that will be stay into de button} text 
 * CSS
 *  .button-add-container{
        .button-add-container__button{
            .button-add-container__button--input{
                display: none;
            }
        }
        .button-add-container__button:hover{
        }
        .button-add-container__button:active{
        }
    }
 * @returns 
 */
const LabelButtonForAddFiles = ({ text, setStateOfFiles, icon }) => {
  return (
    <div className={styles['button-addFile-container']}>
      <label className={styles['button-addFile-container__button']}>
        <input
          type='file'
          multiple={true}
          className={styles['button-addFile-container__button--input']}
          onChange={(e) => setStateOfFiles(e.target.files)}
        />
        {text}
        <FontAwesomeIcon icon={icon} className={styles['icon']} />
      </label>
    </div>
  );
};

const PrimaryButton = ({ text, onclic }) => {
  return (
    <div className={styles['button-primary-container']}>
      <button className={styles['button-primary-container__button']} onClick={onclic}>
        {text}
        <FontAwesomeIcon icon={icon} className={styles['icon']} />
      </button>
    </div>
  );
};

const SecondaryButton = ({ text, onclic, icon }) => {
  return (
    <div className={styles['button-secondary-container']}>
      <button className={styles['button-secondary-container__button']} onClick={onclic}>
        {text}
        <FontAwesomeIcon icon={icon} className={styles['icon']} />
      </button>
    </div>
  );
};

module.exports = {
  LabelButtonForAddFiles,
  PrimaryButton,
  SecondaryButton,
};
