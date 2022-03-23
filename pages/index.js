import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Index.module.scss';
import { LabelButtonForAddFiles, SecondaryButton } from '../components/Buttons';
import Resizer from 'react-image-file-resizer';
import { saveAs } from 'file-saver';
const zip = require('jszip')();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [files, setFiles] = useState();
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        796,
        1123,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'blob'
      );
    });

  const onClicToA4 = () => {
    let isJPG = false;
    Object.values(files).forEach((file) => {
      isJPG = file.type == 'image/jpeg' ? true : false;
    });

    if (isJPG) {
        Object.values(files).map((f) => {
          const image = resizeFile(f);
          zip.file(f.name, image);
        });
        zip.generateAsync({ type: 'blob' }).then((content) => {
          saveAs(content, 'images.zip');
          
        });
    }else{
      alert("Only upload JPG files!")
    }
  };

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
          <SecondaryButton text='ToA4' onclic={onClicToA4} icon={faDownload} />
        </section>
      </div>
    </body>
  );
};

export default Home;
