import React from 'react'
import style from '../styles/components/Container.module.scss'

const ContainerInputs = ({children}) => {
  return (
    <div className={style['container']}>
        <form action="" className={style['section-container-input']}>
            {children}
        </form>
    </div>
  )
}

export  {
    ContainerInputs
}