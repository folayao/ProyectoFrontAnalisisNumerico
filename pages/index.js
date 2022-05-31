import React, { useState, useEffect } from 'react';
import styles from '../styles/Index.module.scss';
import { PrimaryButton } from '../components/Buttons';
import Resizer from 'react-image-file-resizer';
import { saveAs } from 'file-saver';
const zip = require('jszip')();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script'

const Home = () => {
  return (
    <body>
      <div className={styles['index-container']}>
        ANALISIS NUMERICO - 2022-1
      </div>
    </body>
  );
};

export default Home;
 