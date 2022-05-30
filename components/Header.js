import React from 'react';
import styled from '../styles/components/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagramSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Header = () => {
  const openContainerNav = () => {
    document.getElementById('containerMenu').style.width = '100%';
  };
  const closeContainerNav = () => {
    document.getElementById('containerMenu').style.width = '0';
  };

  return (
    <>
      <div className={styled['open-nav-container']}>
        <button onClick={openContainerNav} className={styled['open-nav-container__button']}>
          <FontAwesomeIcon icon={faBars} className={styled['open-nav-container__button--icon']} />
        </button>
      </div>
      <div id='containerMenu' className={styled['nav-container']}>
        <div className={styled['button-close-container']}>
          <button onClick={closeContainerNav} className={styled['close-nav-container-button']}>
            <FontAwesomeIcon
              icon={faTimes}
              className={styled['close-nav-container-button__button']}
            />
          </button>
        </div>
        <div className={styled['brand']}>
          <img src='' alt='' />
        </div>
        <nav className={styled['links-container']}>
          <ul className={styled['links-list']}>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/biseccion'>
                  <h1 className={styled['item-list-h1']}>Biseccion</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/raicesmultiples'>
                  <h1 className={styled['item-list-h1']}>Raices Multiples</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/busquedaincremental'>
                  <h1 className={styled['item-list-h1']}>Busqueda Incremental</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/newton'>
                  <h1 className={styled['item-list-h1']}>Newton</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/puntofijo'>
                  <h1 className={styled['item-list-h1']}>Punto Fijo</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/secante'>
                  <h1 className={styled['item-list-h1']}>Secante</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/reglafalsa'>
                  <h1 className={styled['item-list-h1']}>Regla falsa</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/eliminaciongaussiana'>
                  <h1 className={styled['item-list-h1']}>Eliminacion Gaussiana</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/pivoteoparcial'>
                  <h1 className={styled['item-list-h1']}>Pivoteo Parcial</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/pivoteototal'>
                  <h1 className={styled['item-list-h1']}>Pivoteo Total</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/factorizacionlu'>
                  <h1 className={styled['item-list-h1']}>Factorizacion Lu</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/crout'>
                  <h1 className={styled['item-list-h1']}>Crout</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/doolittle'>
                  <h1 className={styled['item-list-h1']}>Doolittle</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/cholesky'>
                  <h1 className={styled['item-list-h1']}>Cholesky</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/jacobi'>
                  <h1 className={styled['item-list-h1']}>Jacobi</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/gaussseidel'>
                  <h1 className={styled['item-list-h1']}>Gauss-Seidel</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/vandermonde'>
                  <h1 className={styled['item-list-h1']}>vandermonde</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/newtoncap3'>
                  <h1 className={styled['item-list-h1']}>newtoncap3</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/splineslineales'>
                  <h1 className={styled['item-list-h1']}>splines lineales</h1>
                </Link>
              </button>
            </li>{' '}
            <li className={styled['item-list']}>
              <button className={styled['item-list__button']} onClick={closeContainerNav}>
                <Link href='/metodos/splinescuadraticos'>
                  <h1 className={styled['item-list-h1']}>splines cuadraticos</h1>
                </Link>
              </button>
            </li>
            <li className={styled['item-list']}>
              <div className={styled['item-list__button']}>
                <Link href='https://github.com/folayao/ProyectoFrontAnalisisNumerico'>
                  <FontAwesomeIcon icon={faGithub} className={styled['icon']} />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
