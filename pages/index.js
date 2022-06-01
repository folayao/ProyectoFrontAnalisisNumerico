import React, { useState, useEffect } from 'react';
import styles from '../styles/Index.module.scss';
import { PrimaryButton } from '../components/Buttons';
import Resizer from 'react-image-file-resizer';
import { saveAs } from 'file-saver';
const zip = require('jszip')();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';
import Link from 'next/link';
import { faTwitter, faInstagramSquare, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <body className={styles['c']}>
      <div className={styles['index-container']}>ANALISIS NUMERICO - 2022-1</div>
      <div className={styles['links-list']}>
        <div className={styles['child1']}>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/biseccion'>
                <h1 className={styles['item-list-h1']}>Biseccion</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/raicesmultiples'>
                <h1 className={styles['item-list-h1']}>Raices Multiples</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/busquedaincremental'>
                <h1 className={styles['item-list-h1']}>Busqueda Incremental</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/newton'>
                <h1 className={styles['item-list-h1']}>Newton</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/puntofijo'>
                <h1 className={styles['item-list-h1']}>Punto Fijo</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/secante'>
                <h1 className={styles['item-list-h1']}>Secante</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/reglafalsa'>
                <h1 className={styles['item-list-h1']}>Regla falsa</h1>
              </Link>
            </button>
          </div>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/eliminaciongaussiana'>
                <h1 className={styles['item-list-h1']}>Eliminacion Gaussiana</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/pivoteoparcial'>
                <h1 className={styles['item-list-h1']}>Pivoteo Parcial</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/pivoteototal'>
                <h1 className={styles['item-list-h1']}>Pivoteo Total</h1>
              </Link>
            </button>
          </div>{' '}
        </div>
        <div className={styles['child2']}>
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/factorizacionlu'>
                <h1 className={styles['item-list-h1']}>Factorizacion Lu</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/crout'>
                <h1 className={styles['item-list-h1']}>Crout</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/doolittle'>
                <h1 className={styles['item-list-h1']}>Doolittle</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/cholesky'>
                <h1 className={styles['item-list-h1']}>Cholesky</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/jacobi'>
                <h1 className={styles['item-list-h1']}>Jacobi</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/gaussseidel'>
                <h1 className={styles['item-list-h1']}>Gauss-Seidel</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/vandermonde'>
                <h1 className={styles['item-list-h1']}>vandermonde</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/newtoncap3'>
                <h1 className={styles['item-list-h1']}>Diferencias Divididas</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/splineslineales'>
                <h1 className={styles['item-list-h1']}>splines lineales</h1>
              </Link>
            </button>
          </div>{' '}
          <div className={styles['item-list']}>
            <button className={styles['item-list__button']}>
              <Link href='/metodos/splinescuadraticos'>
                <h1 className={styles['item-list-h1']}>splines cuadraticos</h1>
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    </body>
  );
};

export default Home;
