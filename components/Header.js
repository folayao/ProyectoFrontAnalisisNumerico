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
              <Link href='/biseccion'>
                <h1 className={styled['item-list-h1']}>Biseccion</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/raices_multiples'>
                <h1 className={styled['item-list-h1']}>Raices Multiples</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/busquedaincremental'>
                <h1 className={styled['item-list-h1']}>Busqueda Incremental</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/newton'>
                <h1 className={styled['item-list-h1']}>Newton</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/puntofijo'>
                <h1 className={styled['item-list-h1']}>Punto Fijo</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/secante'>
                <h1 className={styled['item-list-h1']}>Secante</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
              <Link href='/reglafalsa'>
                <h1 className={styled['item-list-h1']}>Regla falsa</h1>
              </Link>
            </li>
            <li className={styled['item-list']}>
                <FontAwesomeIcon icon={faGithub} className={styled['icon']} />
              <Link href='https://github.com/folayao/ProyectoFrontAnalisisNumerico'  >
                <h1 className={styled['item-list-h1']}>GitHub</h1>
              </Link>
            </li>
       
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
