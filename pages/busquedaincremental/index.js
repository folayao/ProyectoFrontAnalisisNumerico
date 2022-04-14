import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
//  import styles from '../styles/Index.module.scss';
import { LabelButtonForAddFiles, SecondaryButton } from '../components/Buttons';
import Resizer from 'react-image-file-resizer';
import { saveAs } from 'file-saver';
const zip = require('jszip')();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';

const index = () => {
  return (
    <body>
    <div className={styles['index-container']}>
      <section id='title'>
        <div className={styles['title-container']}>
          <h1 className={styles['title-container__title']}>
            ToA4
            <FontAwesomeIcon icon={faImages} className={styles['icon']} />
          </h1>
        </div>
      </section>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <section id='button-add-container'>
        <LabelButtonForAddFiles text='Add Files' setStateOfFiles={setFiles} icon={faPlus} />
      </section>
      <section id='files'>
        <div className={styles['files-container']}>
          <ul className={styles['files-container__list']}>
            {files != null ? (
              Object.values(files).map((file, index) => {
                return (
                  <>
                    <li
                      key={`${index}-${file.name}`}
                      className={styles['files-container__list--file']}
                    >
                      {file.name}
                    </li>
                  </>
                );
              })
            ) : (
              <div className={styles['no-items-list']}>You doesnt upload files!</div>
            )}
          </ul>
        </div>
      </section>
      <section id='button-add-container'>
        <SecondaryButton text='ToA4' onclic={onClicToA4}  />
      </section>
    </div>
  </body>
  )
}

export default index